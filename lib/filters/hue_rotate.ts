/**
 * hue-rotate-0
 *
 * CSS properties:
 * - filter: hue-rotate(0deg);
 *
 * @see https://tailwindcss.com/docs/hue-rotate
 *
 * @type utility
 */
export const hue_rotate_0 = "hue-rotate-0";

/**
 * hue-rotate-15
 *
 * CSS properties:
 * - filter: hue-rotate(15deg);
 *
 * @see https://tailwindcss.com/docs/hue-rotate
 *
 * @type utility
 */
export const hue_rotate_15 = "hue-rotate-15";

/**
 * hue-rotate-30
 *
 * CSS properties:
 * - filter: hue-rotate(30deg);
 *
 * @see https://tailwindcss.com/docs/hue-rotate
 *
 * @type utility
 */
export const hue_rotate_30 = "hue-rotate-30";

/**
 * hue-rotate-60
 *
 * CSS properties:
 * - filter: hue-rotate(60deg);
 *
 * @see https://tailwindcss.com/docs/hue-rotate
 *
 * @type utility
 */
export const hue_rotate_60 = "hue-rotate-60";

/**
 * hue-rotate-90
 *
 * CSS properties:
 * - filter: hue-rotate(90deg);
 *
 * @see https://tailwindcss.com/docs/hue-rotate
 *
 * @type utility
 */
export const hue_rotate_90 = "hue-rotate-90";

/**
 * hue-rotate-180
 *
 * CSS properties:
 * - filter: hue-rotate(180deg);
 *
 * @see https://tailwindcss.com/docs/hue-rotate
 *
 * @type utility
 */
export const hue_rotate_180 = "hue-rotate-180";

/**
 * hue-rotate-[:value]
 *
 * If you need to use a one-off hue-rotate value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/hue-rotate#arbitrary-values
 */
export const hue_rotate_arbitrary = (value: string) => `hue-rotate-[${value}]`;

/**
 * Filters
 *
 * Utilities for applying hue-rotate filters to an element.
 *
 * @see https://tailwindcss.com/docs/hue-rotate
 */
export const hue_rotate = {
  hue_rotate_0,
  hue_rotate_15,
  hue_rotate_30,
  hue_rotate_60,
  hue_rotate_90,
  hue_rotate_180,
  hue_rotate_arbitrary
};