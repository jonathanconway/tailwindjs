

/**
 * outline-offset-0
 *
 * CSS:
 * - outline-offset: 0px;
  *
  * @see outline_offset
  *
  * @type utility
  */
export const outline_offset_0 = "outline-offset-0";


/**
 * outline-offset-1
 *
 * CSS:
 * - outline-offset: 1px;
  *
  * @see outline_offset
  *
  * @type utility
  */
export const outline_offset_1 = "outline-offset-1";


/**
 * outline-offset-2
 *
 * CSS:
 * - outline-offset: 2px;
  *
  * @see outline_offset
  *
  * @type utility
  */
export const outline_offset_2 = "outline-offset-2";


/**
 * outline-offset-4
 *
 * CSS:
 * - outline-offset: 4px;
  *
  * @see outline_offset
  *
  * @type utility
  */
export const outline_offset_4 = "outline-offset-4";


/**
 * outline-offset-8
 *
 * CSS:
 * - outline-offset: 8px;
  *
  * @see outline_offset
  *
  * @type utility
  */
export const outline_offset_8 = "outline-offset-8";


/**
 * outline-offset-[…]-[{value}]
 *
 * If you need to use a one-off outline-offset value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/outline-offset#arbitrary-values
 *
 * @type utility
 */
export const outline_offset_arbitrary = (value: string) => `outline-offset-[${value}]`;


/**
 * outline-offset-[…]-[{value}]
 *
 * If you need to use a one-off outline-offset value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/outline-offset#arbitrary-values
 *
 * @type utility
 */
export const outline_offset_arb = (value: string) => `outline-offset-[${value}]`;


/**
 * Outline Offset
 *
 * Utilities for controlling the offset of an element's outline.
 *
 * @see https://tailwindcss.com/docs/outline-offset
 */
export const outline_offset_utilities = {
  outline_offset_0,
  outline_offset_1,
  outline_offset_2,
  outline_offset_4,
  outline_offset_8,
  outline_offset_arbitrary
};

