import { Cheerio, load, Element, CheerioAPI } from "cheerio";
import { Text } from "domhandler";
import { existsSync, mkdirSync, writeFileSync } from "fs";

import * as pages from "../build-tailwindcss-pages/tailwindcss-pages";
import { writeExportLineToIndex } from "../code-gen.utils";
import { convertCodeNameToTitle } from "../utils";

export interface Area {
  readonly name: string;
  readonly title: string;
  readonly groups: readonly Group[];
}

export interface Group {
  readonly name: string;
  readonly title: string;
  readonly tailwindCssUrl: string;
  readonly description: string;
  readonly primitives: readonly Primitive[];
  readonly arbitrary?: GroupArbitrary;
}

export interface GroupArbitrary {
  readonly name: string;
  readonly tailwindCssName: string;
  readonly description: string;
  readonly tailwindCssUrl: string;
}

export interface Primitive {
  readonly name: string;
  readonly tailwindCssName: string;
  readonly cssProperties: string[];
}

export function parseTailwindCssPages() {
  const areaNames = Object.keys(pages).filter((page) => page !== "docs");

  const areas = areaNames.map(parseLibArea);

  return { areas };
}

function parseLibArea(areaName: string): Area {
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

function parseLibGroup(areaName: string, groupName: string): Group | undefined {
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

function parseLibGroupArbitrary($: CheerioAPI): GroupArbitrary | undefined {
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
): readonly Primitive[] {
  return classTableRows.toArray().map((tr) => parseLibPrimitive(tr, $));
}

function convertTailwindCssNameToCodeName(input: string) {
  return input
    .replaceAll(".", "_")
    .replaceAll("/", "_on_")
    .replaceAll("-", "_");
}

function parseLibPrimitive(tr: Element, $: CheerioAPI): Primitive {
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
): readonly Primitive[] {
  const name = "container";
  const tailwindCssName = name;
  const cssProperties = classTableRows.toArray().map((tr, index) => {
    const cssColIndex = index === 0 ? 2 : 1;
    const cssColText = $(tr.children[cssColIndex]).text();

    const breakpointColIndex = index === 0 ? 1 : 0;
    const breakpointColText = $(tr.children[breakpointColIndex]).text();

    return `${cssColText} /* Breakpoint: ${breakpointColText} */`;
  });

  const containerPrimitive: Primitive = {
    name,
    tailwindCssName,
    cssProperties,
  };

  return [containerPrimitive];
}
