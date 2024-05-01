/**
 * brightness-0
 *
 * CSS properties:
 * - filter: brightness(0);
 *
 * @see https://tailwindcss.com/docs/brightness
 *
 * @type utility
 */
export const brightness_0 = "brightness-0";

/**
 * brightness-50
 *
 * CSS properties:
 * - filter: brightness(.5);
 *
 * @see https://tailwindcss.com/docs/brightness
 *
 * @type utility
 */
export const brightness_50 = "brightness-50";

/**
 * brightness-75
 *
 * CSS properties:
 * - filter: brightness(.75);
 *
 * @see https://tailwindcss.com/docs/brightness
 *
 * @type utility
 */
export const brightness_75 = "brightness-75";

/**
 * brightness-90
 *
 * CSS properties:
 * - filter: brightness(.9);
 *
 * @see https://tailwindcss.com/docs/brightness
 *
 * @type utility
 */
export const brightness_90 = "brightness-90";

/**
 * brightness-95
 *
 * CSS properties:
 * - filter: brightness(.95);
 *
 * @see https://tailwindcss.com/docs/brightness
 *
 * @type utility
 */
export const brightness_95 = "brightness-95";

/**
 * brightness-100
 *
 * CSS properties:
 * - filter: brightness(1);
 *
 * @see https://tailwindcss.com/docs/brightness
 *
 * @type utility
 */
export const brightness_100 = "brightness-100";

/**
 * brightness-105
 *
 * CSS properties:
 * - filter: brightness(1.05);
 *
 * @see https://tailwindcss.com/docs/brightness
 *
 * @type utility
 */
export const brightness_105 = "brightness-105";

/**
 * brightness-110
 *
 * CSS properties:
 * - filter: brightness(1.1);
 *
 * @see https://tailwindcss.com/docs/brightness
 *
 * @type utility
 */
export const brightness_110 = "brightness-110";

/**
 * brightness-125
 *
 * CSS properties:
 * - filter: brightness(1.25);
 *
 * @see https://tailwindcss.com/docs/brightness
 *
 * @type utility
 */
export const brightness_125 = "brightness-125";

/**
 * brightness-150
 *
 * CSS properties:
 * - filter: brightness(1.5);
 *
 * @see https://tailwindcss.com/docs/brightness
 *
 * @type utility
 */
export const brightness_150 = "brightness-150";

/**
 * brightness-200
 *
 * CSS properties:
 * - filter: brightness(2);
 *
 * @see https://tailwindcss.com/docs/brightness
 *
 * @type utility
 */
export const brightness_200 = "brightness-200";

/**
 * brightness-[:value]
 *
 * If you need to use a one-off brightness value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/brightness#arbitrary-values
 */
export const brightness_arbitrary = (value: string) => `brightness-[${value}]`;

/**
 * Filters
 *
 * Utilities for applying brightness filters to an element.
 *
 * @see https://tailwindcss.com/docs/brightness
 */
export const brightness = {
  brightness_0,
  brightness_50,
  brightness_75,
  brightness_90,
  brightness_95,
  brightness_100,
  brightness_105,
  brightness_110,
  brightness_125,
  brightness_150,
  brightness_200,
  brightness_arbitrary
};