import { Cheerio, load, Element, CheerioAPI } from "cheerio";
import { Text } from "domhandler";
import { existsSync, mkdirSync, writeFileSync } from "fs";

import * as pages from "../build-tailwindcss-pages/tailwindcss-pages";
import { writeExportLineToIndex } from "../code-gen.utils";
import { mkdirIfNotExistsSync } from "../dir.utils";
import { Definition, parseTailwindCssPages } from "../parse-tailwindcss-pages";
import { convertCodeNameToTitle } from "../utils";

export function buildLib() {
  const definition = parseTailwindCssPages();

  mkdirIfNotExistsSync(`${__dirname}/../../lib`);

  buildLibUtilities(definition);
  buildLibModifiers(definition);
}

export function buildLibUtilities({ utilityAreas: areas }: Definition) {
  mkdirIfNotExistsSync(`${__dirname}/../../lib/utilities`);

  for (const area of areas) {
    const areaFolderPath = `${__dirname}/../../lib/utilities/${area.name}`;
    mkdirIfNotExistsSync(areaFolderPath);

    for (const group of area.groups) {
      const groupPrimitiveCodes = [];
      for (const primitive of group.primitives) {
        // { name ,tailwindCssName, cssProperties }
        const primitiveCode = `
/**
 * ${primitive.tailwindCssName}
 *
 * CSS:
${primitive.cssProperties
  .map((cssProperty) => ` * - \`${cssProperty.replaceAll("/", "\\/")}\``)
  .join("\n")}
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
 *
 * @type utility
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
export const ${group.name}_utilities = {
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
    writeExportLineToIndex(
      `${__dirname}/../../lib/utilities/index.ts`,
      area.name
    );
  }

  writeExportLineToIndex(`${__dirname}/../../lib/index.ts`, "utilities");
}

function prepareCommentFragment(input: string) {
  return input.replaceAll("*", "\\*").replaceAll("@", "\\@");
}

export function buildLibModifiers({ modifierGroups }: Definition) {
  const modifiersFolderPath = `${__dirname}/../../lib/modifiers`;
  mkdirIfNotExistsSync(modifiersFolderPath);

  for (const modifierGroup of modifierGroups) {
    const modifierGroupFilePathName = `${__dirname}/../../lib/modifiers/${modifierGroup.name}.ts`;

    const modifierCode = `
${modifierGroup.modifiers
  .map((modifier) =>
    modifier.arbitrary
      ? `
/**
 * ${prepareCommentFragment(modifier.tailwindCssName)}
 * 
${modifier.description.trim() ? ` * ${modifier.description}\n *` : ""}
 * CSS:
 * - \`${modifier.cssCode}\`
 * 
 * @param arbitrary Custom value for modifier
 * @param suffix Utility to modify
 * 
 * @see ${modifier.tailwindCssUrl}
 *
 * @type modifier
 */
export const ${
          modifier.name
        } = (arbitrary: string, suffix: string) => \`${modifier.tailwindCssName.replaceAll(
          "[…]",
          "[${arbitrary}]"
        )}:\${suffix}\`;
`
      : `
/**
 * ${prepareCommentFragment(modifier.tailwindCssName)}
 * 
${modifier.description.trim() ? ` * ${modifier.description}\n *` : ""}
 * CSS:
 * - \`${modifier.cssCode}\`
 *
 * @param suffix Utility to modify
 * 
 * @see ${modifier.tailwindCssUrl}
 *
 * @type modifier
 */
export const ${modifier.name} = (suffix: string) => \`${
          modifier.tailwindCssName
        }:\${suffix}\`;
`
  )
  .join("\n")} 
`;

    writeFileSync(modifierGroupFilePathName, modifierCode);
    writeExportLineToIndex(
      `${__dirname}/../../lib/modifiers/index.ts`,
      modifierGroup.name
    );
  }
  writeExportLineToIndex(`${__dirname}/../../lib/index.ts`, "modifiers");
}
