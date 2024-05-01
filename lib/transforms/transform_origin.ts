/**
 * origin-center
 *
 * CSS properties:
 * - transform-origin: center;
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_center = "origin-center";

/**
 * origin-top
 *
 * CSS properties:
 * - transform-origin: top;
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_top = "origin-top";

/**
 * origin-top-right
 *
 * CSS properties:
 * - transform-origin: top right;
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_top_right = "origin-top-right";

/**
 * origin-right
 *
 * CSS properties:
 * - transform-origin: right;
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_right = "origin-right";

/**
 * origin-bottom-right
 *
 * CSS properties:
 * - transform-origin: bottom right;
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_bottom_right = "origin-bottom-right";

/**
 * origin-bottom
 *
 * CSS properties:
 * - transform-origin: bottom;
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_bottom = "origin-bottom";

/**
 * origin-bottom-left
 *
 * CSS properties:
 * - transform-origin: bottom left;
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_bottom_left = "origin-bottom-left";

/**
 * origin-left
 *
 * CSS properties:
 * - transform-origin: left;
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_left = "origin-left";

/**
 * origin-top-left
 *
 * CSS properties:
 * - transform-origin: top left;
 *
 * @see https://tailwindcss.com/docs/transform-origin
 *
 * @type utility
 */
export const origin_top_left = "origin-top-left";

/**
 * origin-[:value]
 *
 * If you need to use a one-off transform-origin value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/transform-origin#arbitrary-values
 */
export const origin_arbitrary = (value: string) => `origin-[${value}]`;

/**
 * Transforms
 *
 * Utilities for specifying the origin for an element's transformations.
 *
 * @see https://tailwindcss.com/docs/transform-origin
 */
export const transform_origin = {
  origin_center,
  origin_top,
  origin_top_right,
  origin_right,
  origin_bottom_right,
  origin_bottom,
  origin_bottom_left,
  origin_left,
  origin_top_left,
  origin_arbitrary
};