/**
 * content-none
 *
 * CSS properties:
 * - content: none;
 *
 * @see https://tailwindcss.com/docs/content
 *
 * @type utility
 */
export const content_none = "content-none";

/**
 * before:content-[:value]
 *
 * If you need to use a one-off content value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/content#arbitrary-values
 */
export const before:content_arbitrary = (value: string) => `before:content-[${value}]`;

/**
 * Typography
 *
 * Utilities for controlling the content of the before and after pseudo-elements.
 *
 * @see https://tailwindcss.com/docs/content
 */
export const content = {
  content_none,
  before:content_arbitrary
};