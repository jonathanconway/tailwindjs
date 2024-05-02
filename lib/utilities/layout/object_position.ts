/**
 * object-bottom
 *
 * CSS:
 * - `object-position: bottom;`
 *
 * @see https://tailwindcss.com/docs/object-position
 *
 * @type utility
 */
export const object_bottom = "object-bottom";

/**
 * object-center
 *
 * CSS:
 * - `object-position: center;`
 *
 * @see https://tailwindcss.com/docs/object-position
 *
 * @type utility
 */
export const object_center = "object-center";

/**
 * object-left
 *
 * CSS:
 * - `object-position: left;`
 *
 * @see https://tailwindcss.com/docs/object-position
 *
 * @type utility
 */
export const object_left = "object-left";

/**
 * object-left-bottom
 *
 * CSS:
 * - `object-position: left bottom;`
 *
 * @see https://tailwindcss.com/docs/object-position
 *
 * @type utility
 */
export const object_left_bottom = "object-left-bottom";

/**
 * object-left-top
 *
 * CSS:
 * - `object-position: left top;`
 *
 * @see https://tailwindcss.com/docs/object-position
 *
 * @type utility
 */
export const object_left_top = "object-left-top";

/**
 * object-right
 *
 * CSS:
 * - `object-position: right;`
 *
 * @see https://tailwindcss.com/docs/object-position
 *
 * @type utility
 */
export const object_right = "object-right";

/**
 * object-right-bottom
 *
 * CSS:
 * - `object-position: right bottom;`
 *
 * @see https://tailwindcss.com/docs/object-position
 *
 * @type utility
 */
export const object_right_bottom = "object-right-bottom";

/**
 * object-right-top
 *
 * CSS:
 * - `object-position: right top;`
 *
 * @see https://tailwindcss.com/docs/object-position
 *
 * @type utility
 */
export const object_right_top = "object-right-top";

/**
 * object-top
 *
 * CSS:
 * - `object-position: top;`
 *
 * @see https://tailwindcss.com/docs/object-position
 *
 * @type utility
 */
export const object_top = "object-top";

/**
 * object-[:value]
 *
 * If you need to use a one-off object-position value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/object-position#arbitrary-values
 *
 * @type utility
 */
export const object_arbitrary = (value: string) => `object-[${value}]`;

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
  object_arbitrary
};