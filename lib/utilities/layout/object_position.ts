

/**
 * object-bottom
 *
 * CSS:
 * - object-position: bottom;
  *
  * @see object_position
  *
  * @type utility
  */
export const object_bottom = "object-bottom";


/**
 * object-center
 *
 * CSS:
 * - object-position: center;
  *
  * @see object_position
  *
  * @type utility
  */
export const object_center = "object-center";


/**
 * object-left
 *
 * CSS:
 * - object-position: left;
  *
  * @see object_position
  *
  * @type utility
  */
export const object_left = "object-left";


/**
 * object-left-bottom
 *
 * CSS:
 * - object-position: left bottom;
  *
  * @see object_position
  *
  * @type utility
  */
export const object_left_bottom = "object-left-bottom";


/**
 * object-left-top
 *
 * CSS:
 * - object-position: left top;
  *
  * @see object_position
  *
  * @type utility
  */
export const object_left_top = "object-left-top";


/**
 * object-right
 *
 * CSS:
 * - object-position: right;
  *
  * @see object_position
  *
  * @type utility
  */
export const object_right = "object-right";


/**
 * object-right-bottom
 *
 * CSS:
 * - object-position: right bottom;
  *
  * @see object_position
  *
  * @type utility
  */
export const object_right_bottom = "object-right-bottom";


/**
 * object-right-top
 *
 * CSS:
 * - object-position: right top;
  *
  * @see object_position
  *
  * @type utility
  */
export const object_right_top = "object-right-top";


/**
 * object-top
 *
 * CSS:
 * - object-position: top;
  *
  * @see object_position
  *
  * @type utility
  */
export const object_top = "object-top";


/**
 * object-[…]-[{value}]
 *
 * If you need to use a one-off object-position value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/object-position#arbitrary-values
 *
 * @type utility
 */
export const object_arbitrary = (value: string) => `object-[${value}]`;


/**
 * object-[…]-[{value}]
 *
 * If you need to use a one-off object-position value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/object-position#arbitrary-values
 *
 * @type utility
 */
export const object_arb = (value: string) => `object-[${value}]`;


/**
 * object-left-[…]-[{value}]
 *
 * If you need to use a one-off object-position value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/object-position#arbitrary-values
 *
 * @type utility
 */
export const object_left_arbitrary = (value: string) => `object-left-[${value}]`;


/**
 * object-left-[…]-[{value}]
 *
 * If you need to use a one-off object-position value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/object-position#arbitrary-values
 *
 * @type utility
 */
export const object_left_arb = (value: string) => `object-left-[${value}]`;


/**
 * object-right-[…]-[{value}]
 *
 * If you need to use a one-off object-position value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/object-position#arbitrary-values
 *
 * @type utility
 */
export const object_right_arbitrary = (value: string) => `object-right-[${value}]`;


/**
 * object-right-[…]-[{value}]
 *
 * If you need to use a one-off object-position value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/object-position#arbitrary-values
 *
 * @type utility
 */
export const object_right_arb = (value: string) => `object-right-[${value}]`;


/**
 * Object Position
 *
 * Utilities for controlling how a replaced element's content should be positioned within its container.
 *
 * @see https://tailwindcss.com/docs/object-position
 */
export const object_position_utilities = {
  object_bottom,
  object_center,
  object_left,
  object_left_bottom,
  object_left_top,
  object_right,
  object_right_bottom,
  object_right_top,
  object_top,
  object_arbitrary,
  object_left_arbitrary,
  object_right_arbitrary
};

