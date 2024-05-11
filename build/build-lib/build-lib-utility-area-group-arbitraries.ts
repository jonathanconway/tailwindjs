import { UtilityArbitrary, UtilityGroup } from "../parse-tailwindcss-pages";
import { prepareDescription } from "../utils";
import { ARBITRARY_FUNCTION_NAME_SUFFIX_VARIANTS } from "./arbitrary";

export function genLibUtilityGroupArbitrariesCode(group: UtilityGroup): string {
  return group.arbitraries.map(genLibUtilityGroupArbitraryCode).join("\n");
}

export function genLibUtilityGroupArbitraryCode({
  name,
  description,
  tailwindCssName,
  tailwindCssUrl,
}: UtilityArbitrary): string {
  return ARBITRARY_FUNCTION_NAME_SUFFIX_VARIANTS.map(
    (arbitraryFunctionNameSuffix) => `
/**
 * ${tailwindCssName}-[{value}]
 *
 * ${prepareDescription(description)}
 *
 * @see ${tailwindCssUrl}
 *
 * @type utility
 */
export const ${name}_${arbitraryFunctionNameSuffix} = (value: string) => \`${tailwindCssName}-[\${value}]\`;
`
  ).join("\n");
}
