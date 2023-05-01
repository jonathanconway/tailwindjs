import { Cheerio, load, Element, CheerioAPI } from "cheerio";
import { NodeWithChildren, Text, hasChildren, isText } from "domhandler";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";

import * as pages from "../build-tailwindcss-pages/tailwindcss-pages";
import { writeExportLineToIndex } from "../code-gen.utils";
import { convertCodeNameToTitle } from "../utils";

interface Area {
  readonly name: string;
  readonly title: string;
  readonly groups: readonly Group[];
}

interface Group {
  readonly name: string;
  readonly title: string;
  readonly tailwindCssUrl: string;
  readonly description: string;
  readonly primitives: readonly Primitive[];
}

interface Primitive {
  readonly name: string;
  readonly tailwindCssName: string;
  readonly cssProperties: string[];
}

export function buildLib() {
  const areaNames = Object.keys(pages).filter((page) => page !== "docs");
  // .slice(0, 1);

  const areas = areaNames.map(buildLibArea);

  for (const area of areas) {
    const areaFolderPath = `${__dirname}/../../lib/${area.name}`;
    if (!existsSync(areaFolderPath)) {
      mkdirSync(areaFolderPath);
    }

    for (const group of area.groups) {
      const groupPrimitiveCodes = [];
      for (const primitive of group.primitives) {
        // { name ,tailwindCssName, cssProperties }
        const primitiveCode = `
/**
 * ${primitive.tailwindCssName}
 * 
 * CSS properties:
${primitive.cssProperties.map(
  (cssProperty) => ` * - ${cssProperty.replaceAll("/", "\\/")}`
)}
 * 
 * @see ${group.tailwindCssUrl}
 * 
 * @type utility
 */
export const ${primitive.name} = "${primitive.tailwindCssName}";
`.trim();
        groupPrimitiveCodes.push(primitiveCode);
      }

      const groupObjectCode = `
/**
 * ${group.title}
 * 
 * ${group.description}
 * 
 * @see ${group.tailwindCssUrl}
 */
export const ${group.name} = {
${group.primitives.map((primitive) => `  ${primitive.name}`).join(",\n")}
};
`.trim();

      const groupCode = `
${groupPrimitiveCodes.join("\n\n")}

${groupObjectCode}
`.trim();

      writeFileSync(`${areaFolderPath}/${group.name}.ts`, groupCode);
      writeExportLineToIndex(`${areaFolderPath}/index.ts`, group.name);
    }
    writeExportLineToIndex(`${__dirname}/../../lib/index.ts`, areaFolderPath);
  }

  // for (const areaName of areaNames) {
  //   console.log(JSON.stringify(buildLibArea(areaName)));
  //   // buildLibArea(areaName);
  // }
}

function buildLibArea(areaName: string): Area {
  return {
    name: areaName,
    title: convertCodeNameToTitle(areaName),
    groups: Object.keys(pages[areaName])
      // .slice(0, 1)
      // .filter((key) => key === "container")
      .map((groupName) => buildLibGroup(areaName, groupName))
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

function buildLibGroup(areaName: string, groupName: string): Group | undefined {
  const page = pages[areaName][groupName];
  const $ = load(page.html);
  const title = $("#header p").eq(0).text();
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
    regular: buildLibPrimitives,
    container: buildLibPrimitivesContainer,
  };

  return {
    name: groupName,
    title,
    description,
    primitives: buildPrimitives[classTableType](classTableRows, $),
    tailwindCssUrl,
  };
}

function buildLibPrimitives(
  classTableRows: Cheerio<Element>,
  $: CheerioAPI
): readonly Primitive[] {
  return classTableRows.toArray().map((tr) => buildLibPrimitive(tr, $));
}

function buildLibPrimitive(tr: Element, $: CheerioAPI): Primitive {
  const tds = tr.children as Element[];

  const tailwindCssName = (tds[0].children[0] as Text).data;

  const name = tailwindCssName
    .replaceAll(".", "_")
    .replaceAll("/", "_on_")
    .replaceAll("-", "_");

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

function buildLibPrimitivesContainer(
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

// function buildLibPrimitiveContainer(tr: Element, $: CheerioAPI): Primitive {
//   const tds = tr.children as Element[];

//   const tailwindCssName = (tds[0].children[0] as Text).data;

//   const name = tailwindCssName
//     .replaceAll(".", "_")
//     .replaceAll("/", "_on_")
//     .replaceAll("-", "_");

//   const cssProperties = $(tds[1])
//     .text()
//     .split("\n")
//     .map((line) => line.trim())
//     .filter(Boolean);

//   return {
//     name,
//     tailwindCssName,
//     cssProperties,
//   };
// }
