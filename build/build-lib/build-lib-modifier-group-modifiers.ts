import { Modifier } from "../parse-tailwindcss-pages";
import { prepareComment, prepareDescription } from "../utils";

export function genLibModifier({
  name,
  description,
  cssCode,
  tailwindCssUrl,
  tailwindCssName,
}: Modifier) {
  return `
/**
 * ${prepareComment(tailwindCssName)}
 * 
${description.trim() ? ` * ${prepareDescription(description)}\n *` : ""}
 * CSS:
 * - ${prepareComment(cssCode)}
 *
 * @param suffix Utility to modify
 * 
 * @see ${tailwindCssUrl}
 *
 * @type modifier
 */
export const ${name} = (suffix: string) => \`${tailwindCssName}:\${suffix}\`;
`;
}
