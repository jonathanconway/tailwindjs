

/**
 * backdrop-brightness-0
 *
 * CSS:
 * - backdrop-filter: brightness(0);
  *
  * @see backdrop_brightness
  *
  * @type utility
  */
export const backdrop_brightness_0 = "backdrop-brightness-0";


/**
 * backdrop-brightness-50
 *
 * CSS:
 * - backdrop-filter: brightness(.5);
  *
  * @see backdrop_brightness
  *
  * @type utility
  */
export const backdrop_brightness_50 = "backdrop-brightness-50";


/**
 * backdrop-brightness-75
 *
 * CSS:
 * - backdrop-filter: brightness(.75);
  *
  * @see backdrop_brightness
  *
  * @type utility
  */
export const backdrop_brightness_75 = "backdrop-brightness-75";


/**
 * backdrop-brightness-90
 *
 * CSS:
 * - backdrop-filter: brightness(.9);
  *
  * @see backdrop_brightness
  *
  * @type utility
  */
export const backdrop_brightness_90 = "backdrop-brightness-90";


/**
 * backdrop-brightness-95
 *
 * CSS:
 * - backdrop-filter: brightness(.95);
  *
  * @see backdrop_brightness
  *
  * @type utility
  */
export const backdrop_brightness_95 = "backdrop-brightness-95";


/**
 * backdrop-brightness-100
 *
 * CSS:
 * - backdrop-filter: brightness(1);
  *
  * @see backdrop_brightness
  *
  * @type utility
  */
export const backdrop_brightness_100 = "backdrop-brightness-100";


/**
 * backdrop-brightness-105
 *
 * CSS:
 * - backdrop-filter: brightness(1.05);
  *
  * @see backdrop_brightness
  *
  * @type utility
  */
export const backdrop_brightness_105 = "backdrop-brightness-105";


/**
 * backdrop-brightness-110
 *
 * CSS:
 * - backdrop-filter: brightness(1.1);
  *
  * @see backdrop_brightness
  *
  * @type utility
  */
export const backdrop_brightness_110 = "backdrop-brightness-110";


/**
 * backdrop-brightness-125
 *
 * CSS:
 * - backdrop-filter: brightness(1.25);
  *
  * @see backdrop_brightness
  *
  * @type utility
  */
export const backdrop_brightness_125 = "backdrop-brightness-125";


/**
 * backdrop-brightness-150
 *
 * CSS:
 * - backdrop-filter: brightness(1.5);
  *
  * @see backdrop_brightness
  *
  * @type utility
  */
export const backdrop_brightness_150 = "backdrop-brightness-150";


/**
 * backdrop-brightness-200
 *
 * CSS:
 * - backdrop-filter: brightness(2);
  *
  * @see backdrop_brightness
  *
  * @type utility
  */
export const backdrop_brightness_200 = "backdrop-brightness-200";


/**
 * backdrop-brightness-[…]-[{value}]
 *
 * If you need to use a one-off backdrop-brightness value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-brightness#arbitrary-values
 *
 * @type utility
 */
export const backdrop_brightness_arbitrary = (value: string) => `backdrop-brightness-["${value}"]`;


/**
 * backdrop-brightness-[…]-[{value}]
 *
 * If you need to use a one-off backdrop-brightness value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-brightness#arbitrary-values
 *
 * @type utility
 */
export const backdrop_brightness_arb = (value: string) => `backdrop-brightness-["${value}"]`;


/**
 * Backdrop Brightness
 *
 * Utilities for applying backdrop brightness filters to an element.
 *
 * @see https://tailwindcss.com/docs/backdrop-brightness
 */
export const backdrop_brightness_utilities = {
  backdrop_brightness_0,
  backdrop_brightness_50,
  backdrop_brightness_75,
  backdrop_brightness_90,
  backdrop_brightness_95,
  backdrop_brightness_100,
  backdrop_brightness_105,
  backdrop_brightness_110,
  backdrop_brightness_125,
  backdrop_brightness_150,
  backdrop_brightness_200,
  backdrop_brightness_arbitrary
};

