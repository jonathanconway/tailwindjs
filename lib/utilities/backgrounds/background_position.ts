

/**
 * bg-bottom
 *
 * CSS:
 * - background-position: bottom;
  *
  * @see background_position
  *
  * @type utility
  */
export const bg_bottom = "bg-bottom";


/**
 * bg-center
 *
 * CSS:
 * - background-position: center;
  *
  * @see background_position
  *
  * @type utility
  */
export const bg_center = "bg-center";


/**
 * bg-left
 *
 * CSS:
 * - background-position: left;
  *
  * @see background_position
  *
  * @type utility
  */
export const bg_left = "bg-left";


/**
 * bg-left-bottom
 *
 * CSS:
 * - background-position: left bottom;
  *
  * @see background_position
  *
  * @type utility
  */
export const bg_left_bottom = "bg-left-bottom";


/**
 * bg-left-top
 *
 * CSS:
 * - background-position: left top;
  *
  * @see background_position
  *
  * @type utility
  */
export const bg_left_top = "bg-left-top";


/**
 * bg-right
 *
 * CSS:
 * - background-position: right;
  *
  * @see background_position
  *
  * @type utility
  */
export const bg_right = "bg-right";


/**
 * bg-right-bottom
 *
 * CSS:
 * - background-position: right bottom;
  *
  * @see background_position
  *
  * @type utility
  */
export const bg_right_bottom = "bg-right-bottom";


/**
 * bg-right-top
 *
 * CSS:
 * - background-position: right top;
  *
  * @see background_position
  *
  * @type utility
  */
export const bg_right_top = "bg-right-top";


/**
 * bg-top
 *
 * CSS:
 * - background-position: top;
  *
  * @see background_position
  *
  * @type utility
  */
export const bg_top = "bg-top";


/**
 * bg-left-[…]-[{value}]
 *
 * If you need to use a one-off background-position value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/background-position#arbitrary-values
 *
 * @type utility
 */
export const bg_left_arbitrary = (value: string) => `bg-left-[${value}]`;


/**
 * bg-left-[…]-[{value}]
 *
 * If you need to use a one-off background-position value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/background-position#arbitrary-values
 *
 * @type utility
 */
export const bg_left_arb = (value: string) => `bg-left-[${value}]`;


/**
 * bg-right-[…]-[{value}]
 *
 * If you need to use a one-off background-position value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/background-position#arbitrary-values
 *
 * @type utility
 */
export const bg_right_arbitrary = (value: string) => `bg-right-[${value}]`;


/**
 * bg-right-[…]-[{value}]
 *
 * If you need to use a one-off background-position value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/background-position#arbitrary-values
 *
 * @type utility
 */
export const bg_right_arb = (value: string) => `bg-right-[${value}]`;


/**
 * Background Position
 *
 * Utilities for controlling the position of an element's background image.
 *
 * @see https://tailwindcss.com/docs/background-position
 */
export const background_position_utilities = {
  bg_bottom,
  bg_center,
  bg_left,
  bg_left_bottom,
  bg_left_top,
  bg_right,
  bg_right_bottom,
  bg_right_top,
  bg_top,
  bg_left_arbitrary,
  bg_right_arbitrary
};

