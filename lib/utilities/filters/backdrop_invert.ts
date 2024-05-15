

/**
 * backdrop-invert-0
 *
 * CSS:
 * - backdrop-filter: invert(0);
  *
  * @see backdrop_invert
  *
  * @type utility
  */
export const backdrop_invert_0 = "backdrop-invert-0";


/**
 * backdrop-invert
 *
 * CSS:
 * - backdrop-filter: invert(100%);
  *
  * @see backdrop_invert
  *
  * @type utility
  */
export const backdrop_invert = "backdrop-invert";


/**
 * backdrop-invert-[…]-[{value}]
 *
 * If you need to use a one-off backdrop-invert value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-invert#arbitrary-values
 *
 * @type utility
 */
export const backdrop_invert_arbitrary = (value: string) => `backdrop-invert-[${value}]`;


/**
 * backdrop-invert-[…]-[{value}]
 *
 * If you need to use a one-off backdrop-invert value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-invert#arbitrary-values
 *
 * @type utility
 */
export const backdrop_invert_arb = (value: string) => `backdrop-invert-[${value}]`;


/**
 * Backdrop Invert
 *
 * Utilities for applying backdrop invert filters to an element.
 *
 * @see https://tailwindcss.com/docs/backdrop-invert
 */
export const backdrop_invert_utilities = {
  backdrop_invert_0,
  backdrop_invert,
  backdrop_invert_arbitrary
};

