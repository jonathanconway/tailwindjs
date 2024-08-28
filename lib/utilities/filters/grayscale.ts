

/**
 * grayscale-0
 *
 * CSS:
 * - filter: grayscale(0);
  *
  * @see grayscale
  *
  * @type utility
  */
export const grayscale_0 = "grayscale-0";


/**
 * grayscale
 *
 * CSS:
 * - filter: grayscale(100%);
  *
  * @see grayscale
  *
  * @type utility
  */
export const grayscale = "grayscale";


/**
 * grayscale-[…]-[{value}]
 *
 * If you need to use a one-off grayscale value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/grayscale#arbitrary-values
 *
 * @type utility
 */
export const grayscale_arbitrary = (value: string) => `grayscale-[${value}]`;


/**
 * grayscale-[…]-[{value}]
 *
 * If you need to use a one-off grayscale value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/grayscale#arbitrary-values
 *
 * @type utility
 */
export const grayscale_arb = (value: string) => `grayscale-[${value}]`;


/**
 * Grayscale
 *
 * Utilities for applying grayscale filters to an element.
 *
 * @see https://tailwindcss.com/docs/grayscale
 */
export const grayscale_utilities = {
  grayscale_0,
  grayscale,
  grayscale_arbitrary
};

