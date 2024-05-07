import { writeFileSync } from "fs";

import { Definition, ModifierGroup } from "../parse-tailwindcss-pages";
import { mkdirIfNotExistsSync, writeExportLineToIndex } from "../utils";
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

  const content = `
${modifierGroupModifiersCode}
${modifierGroupArbitrariesCode}
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
