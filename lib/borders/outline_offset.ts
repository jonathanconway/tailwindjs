/**
 * outline-offset-0
 *
 * CSS properties:
 * - outline-offset: 0px;
 *
 * @see https://tailwindcss.com/docs/outline-offset
 *
 * @type utility
 */
export const outline_offset_0 = "outline-offset-0";

/**
 * outline-offset-1
 *
 * CSS properties:
 * - outline-offset: 1px;
 *
 * @see https://tailwindcss.com/docs/outline-offset
 *
 * @type utility
 */
export const outline_offset_1 = "outline-offset-1";

/**
 * outline-offset-2
 *
 * CSS properties:
 * - outline-offset: 2px;
 *
 * @see https://tailwindcss.com/docs/outline-offset
 *
 * @type utility
 */
export const outline_offset_2 = "outline-offset-2";

/**
 * outline-offset-4
 *
 * CSS properties:
 * - outline-offset: 4px;
 *
 * @see https://tailwindcss.com/docs/outline-offset
 *
 * @type utility
 */
export const outline_offset_4 = "outline-offset-4";

/**
 * outline-offset-8
 *
 * CSS properties:
 * - outline-offset: 8px;
 *
 * @see https://tailwindcss.com/docs/outline-offset
 *
 * @type utility
 */
export const outline_offset_8 = "outline-offset-8";

/**
 * outline-offset-[:value]
 *
 * If you need to use a one-off outline-offset value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/outline-offset#arbitrary-values
 */
export const outline_offset_arbitrary = (value: string) => `outline-offset-[${value}]`;

/**
 * Borders
 *
 * Utilities for controlling the offset of an element's outline.
 *
 * @see https://tailwindcss.com/docs/outline-offset
 */
export const outline_offset = {
  outline_offset_0,
  outline_offset_1,
  outline_offset_2,
  outline_offset_4,
  outline_offset_8,
  outline_offset_arbitrary
};