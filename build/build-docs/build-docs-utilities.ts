import { writeFileSync } from "fs";

import { mkdirIfNotExistsSync } from "../dir.utils";
import { genMdTable } from "../md-gen.utils";
import {
  Definition,
  UtilityArea,
  UtilityGroup,
} from "../parse-tailwindcss-pages";
import { convertTitleToMdLinkHashName } from "../utils";

const docsPath = `${__dirname}/../../docs`;
const docsUtilitiesPath = `${docsPath}/utilities`;

export function buildDocsUtilities(definition: Definition) {
  const { utilityAreas } = definition;

  mkdirIfNotExistsSync(docsPath);
  mkdirIfNotExistsSync(docsUtilitiesPath);

  for (const area of utilityAreas) {
    buildDocsUtilitiesArea(area);
  }
}

export function buildDocsUtilitiesArea(area: UtilityArea) {
  const docsUtilitiesAreaContent = `
# ${area.title}

${area.groups
  .map(
    (group) =>
      `- [${group.title}](#${convertTitleToMdLinkHashName(group.title)})`
  )
  .join("\n")}
-----

${area.groups.map(genDocsUtilitiesAreaGroup).join("\n")}
`;

  writeFileSync(
    `${docsUtilitiesPath}/${area.name}.md`,
    docsUtilitiesAreaContent
  );
}

export function genDocsUtilitiesAreaGroup(group: UtilityGroup) {
  return `
## ${group.title}

${group.description}

### Group

${genMdTable([{ "TailwindJS token": `\`${group.name}\`` }])}

### Utilities

${genDocsUtilitiesAreaGroupPrimitives(group)}
`.trim();
}

export function genDocsUtilitiesAreaGroupPrimitives(group: UtilityGroup) {
  const { primitives } = group;
  return genMdTable(
    primitives.map((primitive) => ({
      "TailwindJS token": `\`${primitive.name}\``,
      "TailwindCSS token": `[${primitive.tailwindCssName}](${group.tailwindCssUrl})`,
    }))
  );
}
