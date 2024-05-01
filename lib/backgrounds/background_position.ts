/**
 * bg-bottom
 *
 * CSS properties:
 * - background-position: bottom;
 *
 * @see https://tailwindcss.com/docs/background-position
 *
 * @type utility
 */
export const bg_bottom = "bg-bottom";

/**
 * bg-center
 *
 * CSS properties:
 * - background-position: center;
 *
 * @see https://tailwindcss.com/docs/background-position
 *
 * @type utility
 */
export const bg_center = "bg-center";

/**
 * bg-left
 *
 * CSS properties:
 * - background-position: left;
 *
 * @see https://tailwindcss.com/docs/background-position
 *
 * @type utility
 */
export const bg_left = "bg-left";

/**
 * bg-left-bottom
 *
 * CSS properties:
 * - background-position: left bottom;
 *
 * @see https://tailwindcss.com/docs/background-position
 *
 * @type utility
 */
export const bg_left_bottom = "bg-left-bottom";

/**
 * bg-left-top
 *
 * CSS properties:
 * - background-position: left top;
 *
 * @see https://tailwindcss.com/docs/background-position
 *
 * @type utility
 */
export const bg_left_top = "bg-left-top";

/**
 * bg-right
 *
 * CSS properties:
 * - background-position: right;
 *
 * @see https://tailwindcss.com/docs/background-position
 *
 * @type utility
 */
export const bg_right = "bg-right";

/**
 * bg-right-bottom
 *
 * CSS properties:
 * - background-position: right bottom;
 *
 * @see https://tailwindcss.com/docs/background-position
 *
 * @type utility
 */
export const bg_right_bottom = "bg-right-bottom";

/**
 * bg-right-top
 *
 * CSS properties:
 * - background-position: right top;
 *
 * @see https://tailwindcss.com/docs/background-position
 *
 * @type utility
 */
export const bg_right_top = "bg-right-top";

/**
 * bg-top
 *
 * CSS properties:
 * - background-position: top;
 *
 * @see https://tailwindcss.com/docs/background-position
 *
 * @type utility
 */
export const bg_top = "bg-top";

/**
 * bg-[:value]
 *
 * If you need to use a one-off background-position value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/background-position#arbitrary-values
 */
export const bg_arbitrary = (value: string) => `bg-[${value}]`;

/**
 * Backgrounds
 *
 * Utilities for controlling the position of an element's background image.
 *
 * @see https://tailwindcss.com/docs/background-position
 */
export const background_position = {
  bg_bottom,
  bg_center,
  bg_left,
  bg_left_bottom,
  bg_left_top,
  bg_right,
  bg_right_bottom,
  bg_right_top,
  bg_top,
  bg_arbitrary
};