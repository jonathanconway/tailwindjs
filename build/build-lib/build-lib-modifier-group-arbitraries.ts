import { ModifierArbitrary } from "../parse-tailwindcss-pages";
import { prepareComment, prepareDescription } from "../utils";
import { ARBITRARY_FUNCTION_NAME_SUFFIX_VARIANTS } from "./arbitrary";

export function genLibModifierArbitrary({
  name,
  description,
  tailwindCssName,
  tailwindCssUrl,
}: ModifierArbitrary) {
  const prefixCode = tailwindCssName.replaceAll("[…]", "[${arbitrary}]");

  const descriptionCode = description.trim()
    ? ` * ${prepareDescription(description)}\n *`
    : "";

  const namePrefix = name.replaceAll("_arbitrary", "");

  const arbitraryFnVariants = ARBITRARY_FUNCTION_NAME_SUFFIX_VARIANTS.map(
    (arbitraryFunctionNameSuffix) => `
/**
 * ${prepareComment(tailwindCssName)}
 * 
${descriptionCode}
  * 
  * @param arbitrary Custom value for modifier
  * @param suffix Utility to modify
  * 
  * @see ${tailwindCssUrl}
  *
  * @type modifier
  */
export const ${namePrefix}_${arbitraryFunctionNameSuffix} = (arbitrary: string, suffix: string) => \`${prefixCode}:\${suffix}\`;
`
  );

  return arbitraryFnVariants.join("\n");
}
