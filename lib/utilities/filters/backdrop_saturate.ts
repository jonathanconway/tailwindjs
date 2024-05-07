

/**
 * backdrop-saturate-0
 *
 * CSS:
 * - `backdrop-filter: saturate(0);`
  *
  * @see backdrop_saturate
  *
  * @type utility
  */
export const backdrop_saturate_0 = "backdrop-saturate-0";


/**
 * backdrop-saturate-50
 *
 * CSS:
 * - `backdrop-filter: saturate(.5);`
  *
  * @see backdrop_saturate
  *
  * @type utility
  */
export const backdrop_saturate_50 = "backdrop-saturate-50";


/**
 * backdrop-saturate-100
 *
 * CSS:
 * - `backdrop-filter: saturate(1);`
  *
  * @see backdrop_saturate
  *
  * @type utility
  */
export const backdrop_saturate_100 = "backdrop-saturate-100";


/**
 * backdrop-saturate-150
 *
 * CSS:
 * - `backdrop-filter: saturate(1.5);`
  *
  * @see backdrop_saturate
  *
  * @type utility
  */
export const backdrop_saturate_150 = "backdrop-saturate-150";


/**
 * backdrop-saturate-200
 *
 * CSS:
 * - `backdrop-filter: saturate(2);`
  *
  * @see backdrop_saturate
  *
  * @type utility
  */
export const backdrop_saturate_200 = "backdrop-saturate-200";


/**
 * backdrop-saturate-[{value}]
 *
 * If you need to use a one-off backdrop-saturate value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-saturate#arbitrary-values
 *
 * @type utility
 */
export const backdrop_saturate_arbitrary = (value: string) => `backdrop-saturate-[${value}]`;


/**
 * backdrop-saturate-[{value}]
 *
 * If you need to use a one-off backdrop-saturate value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-saturate#arbitrary-values
 *
 * @type utility
 */
export const backdrop_saturate_arb = (value: string) => `backdrop-saturate-[${value}]`;


/**
 * Backdrop Saturate
 *
 * Utilities for applying backdrop saturation filters to an element.
 *
 * @see https://tailwindcss.com/docs/backdrop-saturate
 */
export const backdrop_saturate_utilities = {
  backdrop_saturate_0,
  backdrop_saturate_50,
  backdrop_saturate_100,
  backdrop_saturate_150,
  backdrop_saturate_200,
  backdrop_saturate_arbitrary
};

