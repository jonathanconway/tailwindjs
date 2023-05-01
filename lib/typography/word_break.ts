/**
 * break-normal
 * 
 * CSS properties:
 * - overflow-wrap: normal;, * - word-break: normal;
 * 
 * @see https://tailwindcss.com/docs/word-break
 * 
 * @type utility
 */
export const break_normal = "break-normal";

/**
 * break-words
 * 
 * CSS properties:
 * - overflow-wrap: break-word;
 * 
 * @see https://tailwindcss.com/docs/word-break
 * 
 * @type utility
 */
export const break_words = "break-words";

/**
 * break-all
 * 
 * CSS properties:
 * - word-break: break-all;
 * 
 * @see https://tailwindcss.com/docs/word-break
 * 
 * @type utility
 */
export const break_all = "break-all";

/**
 * break-keep
 * 
 * CSS properties:
 * - word-break: keep-all;
 * 
 * @see https://tailwindcss.com/docs/word-break
 * 
 * @type utility
 */
export const break_keep = "break-keep";

/**
 * Typography
 * 
 * Utilities for controlling word breaks in an element.
 * 
 * @see https://tailwindcss.com/docs/word-break
 */
export const word_break = {
  break_normal,
  break_words,
  break_all,
  break_keep
};