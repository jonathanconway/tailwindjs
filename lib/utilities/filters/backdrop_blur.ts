

/**
 * backdrop-blur-none
 *
 * CSS:
 * - backdrop-filter: blur(0);
  *
  * @see backdrop_blur
  *
  * @type utility
  */
export const backdrop_blur_none = "backdrop-blur-none";


/**
 * backdrop-blur-sm
 *
 * CSS:
 * - backdrop-filter: blur(4px);
  *
  * @see backdrop_blur
  *
  * @type utility
  */
export const backdrop_blur_sm = "backdrop-blur-sm";


/**
 * backdrop-blur
 *
 * CSS:
 * - backdrop-filter: blur(8px);
  *
  * @see backdrop_blur
  *
  * @type utility
  */
export const backdrop_blur = "backdrop-blur";


/**
 * backdrop-blur-md
 *
 * CSS:
 * - backdrop-filter: blur(12px);
  *
  * @see backdrop_blur
  *
  * @type utility
  */
export const backdrop_blur_md = "backdrop-blur-md";


/**
 * backdrop-blur-lg
 *
 * CSS:
 * - backdrop-filter: blur(16px);
  *
  * @see backdrop_blur
  *
  * @type utility
  */
export const backdrop_blur_lg = "backdrop-blur-lg";


/**
 * backdrop-blur-xl
 *
 * CSS:
 * - backdrop-filter: blur(24px);
  *
  * @see backdrop_blur
  *
  * @type utility
  */
export const backdrop_blur_xl = "backdrop-blur-xl";


/**
 * backdrop-blur-2xl
 *
 * CSS:
 * - backdrop-filter: blur(40px);
  *
  * @see backdrop_blur
  *
  * @type utility
  */
export const backdrop_blur_2xl = "backdrop-blur-2xl";


/**
 * backdrop-blur-3xl
 *
 * CSS:
 * - backdrop-filter: blur(64px);
  *
  * @see backdrop_blur
  *
  * @type utility
  */
export const backdrop_blur_3xl = "backdrop-blur-3xl";


/**
 * backdrop-blur-[{value}]
 *
 * If you need to use a one-off backdrop-blur value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-blur#arbitrary-values
 *
 * @type utility
 */
export const backdrop_blur_arbitrary = (value: string) => `backdrop-blur-[${value}]`;


/**
 * backdrop-blur-[{value}]
 *
 * If you need to use a one-off backdrop-blur value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-blur#arbitrary-values
 *
 * @type utility
 */
export const backdrop_blur_arb = (value: string) => `backdrop-blur-[${value}]`;


/**
 * backdrop-[{value}]
 *
 * If you need to use a one-off backdrop-blur value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-blur#arbitrary-values
 *
 * @type utility
 */
export const backdrop_arbitrary = (value: string) => `backdrop-[${value}]`;


/**
 * backdrop-[{value}]
 *
 * If you need to use a one-off backdrop-blur value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/backdrop-blur#arbitrary-values
 *
 * @type utility
 */
export const backdrop_arb = (value: string) => `backdrop-[${value}]`;


/**
 * Backdrop Blur
 *
 * Utilities for applying backdrop blur filters to an element.
 *
 * @see https://tailwindcss.com/docs/backdrop-blur
 */
export const backdrop_blur_utilities = {
  backdrop_blur_none,
  backdrop_blur_sm,
  backdrop_blur,
  backdrop_blur_md,
  backdrop_blur_lg,
  backdrop_blur_xl,
  backdrop_blur_2xl,
  backdrop_blur_3xl,
  backdrop_blur_arbitrary,
  backdrop_arbitrary
};

