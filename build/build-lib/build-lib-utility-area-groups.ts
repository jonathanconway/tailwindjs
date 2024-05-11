import { writeFileSync } from "fs";

import { UtilityGroup } from "../parse-tailwindcss-pages";
import { prepareDescription, writeExportLineToIndex } from "../utils";
import { genLibUtilityGroupArbitrariesCode } from "./build-lib-utility-area-group-arbitraries";
import { genLibUtilityGroupUtilitiesCode } from "./build-lib-utility-area-group-utilities";

export function buildLibUtilityGroup(
  areaFolderPath: string,
  group: UtilityGroup
) {
  const groupUtilitiesCode = genLibUtilityGroupUtilitiesCode(group);

  const groupArbitrariesCodes = genLibUtilityGroupArbitrariesCode(group);

  const groupObjectCode = genLibUtilityGroupObject(group);

  const content = `
${groupUtilitiesCode}
${groupArbitrariesCodes}
${groupObjectCode}
`;

  writeLibUtilityGroupFile(areaFolderPath, group, content);
  writeLibUtilityGroupIndexFile(areaFolderPath, group);
}

function writeLibUtilityGroupFile(
  areaFolderPath: string,
  group: UtilityGroup,
  content: string
) {
  writeFileSync(`${areaFolderPath}/${group.name}.ts`, content);
}

function writeLibUtilityGroupIndexFile(
  areaFolderPath: string,
  group: UtilityGroup
) {
  writeExportLineToIndex(`${areaFolderPath}/index.ts`, group.name);
}

function genLibUtilityGroupObject({
  name,
  title,
  description,
  tailwindCssUrl,
  utilities,
  arbitraries,
}: UtilityGroup) {
  return `
/**
 * ${title}
 *
 * ${prepareDescription(description)}
 *
 * @see ${tailwindCssUrl}
 */
export const ${name}_utilities = {
${[
  ...utilities.map((utility) => utility.name),
  ...arbitraries.map((arbitrary) => `${arbitrary.name}_arbitrary`),
]
  .filter(Boolean)
  .map((name) => `  ${name}`)
  .join(",\n")}
};
`;
}
