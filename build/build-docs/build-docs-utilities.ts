import { writeFileSync } from "fs";

import {
  Definition,
  UtilityArea,
  UtilityGroup,
} from "../parse-tailwindcss-pages";
import { convertTitleToMdLinkHashName, prepareDescription } from "../utils";
import "../utils/array.utils";
import { mkdirIfNotExistsSync } from "../utils/dir.utils";
import {
  genMdLink,
  genMdPrimitivesTable,
  genMdTable,
  genMdBlock,
  genMdArbitrariesTable,
} from "../utils/md-gen.utils";

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
  const content = `
# ${area.title}

${genDocsUtilitiesAreaIndex(area)}

-----

${genDocsUtilitiesAreaGroups(area)}
`;

  writeDocsUtilitiesAreaFile(area, content);
}

function genDocsUtilitiesAreaIndex(area: UtilityArea) {
  const areaGroupTitlesSorted = area.groups
    .map((group) => group.title)
    .sortBy();

  const areaGroupTitlesSortedLinks = areaGroupTitlesSorted.map(
    (title) => `- ${genMdLink(title, convertTitleToMdLinkHashName(title))}`
  );

  return areaGroupTitlesSortedLinks.join("\n");
}

function genDocsUtilitiesAreaGroups(area: UtilityArea) {
  return area.groups.map(genDocsUtilitiesAreaGroup).sortBy().join("\n");
}

function genDocsUtilitiesAreaGroup(group: UtilityGroup) {
  return `
## ${group.title}

${prepareDescription(group.description)}

### Group

${genMdTable([{ "TailwindJS token": `\`${group.name}_utilities\`` }])}

${genDocsUtilitiesAreaGroupUtilitiesBlock(group)}

${genDocsUtilitiesAreaGroupArbitrariesBlock(group)}
`;
}

function genDocsUtilitiesAreaGroupUtilitiesBlock(group: UtilityGroup) {
  return genMdBlock("Utilities", genMdPrimitivesTable(group.utilities));
}

function genDocsUtilitiesAreaGroupArbitrariesBlock(group: UtilityGroup) {
  return genMdBlock("Arbitraries", genMdArbitrariesTable(group.arbitraries));
}

function writeDocsUtilitiesAreaFile(area: UtilityArea, content: string) {
  return writeFileSync(`${docsUtilitiesPath}/${area.name}.md`, content);
}
