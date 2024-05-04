/**
 * [{expression}]
 *
 * If you ever need to use a CSS property that Tailwind doesn’t include a utility for out of the box, you can also use square bracket notation to write completely arbitrary CSS.
 *
 * @param expression
 *
 * @returns "[{expression}]"
 *
 * @see https://tailwindcss.com/docs/adding-custom-styles#arbitrary-properties
 */
export function arb(expression: string) {
  return `[${expression}]`;
}

/**
 * [{expression}]
 *
 * If you ever need to use a CSS property that Tailwind doesn’t include a utility for out of the box, you can also use square bracket notation to write completely arbitrary CSS.
 *
 * @param expression
 *
 * @returns "[{expression}]"
 *
 * @see https://tailwindcss.com/docs/adding-custom-styles#arbitrary-properties
 */
export function arbitrary(expression: string) {
  return arb(expression);
}
