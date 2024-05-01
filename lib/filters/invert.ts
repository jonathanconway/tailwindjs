/**
 * invert-0
 *
 * CSS properties:
 * - filter: invert(0);
 *
 * @see https://tailwindcss.com/docs/invert
 *
 * @type utility
 */
export const invert_0 = "invert-0";

/**
 * invert
 *
 * CSS properties:
 * - filter: invert(100%);
 *
 * @see https://tailwindcss.com/docs/invert
 *
 * @type utility
 */
export const invert = "invert";

/**
 * invert-[:value]
 *
 * If you need to use a one-off invert value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/invert#arbitrary-values
 */
export const invert_arbitrary = (value: string) => `invert-[${value}]`;

/**
 * Filters
 *
 * Utilities for applying invert filters to an element.
 *
 * @see https://tailwindcss.com/docs/invert
 */
export const invert = {
  invert_0,
  invert,
  invert_arbitrary
};