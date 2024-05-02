import { writeFileSync } from "fs";

import { mkdirIfNotExistsSync } from "../dir.utils";
import { genMdTable } from "../md-gen.utils";
import { Definition, ModifierGroup } from "../parse-tailwindcss-pages";
import { convertCodeNameToTitle } from "../utils";

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

### Modifiers

${genDocsModifiersGroupPrimitives(group)}
`.trim();
}

export function genDocsModifiersGroupPrimitives(group: ModifierGroup) {
  const { modifiers } = group;

  return genMdTable(
    modifiers.map((modifier) => ({
      "TailwindJS token": `\`${modifier.name}\``,
      "TailwindCSS token": `[${modifier.tailwindCssName}](${group.tailwindCssUrl})`,
    }))
  );
}
