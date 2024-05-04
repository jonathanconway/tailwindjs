/**
 * blur-none
 *
 * CSS:
 * - `filter: blur(0);`
 *
 * @see https://tailwindcss.com/docs/blur
 *
 * @type utility
 */
export const blur_none = "blur-none";

/**
 * blur-sm
 *
 * CSS:
 * - `filter: blur(4px);`
 *
 * @see https://tailwindcss.com/docs/blur
 *
 * @type utility
 */
export const blur_sm = "blur-sm";

/**
 * blur
 *
 * CSS:
 * - `filter: blur(8px);`
 *
 * @see https://tailwindcss.com/docs/blur
 *
 * @type utility
 */
export const blur = "blur";

/**
 * blur-md
 *
 * CSS:
 * - `filter: blur(12px);`
 *
 * @see https://tailwindcss.com/docs/blur
 *
 * @type utility
 */
export const blur_md = "blur-md";

/**
 * blur-lg
 *
 * CSS:
 * - `filter: blur(16px);`
 *
 * @see https://tailwindcss.com/docs/blur
 *
 * @type utility
 */
export const blur_lg = "blur-lg";

/**
 * blur-xl
 *
 * CSS:
 * - `filter: blur(24px);`
 *
 * @see https://tailwindcss.com/docs/blur
 *
 * @type utility
 */
export const blur_xl = "blur-xl";

/**
 * blur-2xl
 *
 * CSS:
 * - `filter: blur(40px);`
 *
 * @see https://tailwindcss.com/docs/blur
 *
 * @type utility
 */
export const blur_2xl = "blur-2xl";

/**
 * blur-3xl
 *
 * CSS:
 * - `filter: blur(64px);`
 *
 * @see https://tailwindcss.com/docs/blur
 *
 * @type utility
 */
export const blur_3xl = "blur-3xl";

/**
 * blur-[{value}]
 *
 * If you need to use a one-off blur value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/blur#arbitrary-values
 *
 * @type utility
 */
export const blur_arbitrary = (value: string) => `blur-[${value}]`;

/**
 * Blur
 *
 * Utilities for applying blur filters to an element.
 *
 * @see https://tailwindcss.com/docs/blur
 */
export const blur_utilities = {
  blur_none,
  blur_sm,
  blur,
  blur_md,
  blur_lg,
  blur_xl,
  blur_2xl,
  blur_3xl,
  blur_arbitrary
};