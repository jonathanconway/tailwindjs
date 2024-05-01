/**
 * antialiased
 *
 * CSS properties:
 * - -webkit-font-smoothing: antialiased;, * - -moz-osx-font-smoothing: grayscale;
 *
 * @see https://tailwindcss.com/docs/font-smoothing
 *
 * @type utility
 */
export const antialiased = "antialiased";

/**
 * subpixel-antialiased
 *
 * CSS properties:
 * - -webkit-font-smoothing: auto;, * - -moz-osx-font-smoothing: auto;
 *
 * @see https://tailwindcss.com/docs/font-smoothing
 *
 * @type utility
 */
export const subpixel_antialiased = "subpixel-antialiased";

/**
 * Typography
 *
 * Utilities for controlling the font smoothing of an element.
 *
 * @see https://tailwindcss.com/docs/font-smoothing
 */
export const font_smoothing = {
  antialiased,
  subpixel_antialiased
};