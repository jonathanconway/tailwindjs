/**
 * backdrop-invert-0
 *
 * CSS properties:
 * - backdrop-filter: invert(0);
 *
 * @see https://tailwindcss.com/docs/backdrop-invert
 *
 * @type utility
 */
export const backdrop_invert_0 = "backdrop-invert-0";

/**
 * backdrop-invert
 *
 * CSS properties:
 * - backdrop-filter: invert(100%);
 *
 * @see https://tailwindcss.com/docs/backdrop-invert
 *
 * @type utility
 */
export const backdrop_invert = "backdrop-invert";

/**
 * backdrop-invert-[:value]
 *
 * If you need to use a one-off backdrop-invert value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-invert#arbitrary-values
 */
export const backdrop_invert_arbitrary = (value: string) => `backdrop-invert-[${value}]`;

/**
 * Filters
 *
 * Utilities for applying backdrop invert filters to an element.
 *
 * @see https://tailwindcss.com/docs/backdrop-invert
 */
export const backdrop_invert = {
  backdrop_invert_0,
  backdrop_invert,
  backdrop_invert_arbitrary
};