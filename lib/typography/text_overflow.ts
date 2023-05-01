/**
 * truncate
 * 
 * CSS properties:
 * - overflow: hidden;, * - text-overflow: ellipsis;, * - white-space: nowrap;
 * 
 * @see https://tailwindcss.com/docs/text-overflow
 * 
 * @type utility
 */
export const truncate = "truncate";

/**
 * text-ellipsis
 * 
 * CSS properties:
 * - text-overflow: ellipsis;
 * 
 * @see https://tailwindcss.com/docs/text-overflow
 * 
 * @type utility
 */
export const text_ellipsis = "text-ellipsis";

/**
 * text-clip
 * 
 * CSS properties:
 * - text-overflow: clip;
 * 
 * @see https://tailwindcss.com/docs/text-overflow
 * 
 * @type utility
 */
export const text_clip = "text-clip";

/**
 * Typography
 * 
 * Utilities for controlling text overflow in an element.
 * 
 * @see https://tailwindcss.com/docs/text-overflow
 */
export const text_overflow = {
  truncate,
  text_ellipsis,
  text_clip
};