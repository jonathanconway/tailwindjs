import { Cheerio, load, Element, CheerioAPI } from "cheerio";
import { Text } from "domhandler";
import { existsSync, mkdirSync, writeFileSync } from "fs";

import * as pages from "../build-tailwindcss-pages/tailwindcss-pages";
import { writeExportLineToIndex } from "../code-gen.utils";
import {
  convertCodeNameToTitle,
  convertTailwindCssNameToCodeName,
} from "../utils";
import {
  Definition,
  UtilityArea,
  UtilityGroup,
  UtilityGroupArbitrary,
  UtilityPrimitive,
  ModifierGroup,
  Modifier,
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
      // .slice(0, 1)
      // .filter((key) => key === "container")
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

  const buildPrimitives = {
    regular: parseLibPrimitives,
    container: parseLibPrimitivesContainer,
  };

  return {
    name: groupName,
    title,
    description,
    primitives: buildPrimitives[classTableType](classTableRows, $),
    tailwindCssUrl,
    arbitrary: parseLibGroupArbitrary($),
  };
}

function parseLibGroupArbitrary(
  $: CheerioAPI
): UtilityGroupArbitrary | undefined {
  const arbitraryHeadingElement = $("#arbitrary-values");
  if (arbitraryHeadingElement.length === 0) {
    return undefined;
  }

  const nextP = arbitraryHeadingElement.next("p");
  const description = nextP.text().toString();

  const arbitrarySampleText = nextP
    .next("pre")
    .find("span.code-highlight")
    .text();
  const tailwindCssName = arbitrarySampleText.split("-[")[0];
  const name = `${convertTailwindCssNameToCodeName(tailwindCssName)}_arbitrary`;

  if (utilityArbitraryNames[name]) {
    // Avoid duplicating
    return undefined;
  }
  utilityArbitraryNames[name] = true;

  const tailwindCssUrl = arbitraryHeadingElement
    .find("a")
    .attr("href")
    .toString();

  return {
    name,
    description,
    tailwindCssName,
    tailwindCssUrl,
  };
}

function parseLibPrimitives(
  classTableRows: Cheerio<Element>,
  $: CheerioAPI
): readonly UtilityPrimitive[] {
  return classTableRows.toArray().map((tr) => parseLibPrimitive(tr, $));
}

function parseLibPrimitive(tr: Element, $: CheerioAPI): UtilityPrimitive {
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
    cssProperties,
  };
}

function parseLibPrimitivesContainer(
  classTableRows: Cheerio<Element>,
  $: CheerioAPI
): readonly UtilityPrimitive[] {
  const name = "container";
  const tailwindCssName = name;
  const cssProperties = classTableRows.toArray().map((tr, index) => {
    const cssColIndex = index === 0 ? 2 : 1;
    const cssColText = $(tr.children[cssColIndex]).text();

    const breakpointColIndex = index === 0 ? 1 : 0;
    const breakpointColText = $(tr.children[breakpointColIndex]).text();

    return `${cssColText} /* Breakpoint: ${breakpointColText} */`;
  });

  const containerPrimitive: UtilityPrimitive = {
    name,
    tailwindCssName,
    cssProperties,
  };

  return [containerPrimitive];
}

function parseLibModifiers(): readonly ModifierGroup[] {
  const $ = load(pages.states.html);
  const trs = $("h3#quick-reference")
    .nextAll("div")
    .first()
    .find("table tbody tr");

  const modifiers: Modifier[] = [];

  const arbitraryNames = {};

  for (const tr of trs.toArray()) {
    const tailwindCssNameCol = $(tr).find("td").eq(0);
    const tailwindCssName = tailwindCssNameCol.text();

    const tailwindCssHashUrl = tailwindCssNameCol.find("a").attr("href");

    const name = convertTailwindCssNameToCodeName(tailwindCssName);
    const cssCode = $(tr).find("td").eq(1).text();

    const modifierSubHeading = $(tailwindCssHashUrl);

    const tailwindCssUrl = `${pages.states.url}${tailwindCssHashUrl}`;

    const description = modifierSubHeading.next("p").text();

    const arbitrary = name.includes("arbitrary") && !arbitraryNames[name];
    if (arbitrary) {
      arbitraryNames[name] = true;
    }

    const modifier: Modifier = {
      name,
      cssCode,
      description,
      tailwindCssName,
      tailwindCssUrl,
      arbitrary,
    };

    modifiers.push(modifier);
  }

  const modifiersByGroupName = {};
  for (const modifier of modifiers) {
    const groupName = convertTailwindCssNameToCodeName(
      modifier.tailwindCssUrl.split("#")[1]
    );
    modifiersByGroupName[groupName] = modifiersByGroupName[groupName] ?? [];
    modifiersByGroupName[groupName].push(modifier);
  }

  const modifiersAndGroupNames = Object.entries(
    modifiersByGroupName
  ) as readonly [string, Modifier[]][];

  const modifierGroups: readonly ModifierGroup[] = modifiersAndGroupNames.map(
    ([name, modifiers]) => ({
      name,
      modifiers,
      tailwindCssUrl: modifiers[0].tailwindCssUrl,
    })
  );

  return modifierGroups;
}

// function uniq<T extends string | number | symbol>(
//   array: readonly T[]
// ): readonly T[] {
//   const map: Partial<Record<T, {}>> = {};
//   for (const item of array) {
//     map[item] = {};
//   }
//   return Object.keys(map) as T[];
// }
