/**
 * invert-0
 *
 * CSS:
 * - `filter: invert(0);`
 *
 * @see https://tailwindcss.com/docs/invert
 *
 * @type utility
 */
export const invert_0 = "invert-0";

/**
 * invert
 *
 * CSS:
 * - `filter: invert(100%);`
 *
 * @see https://tailwindcss.com/docs/invert
 *
 * @type utility
 */
export const invert = "invert";

/**
 * invert-[{value}]
 *
 * If you need to use a one-off invert value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/invert#arbitrary-values
 *
 * @type utility
 */
export const invert_arbitrary = (value: string) => `invert-[${value}]`;

/**
 * Invert
 *
 * Utilities for applying invert filters to an element.
 *
 * @see https://tailwindcss.com/docs/invert
 */
export const invert_utilities = {
  invert_0,
  invert,
  invert_arbitrary
};