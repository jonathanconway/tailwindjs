

/**
 * underline-offset-auto
 *
 * CSS:
 * - text-underline-offset: auto;
  *
  * @see text_underline_offset
  *
  * @type utility
  */
export const underline_offset_auto = "underline-offset-auto";


/**
 * underline-offset-0
 *
 * CSS:
 * - text-underline-offset: 0px;
  *
  * @see text_underline_offset
  *
  * @type utility
  */
export const underline_offset_0 = "underline-offset-0";


/**
 * underline-offset-1
 *
 * CSS:
 * - text-underline-offset: 1px;
  *
  * @see text_underline_offset
  *
  * @type utility
  */
export const underline_offset_1 = "underline-offset-1";


/**
 * underline-offset-2
 *
 * CSS:
 * - text-underline-offset: 2px;
  *
  * @see text_underline_offset
  *
  * @type utility
  */
export const underline_offset_2 = "underline-offset-2";


/**
 * underline-offset-4
 *
 * CSS:
 * - text-underline-offset: 4px;
  *
  * @see text_underline_offset
  *
  * @type utility
  */
export const underline_offset_4 = "underline-offset-4";


/**
 * underline-offset-8
 *
 * CSS:
 * - text-underline-offset: 8px;
  *
  * @see text_underline_offset
  *
  * @type utility
  */
export const underline_offset_8 = "underline-offset-8";


/**
 * underline-offset-[…]-[{value}]
 *
 * If you need to use a one-off text-underline-offset value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/text-underline-offset#arbitrary-values
 *
 * @type utility
 */
export const underline_offset_arbitrary = (value: string) => `underline-offset-[${value}]`;


/**
 * underline-offset-[…]-[{value}]
 *
 * If you need to use a one-off text-underline-offset value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/text-underline-offset#arbitrary-values
 *
 * @type utility
 */
export const underline_offset_arb = (value: string) => `underline-offset-[${value}]`;


/**
 * Text Underline Offset
 *
 * Utilities for controlling the offset of a text underline.
 *
 * @see https://tailwindcss.com/docs/text-underline-offset
 */
export const text_underline_offset_utilities = {
  underline_offset_auto,
  underline_offset_0,
  underline_offset_1,
  underline_offset_2,
  underline_offset_4,
  underline_offset_8,
  underline_offset_arbitrary
};

