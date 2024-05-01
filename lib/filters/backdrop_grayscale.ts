/**
 * backdrop-grayscale-0
 *
 * CSS properties:
 * - backdrop-filter: grayscale(0);
 *
 * @see https://tailwindcss.com/docs/backdrop-grayscale
 *
 * @type utility
 */
export const backdrop_grayscale_0 = "backdrop-grayscale-0";

/**
 * backdrop-grayscale
 *
 * CSS properties:
 * - backdrop-filter: grayscale(100%);
 *
 * @see https://tailwindcss.com/docs/backdrop-grayscale
 *
 * @type utility
 */
export const backdrop_grayscale = "backdrop-grayscale";

/**
 * backdrop-grayscale-[:value]
 *
 * If you need to use a one-off backdrop-grayscale value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-grayscale#arbitrary-values
 */
export const backdrop_grayscale_arbitrary = (value: string) => `backdrop-grayscale-[${value}]`;

/**
 * Filters
 *
 * Utilities for applying backdrop grayscale filters to an element.
 *
 * @see https://tailwindcss.com/docs/backdrop-grayscale
 */
export const backdrop_grayscale = {
  backdrop_grayscale_0,
  backdrop_grayscale,
  backdrop_grayscale_arbitrary
};