/**
 * aspect-auto
 *
 * CSS:
 * - `aspect-ratio: auto;`
 *
 * @see https://tailwindcss.com/docs/aspect-ratio
 *
 * @type utility
 */
export const aspect_auto = "aspect-auto";

/**
 * aspect-square
 *
 * CSS:
 * - `aspect-ratio: 1 \/ 1;`
 *
 * @see https://tailwindcss.com/docs/aspect-ratio
 *
 * @type utility
 */
export const aspect_square = "aspect-square";

/**
 * aspect-video
 *
 * CSS:
 * - `aspect-ratio: 16 \/ 9;`
 *
 * @see https://tailwindcss.com/docs/aspect-ratio
 *
 * @type utility
 */
export const aspect_video = "aspect-video";

/**
 * aspect-[{value}]
 *
 * If you need to use a one-off aspect-ratio value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/aspect-ratio#arbitrary-values
 *
 * @type utility
 */
export const aspect_arbitrary = (value: string) => `aspect-[${value}]`;

/**
 * Aspect Ratio
 *
 * Utilities for controlling the aspect ratio of an element.
 *
 * @see https://tailwindcss.com/docs/aspect-ratio
 */
export const aspect_ratio_utilities = {
  aspect_auto,
  aspect_square,
  aspect_video,
  aspect_arbitrary
};