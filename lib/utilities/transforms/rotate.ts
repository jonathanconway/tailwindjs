

/**
 * rotate-0
 *
 * CSS:
 * - transform: rotate(0deg);
  *
  * @see rotate
  *
  * @type utility
  */
export const rotate_0 = "rotate-0";


/**
 * rotate-1
 *
 * CSS:
 * - transform: rotate(1deg);
  *
  * @see rotate
  *
  * @type utility
  */
export const rotate_1 = "rotate-1";


/**
 * rotate-2
 *
 * CSS:
 * - transform: rotate(2deg);
  *
  * @see rotate
  *
  * @type utility
  */
export const rotate_2 = "rotate-2";


/**
 * rotate-3
 *
 * CSS:
 * - transform: rotate(3deg);
  *
  * @see rotate
  *
  * @type utility
  */
export const rotate_3 = "rotate-3";


/**
 * rotate-6
 *
 * CSS:
 * - transform: rotate(6deg);
  *
  * @see rotate
  *
  * @type utility
  */
export const rotate_6 = "rotate-6";


/**
 * rotate-12
 *
 * CSS:
 * - transform: rotate(12deg);
  *
  * @see rotate
  *
  * @type utility
  */
export const rotate_12 = "rotate-12";


/**
 * rotate-45
 *
 * CSS:
 * - transform: rotate(45deg);
  *
  * @see rotate
  *
  * @type utility
  */
export const rotate_45 = "rotate-45";


/**
 * rotate-90
 *
 * CSS:
 * - transform: rotate(90deg);
  *
  * @see rotate
  *
  * @type utility
  */
export const rotate_90 = "rotate-90";


/**
 * rotate-180
 *
 * CSS:
 * - transform: rotate(180deg);
  *
  * @see rotate
  *
  * @type utility
  */
export const rotate_180 = "rotate-180";


/**
 * rotate-[…]-[{value}]
 *
 * If you need to use a one-off rotate value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/rotate#arbitrary-values
 *
 * @type utility
 */
export const rotate_arbitrary = (value: string) => `rotate-["${value}"]`;


/**
 * rotate-[…]-[{value}]
 *
 * If you need to use a one-off rotate value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/rotate#arbitrary-values
 *
 * @type utility
 */
export const rotate_arb = (value: string) => `rotate-["${value}"]`;


/**
 * Rotate
 *
 * Utilities for rotating elements with transform.
 *
 * @see https://tailwindcss.com/docs/rotate
 */
export const rotate_utilities = {
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

