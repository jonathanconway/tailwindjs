import { UtilityGroup } from "../parse-tailwindcss-pages";
import { prepareComment } from "../utils";

export function genLibUtilityGroupUtilitiesCode(group: UtilityGroup) {
  return group.utilities
    .map(
      ({ name, tailwindCssName, cssProperties, tailwindCssUrl }) => `
/**
 * ${tailwindCssName}
 *
 * CSS:
${cssProperties
  .map((cssProperty) => ` * - ${prepareComment(cssProperty)}`)
  .join("\n")}
  *
  * @see ${tailwindCssUrl}
  *
  * @type utility
  */
export const ${name} = "${tailwindCssName}";
`
    )
    .join("\n");
}
