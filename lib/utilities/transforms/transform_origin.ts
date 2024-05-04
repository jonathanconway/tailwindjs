/**
 * origin-center
 *
 * CSS:
 * - `transform-origin: center;`
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_center = "origin-center";

/**
 * origin-top
 *
 * CSS:
 * - `transform-origin: top;`
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_top = "origin-top";

/**
 * origin-top-right
 *
 * CSS:
 * - `transform-origin: top right;`
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_top_right = "origin-top-right";

/**
 * origin-right
 *
 * CSS:
 * - `transform-origin: right;`
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_right = "origin-right";

/**
 * origin-bottom-right
 *
 * CSS:
 * - `transform-origin: bottom right;`
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_bottom_right = "origin-bottom-right";

/**
 * origin-bottom
 *
 * CSS:
 * - `transform-origin: bottom;`
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_bottom = "origin-bottom";

/**
 * origin-bottom-left
 *
 * CSS:
 * - `transform-origin: bottom left;`
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_bottom_left = "origin-bottom-left";

/**
 * origin-left
 *
 * CSS:
 * - `transform-origin: left;`
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_left = "origin-left";

/**
 * origin-top-left
 *
 * CSS:
 * - `transform-origin: top left;`
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_top_left = "origin-top-left";

/**
 * origin-[{value}]
 *
 * If you need to use a one-off transform-origin value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/transform-origin#arbitrary-values
 *
 * @type utility
 */
export const origin_arbitrary = (value: string) => `origin-[${value}]`;


/**
 * origin-top-[{value}]
 *
 * If you need to use a one-off transform-origin value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/transform-origin#arbitrary-values
 *
 * @type utility
 */
export const origin_top_arbitrary = (value: string) => `origin-top-[${value}]`;


/**
 * origin-bottom-[{value}]
 *
 * If you need to use a one-off transform-origin value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/transform-origin#arbitrary-values
 *
 * @type utility
 */
export const origin_bottom_arbitrary = (value: string) => `origin-bottom-[${value}]`;

/**
 * Transform Origin
 *
 * Utilities for specifying the origin for an element's transformations.
 *
 * @see https://tailwindcss.com/docs/transform-origin
 */
export const transform_origin_utilities = {
  origin_center,
  origin_top,
  origin_top_right,
  origin_right,
  origin_bottom_right,
  origin_bottom,
  origin_bottom_left,
  origin_left,
  origin_top_left,
  origin_arbitrary,
  origin_top_arbitrary,
  origin_bottom_arbitrary
};