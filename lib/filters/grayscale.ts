/**
 * grayscale-0
 *
 * CSS properties:
 * - filter: grayscale(0);
 *
 * @see https://tailwindcss.com/docs/grayscale
 *
 * @type utility
 */
export const grayscale_0 = "grayscale-0";

/**
 * grayscale
 *
 * CSS properties:
 * - filter: grayscale(100%);
 *
 * @see https://tailwindcss.com/docs/grayscale
 *
 * @type utility
 */
export const grayscale = "grayscale";

/**
 * grayscale-[:value]
 *
 * If you need to use a one-off grayscale value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/grayscale#arbitrary-values
 */
export const grayscale_arbitrary = (value: string) => `grayscale-[${value}]`;

/**
 * Filters
 *
 * Utilities for applying grayscale filters to an element.
 *
 * @see https://tailwindcss.com/docs/grayscale
 */
export const grayscale = {
  grayscale_0,
  grayscale,
  grayscale_arbitrary
};