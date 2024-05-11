

/**
 * backdrop-grayscale-0
 *
 * CSS:
 * - backdrop-filter: grayscale(0);
  *
  * @see backdrop_grayscale
  *
  * @type utility
  */
export const backdrop_grayscale_0 = "backdrop-grayscale-0";


/**
 * backdrop-grayscale
 *
 * CSS:
 * - backdrop-filter: grayscale(100%);
  *
  * @see backdrop_grayscale
  *
  * @type utility
  */
export const backdrop_grayscale = "backdrop-grayscale";


/**
 * backdrop-grayscale-[{value}]
 *
 * If you need to use a one-off backdrop-grayscale value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-grayscale#arbitrary-values
 *
 * @type utility
 */
export const backdrop_grayscale_arbitrary = (value: string) => `backdrop-grayscale-[${value}]`;


/**
 * backdrop-grayscale-[{value}]
 *
 * If you need to use a one-off backdrop-grayscale value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-grayscale#arbitrary-values
 *
 * @type utility
 */
export const backdrop_grayscale_arb = (value: string) => `backdrop-grayscale-[${value}]`;


/**
 * Backdrop Grayscale
 *
 * Utilities for applying backdrop grayscale filters to an element.
 *
 * @see https://tailwindcss.com/docs/backdrop-grayscale
 */
export const backdrop_grayscale_utilities = {
  backdrop_grayscale_0,
  backdrop_grayscale,
  backdrop_grayscale_arbitrary
};

