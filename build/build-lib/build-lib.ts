import { Cheerio, load, Element, CheerioAPI } from "cheerio";
import { Text } from "domhandler";
import { existsSync, mkdirSync, writeFileSync } from "fs";

import * as pages from "../build-tailwindcss-pages/tailwindcss-pages";
import { writeExportLineToIndex } from "../code-gen.utils";
import { parseTailwindCssPages } from "../parse-tailwindcss-pages/parse-tailwindcss-pages";
import { convertCodeNameToTitle } from "../utils";

export function buildLib() {
  const { areas } = parseTailwindCssPages();

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

      const groupArbitraryCode = group.arbitrary
        ? `
/**
 * ${group.arbitrary.tailwindCssName}-[:value]
 *
 * ${group.arbitrary.description}
 *
 * @see ${group.tailwindCssUrl}${group.arbitrary.tailwindCssUrl}
 */
export const ${group.arbitrary.name} = (value: string) => \`${group.arbitrary.tailwindCssName}-[\${value}]\`;
`
        : "";

      const groupObjectCode = `
/**
 * ${group.title}
 *
 * ${group.description}
 *
 * @see ${group.tailwindCssUrl}
 */
export const ${group.name} = {
${[
  ...group.primitives.map((primitive) => primitive.name),
  group.arbitrary ? group.arbitrary.name : undefined,
]
  .filter(Boolean)
  .map((name) => `  ${name}`)
  .join(",\n")}
};
`.trim();

      const groupCode = `
${groupPrimitiveCodes.join("\n\n")}
${groupArbitraryCode}
${groupObjectCode}
`.trim();

      writeFileSync(`${areaFolderPath}/${group.name}.ts`, groupCode);
      writeExportLineToIndex(`${areaFolderPath}/index.ts`, group.name);
    }
    writeExportLineToIndex(`${__dirname}/../../lib/index.ts`, areaFolderPath);
  }
}
