

/**
 * contrast-0
 *
 * CSS:
 * - `filter: contrast(0);`
  *
  * @see contrast
  *
  * @type utility
  */
export const contrast_0 = "contrast-0";


/**
 * contrast-50
 *
 * CSS:
 * - `filter: contrast(.5);`
  *
  * @see contrast
  *
  * @type utility
  */
export const contrast_50 = "contrast-50";


/**
 * contrast-75
 *
 * CSS:
 * - `filter: contrast(.75);`
  *
  * @see contrast
  *
  * @type utility
  */
export const contrast_75 = "contrast-75";


/**
 * contrast-100
 *
 * CSS:
 * - `filter: contrast(1);`
  *
  * @see contrast
  *
  * @type utility
  */
export const contrast_100 = "contrast-100";


/**
 * contrast-125
 *
 * CSS:
 * - `filter: contrast(1.25);`
  *
  * @see contrast
  *
  * @type utility
  */
export const contrast_125 = "contrast-125";


/**
 * contrast-150
 *
 * CSS:
 * - `filter: contrast(1.5);`
  *
  * @see contrast
  *
  * @type utility
  */
export const contrast_150 = "contrast-150";


/**
 * contrast-200
 *
 * CSS:
 * - `filter: contrast(2);`
  *
  * @see contrast
  *
  * @type utility
  */
export const contrast_200 = "contrast-200";


/**
 * contrast-[{value}]
 *
 * If you need to use a one-off contrast value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/contrast#arbitrary-values
 *
 * @type utility
 */
export const contrast_arbitrary = (value: string) => `contrast-[${value}]`;


/**
 * contrast-[{value}]
 *
 * If you need to use a one-off contrast value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/contrast#arbitrary-values
 *
 * @type utility
 */
export const contrast_arb = (value: string) => `contrast-[${value}]`;


/**
 * Contrast
 *
 * Utilities for applying contrast filters to an element.
 *
 * @see https://tailwindcss.com/docs/contrast
 */
export const contrast_utilities = {
  contrast_0,
  contrast_50,
  contrast_75,
  contrast_100,
  contrast_125,
  contrast_150,
  contrast_200,
  contrast_arbitrary
};

