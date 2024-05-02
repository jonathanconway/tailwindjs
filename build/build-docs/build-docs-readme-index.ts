import { Definition } from "../parse-tailwindcss-pages";
import { convertCodeNameToTitle } from "../utils";
import { interpolate } from "./interpolate";

export function buildDocsReadmeIndex(definition: Definition) {
  const readmeIndexUtilityAreasContent = definition.utilityAreas
    .map((area) => `- [${area.title}](./docs/utilities/${area.name}.md)`)
    .join("\n");

  const readmeIndexModifierGroupsContent = definition.modifierGroups
    .map(
      (group) =>
        `- [${convertCodeNameToTitle(group.name)}](./docs/modifiers/${
          group.name
        }.md)`
    )
    .join("\n");

  const readmeIndexContent = `
### Utilities
${readmeIndexUtilityAreasContent}

### Modifiers
${readmeIndexModifierGroupsContent}
`;

  interpolate(`${__dirname}/../../README.md`, "api", readmeIndexContent);
}
