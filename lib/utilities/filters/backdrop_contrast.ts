

/**
 * backdrop-contrast-0
 *
 * CSS:
 * - backdrop-filter: contrast(0);
  *
  * @see backdrop_contrast
  *
  * @type utility
  */
export const backdrop_contrast_0 = "backdrop-contrast-0";


/**
 * backdrop-contrast-50
 *
 * CSS:
 * - backdrop-filter: contrast(.5);
  *
  * @see backdrop_contrast
  *
  * @type utility
  */
export const backdrop_contrast_50 = "backdrop-contrast-50";


/**
 * backdrop-contrast-75
 *
 * CSS:
 * - backdrop-filter: contrast(.75);
  *
  * @see backdrop_contrast
  *
  * @type utility
  */
export const backdrop_contrast_75 = "backdrop-contrast-75";


/**
 * backdrop-contrast-100
 *
 * CSS:
 * - backdrop-filter: contrast(1);
  *
  * @see backdrop_contrast
  *
  * @type utility
  */
export const backdrop_contrast_100 = "backdrop-contrast-100";


/**
 * backdrop-contrast-125
 *
 * CSS:
 * - backdrop-filter: contrast(1.25);
  *
  * @see backdrop_contrast
  *
  * @type utility
  */
export const backdrop_contrast_125 = "backdrop-contrast-125";


/**
 * backdrop-contrast-150
 *
 * CSS:
 * - backdrop-filter: contrast(1.5);
  *
  * @see backdrop_contrast
  *
  * @type utility
  */
export const backdrop_contrast_150 = "backdrop-contrast-150";


/**
 * backdrop-contrast-200
 *
 * CSS:
 * - backdrop-filter: contrast(2);
  *
  * @see backdrop_contrast
  *
  * @type utility
  */
export const backdrop_contrast_200 = "backdrop-contrast-200";


/**
 * backdrop-contrast-[…]-[{value}]
 *
 * If you need to use a one-off backdrop-contrast value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-contrast#arbitrary-values
 *
 * @type utility
 */
export const backdrop_contrast_arbitrary = (value: string) => `backdrop-contrast-["${value}"]`;


/**
 * backdrop-contrast-[…]-[{value}]
 *
 * If you need to use a one-off backdrop-contrast value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-contrast#arbitrary-values
 *
 * @type utility
 */
export const backdrop_contrast_arb = (value: string) => `backdrop-contrast-["${value}"]`;


/**
 * Backdrop Contrast
 *
 * Utilities for applying backdrop contrast filters to an element.
 *
 * @see https://tailwindcss.com/docs/backdrop-contrast
 */
export const backdrop_contrast_utilities = {
  backdrop_contrast_0,
  backdrop_contrast_50,
  backdrop_contrast_75,
  backdrop_contrast_100,
  backdrop_contrast_125,
  backdrop_contrast_150,
  backdrop_contrast_200,
  backdrop_contrast_arbitrary
};

