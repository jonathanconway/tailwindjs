/**
 * font-thin
 *
 * CSS properties:
 * - font-weight: 100;
 *
 * @see https://tailwindcss.com/docs/font-weight
 *
 * @type utility
 */
export const font_thin = "font-thin";

/**
 * font-extralight
 *
 * CSS properties:
 * - font-weight: 200;
 *
 * @see https://tailwindcss.com/docs/font-weight
 *
 * @type utility
 */
export const font_extralight = "font-extralight";

/**
 * font-light
 *
 * CSS properties:
 * - font-weight: 300;
 *
 * @see https://tailwindcss.com/docs/font-weight
 *
 * @type utility
 */
export const font_light = "font-light";

/**
 * font-normal
 *
 * CSS properties:
 * - font-weight: 400;
 *
 * @see https://tailwindcss.com/docs/font-weight
 *
 * @type utility
 */
export const font_normal = "font-normal";

/**
 * font-medium
 *
 * CSS properties:
 * - font-weight: 500;
 *
 * @see https://tailwindcss.com/docs/font-weight
 *
 * @type utility
 */
export const font_medium = "font-medium";

/**
 * font-semibold
 *
 * CSS properties:
 * - font-weight: 600;
 *
 * @see https://tailwindcss.com/docs/font-weight
 *
 * @type utility
 */
export const font_semibold = "font-semibold";

/**
 * font-bold
 *
 * CSS properties:
 * - font-weight: 700;
 *
 * @see https://tailwindcss.com/docs/font-weight
 *
 * @type utility
 */
export const font_bold = "font-bold";

/**
 * font-extrabold
 *
 * CSS properties:
 * - font-weight: 800;
 *
 * @see https://tailwindcss.com/docs/font-weight
 *
 * @type utility
 */
export const font_extrabold = "font-extrabold";

/**
 * font-black
 *
 * CSS properties:
 * - font-weight: 900;
 *
 * @see https://tailwindcss.com/docs/font-weight
 *
 * @type utility
 */
export const font_black = "font-black";

/**
 * font-[:value]
 *
 * If you need to use a one-off font-weight value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/font-weight#arbitrary-values
 */
export const font_arbitrary = (value: string) => `font-[${value}]`;

/**
 * Typography
 *
 * Utilities for controlling the font weight of an element.
 *
 * @see https://tailwindcss.com/docs/font-weight
 */
export const font_weight = {
  font_thin,
  font_extralight,
  font_light,
  font_normal,
  font_medium,
  font_semibold,
  font_bold,
  font_extrabold,
  font_black,
  font_arbitrary
};