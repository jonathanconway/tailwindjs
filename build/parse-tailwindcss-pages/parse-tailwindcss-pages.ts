import { Cheerio, load, Element, CheerioAPI } from "cheerio";
import { Text } from "domhandler";

import * as pages from "../build-tailwindcss-pages/tailwindcss-pages";
import {
  convertCodeNameToTitle,
  convertTailwindCssNameToCodeName,
  uniq,
} from "../utils";
import {
  Definition,
  UtilityArea,
  UtilityGroup,
  UtilityArbitrary,
  Utility,
  ModifierGroup,
  Modifier,
  ModifierArbitrary,
} from "./parse-tailwindcss-pages.types";

const utilityArbitraryNames = {};

export function parseTailwindCssPages(): Definition {
  const areaNames = Object.keys(pages).filter(
    (page) => !["docs", "states"].includes(page)
  );

  const areas = areaNames.map(parseLibArea);

  const modifierGroups = parseLibModifiers();

  return { utilityAreas: areas, modifierGroups };
}

function parseLibArea(areaName: string): UtilityArea {
  return {
    name: areaName,
    title: convertCodeNameToTitle(areaName),
    groups: Object.keys(pages[areaName])
      .map((groupName) => parseLibGroup(areaName, groupName))
      .filter(Boolean),
  };
}

function getLibGroupTableType(classTableColNames: readonly string[]) {
  switch (true) {
    case classTableColNames[0] === "Class" &&
      classTableColNames[1] === "Properties":
      return "regular";
    case classTableColNames[0] === "Class" &&
      classTableColNames[1] === "Breakpoint" &&
      classTableColNames[2] === "Properties":
      return "container";
    default:
      return undefined;
  }
}

function parseLibGroup(
  areaName: string,
  groupName: string
): UtilityGroup | undefined {
  const page = pages[areaName][groupName];
  const $ = load(page.html);
  const title = $("#header h1").eq(0).text();
  const description = $("#header p").eq(1).text();
  const tailwindCssUrl = page.url;
  const classTableRows = $("#class-table tbody tr");
  const classTableColNames = $("#class-table thead th div")
    .toArray()
    .map((div: Element) => (div.children[0] as Text)?.data?.toString());

  const classTableType = getLibGroupTableType(classTableColNames);

  if (!classTableType) {
    console.log(`Unrecognised table type for ${areaName}, ${groupName}`);
    return undefined;
  }

  const buildUtilities = {
    regular: parseLibUtilities,
    container: parseLibUtilityContainer,
  };

  const name = groupName;

  const utilities = buildUtilities[classTableType](
    groupName,
    classTableRows,
    $
  );

  const arbitraries = parseLibGroupArbitraries($, utilities, tailwindCssUrl);

  return {
    name,
    title,
    description,
    utilities,
    tailwindCssUrl,
    arbitraries,
  };
}

function parseLibGroupArbitraries(
  $: CheerioAPI,
  utilities: readonly Utility[],
  tailwindCssGroupUrl: string
): readonly UtilityArbitrary[] {
  const arbitraryHeadingElement = $("#arbitrary-values");
  if (arbitraryHeadingElement.length === 0) {
    return [];
  }

  const nextP = arbitraryHeadingElement.next("p");

  const nextCode = arbitraryHeadingElement.next("code");
  const nextCodeHighlight = nextCode.find("code-highlight").text().toString();
  const nextCodeHighlightPrefix = nextCodeHighlight.split("-[")[0];

  const description = nextP.text().toString();

  const utilityNames = utilities.map((utility) => utility.tailwindCssName);
  const utilityPrefixes = utilityNames.map((name) =>
    name.split("-").slice(0, -1).join("-")
  );

  const names = [...utilityPrefixes, nextCodeHighlightPrefix].filter((name) =>
    name.trim()
  );

  const namesUniq = uniq(names);

  const namesUniqNotAlreadyUsed = namesUniq.filter(
    (name) => !utilityArbitraryNames[name]
  );

  const tailwindCssUrl = `${tailwindCssGroupUrl}#arbitrary-values`;

  const arbitraries = namesUniqNotAlreadyUsed.map((name) => ({
    name: name.replaceAll("-", "_"),
    description,
    tailwindCssUrl,
    tailwindCssName: name,
  }));

  for (const nameNowUsed of namesUniqNotAlreadyUsed) {
    utilityArbitraryNames[nameNowUsed] = true;
  }

  return arbitraries;
}

function parseLibUtilities(
  tailwindCssUrl: string,
  classTableRows: Cheerio<Element>,
  $: CheerioAPI
): readonly Utility[] {
  return classTableRows
    .toArray()
    .map((tr) => parseLibUtility(tailwindCssUrl, tr, $));
}

function parseLibUtility(
  tailwindCssUrl: string,
  tr: Element,
  $: CheerioAPI
): Utility {
  const tds = tr.children as Element[];

  const tailwindCssName = (tds[0].children[0] as Text).data;

  const name = convertTailwindCssNameToCodeName(tailwindCssName);

  const cssProperties = $(tds[1])
    .text()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return {
    name,
    tailwindCssName,
    tailwindCssUrl,
    cssProperties,
  };
}

function parseLibUtilityContainer(
  tailwindCssUrl: string,
  classTableRows: Cheerio<Element>,
  $: CheerioAPI
): readonly Utility[] {
  const name = "container";
  const tailwindCssName = name;
  const cssProperties = classTableRows.toArray().map((tr, index) => {
    const cssColIndex = index === 0 ? 2 : 1;
    const cssColText = $(tr.children[cssColIndex]).text();

    const breakpointColIndex = index === 0 ? 1 : 0;
    const breakpointColText = $(tr.children[breakpointColIndex]).text();

    return `${cssColText} /* Breakpoint: ${breakpointColText} */`;
  });

  const containerUtility: Utility = {
    name,
    tailwindCssName,
    tailwindCssUrl,
    cssProperties,
  };

  return [containerUtility];
}

const arbitraryNames = {};

function parseLibModifiers(): readonly ModifierGroup[] {
  const $ = load(pages.states.html);
  const trs = $("h3#quick-reference")
    .nextAll("div")
    .first()
    .find("table tbody tr");

  const modifierGroups: ModifierGroup[] = [];

  for (const tr of trs.toArray()) {
    const modifiers: Modifier[] = [];
    const arbitraries: ModifierArbitrary[] = [];

    const tailwindCssNameCol = $(tr).find("td").eq(0);
    const tailwindCssName = tailwindCssNameCol.text();

    const tailwindCssHashUrl = tailwindCssNameCol.find("a").attr("href");

    const name = convertTailwindCssNameToCodeName(tailwindCssName);
    const cssCode = $(tr).find("td").eq(1).text();

    const modifierSubHeading = $(tailwindCssHashUrl);

    const tailwindCssUrl = `${pages.states.url}${tailwindCssHashUrl}`;

    const description = modifierSubHeading.next("p").text();

    const isArbitrary = tailwindCssName.includes("[…]");
    if (isArbitrary) {
      if (arbitraryNames[name]) {
        continue;
      }

      arbitraryNames[name] = true;

      const arbitrary = {
        name,
        description,
        tailwindCssName,
        tailwindCssUrl,
      };

      arbitraries.push(arbitrary);
    } else {
      const modifier: Modifier = {
        name,
        cssCode,
        description,
        tailwindCssName,
        tailwindCssUrl,
      };

      modifiers.push(modifier);
    }

    const modifierGroup = {
      modifiers,
      arbitraries,
      name,
      tailwindCssUrl,
    };

    modifierGroups.push(modifierGroup);
  }

  return modifierGroups;
}
