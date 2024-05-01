/**
 * bg-auto
 *
 * CSS properties:
 * - background-size: auto;
 *
 * @see https://tailwindcss.com/docs/background-size
 *
 * @type utility
 */
export const bg_auto = "bg-auto";

/**
 * bg-cover
 *
 * CSS properties:
 * - background-size: cover;
 *
 * @see https://tailwindcss.com/docs/background-size
 *
 * @type utility
 */
export const bg_cover = "bg-cover";

/**
 * bg-contain
 *
 * CSS properties:
 * - background-size: contain;
 *
 * @see https://tailwindcss.com/docs/background-size
 *
 * @type utility
 */
export const bg_contain = "bg-contain";

/**
 * bg-[:value]
 *
 * If you need to use a one-off background-size value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/background-size#arbitrary-values
 */
export const bg_arbitrary = (value: string) => `bg-[${value}]`;

/**
 * Backgrounds
 *
 * Utilities for controlling the background size of an element's background image.
 *
 * @see https://tailwindcss.com/docs/background-size
 */
export const background_size = {
  bg_auto,
  bg_cover,
  bg_contain,
  bg_arbitrary
};