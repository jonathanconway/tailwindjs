

/**
 * antialiased
 *
 * CSS:
 * - -webkit-font-smoothing: antialiased;
 * - -moz-osx-font-smoothing: grayscale;
  *
  * @see font_smoothing
  *
  * @type utility
  */
export const antialiased = "antialiased";


/**
 * subpixel-antialiased
 *
 * CSS:
 * - -webkit-font-smoothing: auto;
 * - -moz-osx-font-smoothing: auto;
  *
  * @see font_smoothing
  *
  * @type utility
  */
export const subpixel_antialiased = "subpixel-antialiased";



/**
 * Font Smoothing
 *
 * Utilities for controlling the font smoothing of an element.
 *
 * @see https://tailwindcss.com/docs/font-smoothing
 */
export const font_smoothing_utilities = {
  antialiased,
  subpixel_antialiased
};

