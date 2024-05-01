/**
 * backdrop-sepia-0
 *
 * CSS properties:
 * - backdrop-filter: sepia(0);
 *
 * @see https://tailwindcss.com/docs/backdrop-sepia
 *
 * @type utility
 */
export const backdrop_sepia_0 = "backdrop-sepia-0";

/**
 * backdrop-sepia
 *
 * CSS properties:
 * - backdrop-filter: sepia(100%);
 *
 * @see https://tailwindcss.com/docs/backdrop-sepia
 *
 * @type utility
 */
export const backdrop_sepia = "backdrop-sepia";

/**
 * backdrop-sepia-[:value]
 *
 * If you need to use a one-off backdrop-sepia value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-sepia#arbitrary-values
 */
export const backdrop_sepia_arbitrary = (value: string) => `backdrop-sepia-[${value}]`;

/**
 * Filters
 *
 * Utilities for applying backdrop sepia filters to an element.
 *
 * @see https://tailwindcss.com/docs/backdrop-sepia
 */
export const backdrop_sepia = {
  backdrop_sepia_0,
  backdrop_sepia,
  backdrop_sepia_arbitrary
};