/**
 * truncate
 *
 * CSS:
 * - `overflow: hidden;`
 * - `text-overflow: ellipsis;`
 * - `white-space: nowrap;`
 *
 * @see https://tailwindcss.com/docs/text-overflow
 *
 * @type utility
 */
export const truncate = "truncate";

/**
 * text-ellipsis
 *
 * CSS:
 * - `text-overflow: ellipsis;`
 *
 * @see https://tailwindcss.com/docs/text-overflow
 *
 * @type utility
 */
export const text_ellipsis = "text-ellipsis";

/**
 * text-clip
 *
 * CSS:
 * - `text-overflow: clip;`
 *
 * @see https://tailwindcss.com/docs/text-overflow
 *
 * @type utility
 */
export const text_clip = "text-clip";

/**
 * Text Overflow
 *
 * Utilities for controlling text overflow in an element.
 *
 * @see https://tailwindcss.com/docs/text-overflow
 */
export const text_overflow_utilities = {
  truncate,
  text_ellipsis,
  text_clip
};