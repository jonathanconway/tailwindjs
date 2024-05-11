import { writeFileSync } from "fs";

import { Definition, ModifierGroup } from "../parse-tailwindcss-pages";
import {
  convertCodeNameToTitle,
  genMdBlock,
  genMdPrimitivesTable,
  genMdTable,
  mkdirIfNotExistsSync,
  prepareDescription,
} from "../utils";

const docsPath = `${__dirname}/../../docs`;
const docsModifiersPath = `${docsPath}/modifiers`;

export function buildDocsModifiers(definition: Definition) {
  const { modifierGroups } = definition;

  mkdirIfNotExistsSync(docsPath);
  mkdirIfNotExistsSync(docsModifiersPath);

  for (const group of modifierGroups) {
    buildDocsModifiersGroup(group);
  }
}

export function buildDocsModifiersGroup(group: ModifierGroup) {
  const docsModifiersGroupContent = genDocsModifiersAreaGroup(group);

  writeFileSync(
    `${docsModifiersPath}/${group.name}.md`,
    docsModifiersGroupContent
  );
}

export function genDocsModifiersAreaGroup(group: ModifierGroup) {
  return `
## ${convertCodeNameToTitle(group.name)}

${prepareDescription(group.description)}

${genMdTable([{ "TailwindJS token": `\`${group.name}_modifiers\`` }])}

${genDocsModifiersAreaGroupModifiersBlock(group)}

${genDocsModifiersAreaGroupArbitrariesBlock(group)}
`.trim();
}

function genDocsModifiersAreaGroupModifiersBlock(group: ModifierGroup) {
  const modifiersCode = genMdPrimitivesTable(group.modifiers);

  return genMdBlock("Modifiers", modifiersCode);
}

function genDocsModifiersAreaGroupArbitrariesBlock(group: ModifierGroup) {
  const arbitrariesCode = genMdPrimitivesTable(group.arbitraries);

  return genMdBlock("Arbitraries", arbitrariesCode);
}
