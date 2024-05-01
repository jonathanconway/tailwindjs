/**
 * stroke-0
 *
 * CSS properties:
 * - stroke-width: 0;
 *
 * @see https://tailwindcss.com/docs/stroke-width
 *
 * @type utility
 */
export const stroke_0 = "stroke-0";

/**
 * stroke-1
 *
 * CSS properties:
 * - stroke-width: 1;
 *
 * @see https://tailwindcss.com/docs/stroke-width
 *
 * @type utility
 */
export const stroke_1 = "stroke-1";

/**
 * stroke-2
 *
 * CSS properties:
 * - stroke-width: 2;
 *
 * @see https://tailwindcss.com/docs/stroke-width
 *
 * @type utility
 */
export const stroke_2 = "stroke-2";

/**
 * stroke-[:value]
 *
 * If you need to use a one-off stroke-width value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/stroke-width#arbitrary-values
 */
export const stroke_arbitrary = (value: string) => `stroke-[${value}]`;

/**
 * SVG
 *
 * Utilities for styling the stroke width of SVG elements.
 *
 * @see https://tailwindcss.com/docs/stroke-width
 */
export const stroke_width = {
  stroke_0,
  stroke_1,
  stroke_2,
  stroke_arbitrary
};