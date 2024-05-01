/**
 * rotate-0
 *
 * CSS properties:
 * - transform: rotate(0deg);
 *
 * @see https://tailwindcss.com/docs/rotate
 *
 * @type utility
 */
export const rotate_0 = "rotate-0";

/**
 * rotate-1
 *
 * CSS properties:
 * - transform: rotate(1deg);
 *
 * @see https://tailwindcss.com/docs/rotate
 *
 * @type utility
 */
export const rotate_1 = "rotate-1";

/**
 * rotate-2
 *
 * CSS properties:
 * - transform: rotate(2deg);
 *
 * @see https://tailwindcss.com/docs/rotate
 *
 * @type utility
 */
export const rotate_2 = "rotate-2";

/**
 * rotate-3
 *
 * CSS properties:
 * - transform: rotate(3deg);
 *
 * @see https://tailwindcss.com/docs/rotate
 *
 * @type utility
 */
export const rotate_3 = "rotate-3";

/**
 * rotate-6
 *
 * CSS properties:
 * - transform: rotate(6deg);
 *
 * @see https://tailwindcss.com/docs/rotate
 *
 * @type utility
 */
export const rotate_6 = "rotate-6";

/**
 * rotate-12
 *
 * CSS properties:
 * - transform: rotate(12deg);
 *
 * @see https://tailwindcss.com/docs/rotate
 *
 * @type utility
 */
export const rotate_12 = "rotate-12";

/**
 * rotate-45
 *
 * CSS properties:
 * - transform: rotate(45deg);
 *
 * @see https://tailwindcss.com/docs/rotate
 *
 * @type utility
 */
export const rotate_45 = "rotate-45";

/**
 * rotate-90
 *
 * CSS properties:
 * - transform: rotate(90deg);
 *
 * @see https://tailwindcss.com/docs/rotate
 *
 * @type utility
 */
export const rotate_90 = "rotate-90";

/**
 * rotate-180
 *
 * CSS properties:
 * - transform: rotate(180deg);
 *
 * @see https://tailwindcss.com/docs/rotate
 *
 * @type utility
 */
export const rotate_180 = "rotate-180";

/**
 * rotate-[:value]
 *
 * If you need to use a one-off rotate value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/rotate#arbitrary-values
 */
export const rotate_arbitrary = (value: string) => `rotate-[${value}]`;

/**
 * Transforms
 *
 * Utilities for rotating elements with transform.
 *
 * @see https://tailwindcss.com/docs/rotate
 */
export const rotate = {
  rotate_0,
  rotate_1,
  rotate_2,
  rotate_3,
  rotate_6,
  rotate_12,
  rotate_45,
  rotate_90,
  rotate_180,
  rotate_arbitrary
};