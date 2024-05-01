/**
 * saturate-0
 *
 * CSS properties:
 * - filter: saturate(0);
 *
 * @see https://tailwindcss.com/docs/saturate
 *
 * @type utility
 */
export const saturate_0 = "saturate-0";

/**
 * saturate-50
 *
 * CSS properties:
 * - filter: saturate(.5);
 *
 * @see https://tailwindcss.com/docs/saturate
 *
 * @type utility
 */
export const saturate_50 = "saturate-50";

/**
 * saturate-100
 *
 * CSS properties:
 * - filter: saturate(1);
 *
 * @see https://tailwindcss.com/docs/saturate
 *
 * @type utility
 */
export const saturate_100 = "saturate-100";

/**
 * saturate-150
 *
 * CSS properties:
 * - filter: saturate(1.5);
 *
 * @see https://tailwindcss.com/docs/saturate
 *
 * @type utility
 */
export const saturate_150 = "saturate-150";

/**
 * saturate-200
 *
 * CSS properties:
 * - filter: saturate(2);
 *
 * @see https://tailwindcss.com/docs/saturate
 *
 * @type utility
 */
export const saturate_200 = "saturate-200";

/**
 * saturate-[:value]
 *
 * If you need to use a one-off saturate value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/saturate#arbitrary-values
 */
export const saturate_arbitrary = (value: string) => `saturate-[${value}]`;

/**
 * Filters
 *
 * Utilities for applying saturation filters to an element.
 *
 * @see https://tailwindcss.com/docs/saturate
 */
export const saturate = {
  saturate_0,
  saturate_50,
  saturate_100,
  saturate_150,
  saturate_200,
  saturate_arbitrary
};