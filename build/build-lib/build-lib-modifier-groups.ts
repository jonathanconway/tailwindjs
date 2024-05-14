import { writeFileSync } from "fs";

import { Definition, ModifierGroup } from "../parse-tailwindcss-pages";
import {
  convertCodeNameToTitle,
  mkdirIfNotExistsSync,
  prepareComment,
  writeExportLineToIndex,
} from "../utils";
import { genLibModifierArbitrary } from "./build-lib-modifier-group-arbitraries";
import { genLibModifier } from "./build-lib-modifier-group-modifiers";

export function buildLibModifierGroups({ modifierGroups }: Definition) {
  const modifiersFolderPath = `${__dirname}/../../lib/modifiers`;
  mkdirIfNotExistsSync(modifiersFolderPath);

  modifierGroups.forEach(buildLibModifierGroup);

  writeLibModifierGroupsIndexFile();
}

function buildLibModifierGroup(modifierGroup: ModifierGroup) {
  const modifierGroupModifiersCode = modifierGroup.modifiers
    .map(genLibModifier)
    .join("\n");

  const modifierGroupArbitrariesCode = modifierGroup.arbitraries
    .map(genLibModifierArbitrary)
    .join("\n");

  const modifierGroupObjectCode = genLibModifierGroupObject(modifierGroup);

  const content = `
${modifierGroupModifiersCode}
${modifierGroupArbitrariesCode}
${modifierGroupObjectCode}
`;

  writeLibModifierGroupFile(modifierGroup, content);
}

function writeLibModifierGroupFile(
  modifierGroup: ModifierGroup,
  content: string
) {
  const modifierGroupFilePathName = `${__dirname}/../../lib/modifiers/${modifierGroup.name}.ts`;

  writeFileSync(modifierGroupFilePathName, content);
  writeExportLineToIndex(
    `${__dirname}/../../lib/modifiers/index.ts`,
    modifierGroup.name
  );
}

function writeLibModifierGroupsIndexFile() {
  writeExportLineToIndex(`${__dirname}/../../lib/index.ts`, "modifiers");
}

function genLibModifierGroupObject({
  name,
  title,
  tailwindCssUrl,
  description,
  modifiers,
  arbitraries,
}: ModifierGroup) {
  return `
/**
 * ${prepareComment(title)}
 * 
 * ${prepareComment(description)}
 *
 * @see ${tailwindCssUrl}
 */
export const ${name}_modifiers = {
${[
  ...modifiers.map((modifier) => modifier.name),
  ...arbitraries.map((arbitrary) => `${arbitrary.name}_arbitrary`),
]
  .filter(Boolean)
  .map((name) => `  ${name}`)
  .join(",\n")}
};
`;
}
