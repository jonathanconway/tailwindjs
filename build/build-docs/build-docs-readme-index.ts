import { Definition } from "../parse-tailwindcss-pages";
import { genMdLink } from "../utils";
import "../utils/array.utils";
import { interpolate } from "./interpolate";

export function buildDocsReadmeIndex(definition: Definition) {
  const readmeIndexContent = `
${genDocsReadmeIndexUtilities(definition)}

${genDocsReadmeIndexModifiers(definition)}
`;

  interpolate(`${__dirname}/../../README.md`, "api", readmeIndexContent);
}

function genDocsReadmeIndexUtilities(definition: Definition) {
  const readmeIndexUtilityAreasContent = definition.utilityAreas
    .sortBy("name")
    .map(
      (area) => `- ${genMdLink(area.title, `./docs/utilities/${area.name}.md`)}`
    )
    .join("\n");

  const readmeIndexContent = `
### Utilities

${readmeIndexUtilityAreasContent}
`;

  return readmeIndexContent;
}

function genDocsReadmeIndexModifiers(definition: Definition) {
  const readmeIndexModifierGroupsContent = definition.modifierGroups
    .sortBy("name")
    .map(
      (group) =>
        `- ${genMdLink(group.title, `./docs/modifiers/${group.name}.md`)}`
    )
    .join("\n");

  const readmeIndexContent = `
### Modifiers

${readmeIndexModifierGroupsContent}
`;

  return readmeIndexContent;
}
