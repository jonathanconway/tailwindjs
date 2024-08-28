

/**
 * outline-0
 *
 * CSS:
 * - outline-width: 0px;
  *
  * @see outline_width
  *
  * @type utility
  */
export const outline_0 = "outline-0";


/**
 * outline-1
 *
 * CSS:
 * - outline-width: 1px;
  *
  * @see outline_width
  *
  * @type utility
  */
export const outline_1 = "outline-1";


/**
 * outline-2
 *
 * CSS:
 * - outline-width: 2px;
  *
  * @see outline_width
  *
  * @type utility
  */
export const outline_2 = "outline-2";


/**
 * outline-4
 *
 * CSS:
 * - outline-width: 4px;
  *
  * @see outline_width
  *
  * @type utility
  */
export const outline_4 = "outline-4";


/**
 * outline-8
 *
 * CSS:
 * - outline-width: 8px;
  *
  * @see outline_width
  *
  * @type utility
  */
export const outline_8 = "outline-8";


/**
 * outline-[…]-[{value}]
 *
 * If you need to use a one-off outline-width value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/outline-width#arbitrary-values
 *
 * @type utility
 */
export const outline_arbitrary = (value: string) => `outline-[${value}]`;


/**
 * outline-[…]-[{value}]
 *
 * If you need to use a one-off outline-width value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/outline-width#arbitrary-values
 *
 * @type utility
 */
export const outline_arb = (value: string) => `outline-[${value}]`;


/**
 * Outline Width
 *
 * Utilities for controlling the width of an element's outline.
 *
 * @see https://tailwindcss.com/docs/outline-width
 */
export const outline_width_utilities = {
  outline_0,
  outline_1,
  outline_2,
  outline_4,
  outline_8,
  outline_arbitrary
};

