import { JSDOM } from "jsdom";

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

  const jsdom = new JSDOM(page.html);

  const title = jsdom.window.document.querySelector("#header h1").textContent;
  const description =
    jsdom.window.document.querySelectorAll("#header p")[1].textContent;
  const tailwindCssUrl = page.url;
  const classTableRows = Array.from(
    jsdom.window.document.querySelectorAll("#class-table tbody tr")
  );
  const classTableColNames = Array.from(
    jsdom.window.document.querySelectorAll("#class-table thead th div")
  ).map((div) => div.textContent);

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
    jsdom
  );

  const arbitraries = parseLibGroupArbitraries(
    jsdom,
    utilities,
    tailwindCssUrl
  );

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
  jsdom: JSDOM,
  utilities: readonly Utility[],
  tailwindCssGroupUrl: string
): readonly UtilityArbitrary[] {
  const arbitraryHeadingElement =
    jsdom.window.document.querySelector("#arbitrary-values");
  if (!arbitraryHeadingElement) {
    return [];
  }

  const nextP = arbitraryHeadingElement.nextElementSibling; // p

  const nextCode = nextP.nextElementSibling; // pre

  const nextCodeHighlight =
    nextCode.querySelector(".code-highlight").textContent;
  const nextCodeHighlightPrefix = nextCodeHighlight
    .split("-[")[0]
    .split(":")
    .slice(-1)[0];

  const description = nextP.textContent;

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
  classTableRows: readonly Element[],
  jsdom: JSDOM
): readonly Utility[] {
  return classTableRows.map((tr) => parseLibUtility(tailwindCssUrl, tr));
}

function parseLibUtility(tailwindCssUrl: string, tr: Element): Utility {
  const tds = Array.from(tr.children);

  const tailwindCssName = tds[0].childNodes[0].textContent;

  const name = convertTailwindCssNameToCodeName(tailwindCssName);

  const cssProperties = tds[1].textContent
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
  classTableRows: readonly Element[],
  jsdom: JSDOM
): readonly Utility[] {
  const name = "container";
  const tailwindCssName = name;
  const cssProperties = classTableRows.map((tr, index) => {
    const cssColIndex = index === 0 ? 2 : 1;
    const cssColText = tr.children[cssColIndex].textContent;

    const breakpointColIndex = index === 0 ? 1 : 0;
    const breakpointColText = tr.children[breakpointColIndex].textContent;

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
  const jsdom = new JSDOM(pages.states.html);
  const quickReferenceH3 =
    jsdom.window.document.querySelector("h3#quick-reference");
  const nextP = quickReferenceH3.nextElementSibling;
  const nextTable = nextP.nextElementSibling;
  const nextTrs = Array.from(nextTable.querySelectorAll("tbody tr"));

  const modifierGroups: ModifierGroup[] = [];

  for (const tr of nextTrs) {
    const modifiers: Modifier[] = [];
    const arbitraries: ModifierArbitrary[] = [];

    const tds = Array.from(tr.querySelectorAll("td"));

    const tailwindCssNameCol = tds[0];
    const tailwindCssName = tailwindCssNameCol.textContent;

    const tailwindCssHashUrl = ((hash: string) => {
      switch (hash) {
        case "#selection":
          return "#highlighted-text";
        case "#placeholder":
          return "#placeholder-text";
        default:
          return hash;
      }
    })(tailwindCssNameCol.querySelector("a").attributes["href"].value);

    const name = convertTailwindCssNameToCodeName(tailwindCssName);
    const cssCode = tds[1].textContent;

    const modifierSubHeading =
      jsdom.window.document.querySelector(tailwindCssHashUrl);

    const tailwindCssUrl = `${pages.states.url}${tailwindCssHashUrl}`;

    const description = modifierSubHeading.nextElementSibling.textContent;

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
