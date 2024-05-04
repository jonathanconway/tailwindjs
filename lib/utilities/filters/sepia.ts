/**
 * sepia-0
 *
 * CSS:
 * - `filter: sepia(0);`
 *
 * @see https://tailwindcss.com/docs/sepia
 *
 * @type utility
 */
export const sepia_0 = "sepia-0";

/**
 * sepia
 *
 * CSS:
 * - `filter: sepia(100%);`
 *
 * @see https://tailwindcss.com/docs/sepia
 *
 * @type utility
 */
export const sepia = "sepia";

/**
 * sepia-[{value}]
 *
 * If you need to use a one-off sepia value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/sepia#arbitrary-values
 *
 * @type utility
 */
export const sepia_arbitrary = (value: string) => `sepia-[${value}]`;

/**
 * Sepia
 *
 * Utilities for applying sepia filters to an element.
 *
 * @see https://tailwindcss.com/docs/sepia
 */
export const sepia_utilities = {
  sepia_0,
  sepia,
  sepia_arbitrary
};