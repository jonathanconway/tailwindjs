

/**
 * content-none
 *
 * CSS:
 * - content: none;
  *
  * @see content
  *
  * @type utility
  */
export const content_none = "content-none";


/**
 * content-[…]-[{value}]
 *
 * If you need to use a one-off content value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/content#arbitrary-values
 *
 * @type utility
 */
export const content_arbitrary = (value: string) => `content-["${value}"]`;


/**
 * content-[…]-[{value}]
 *
 * If you need to use a one-off content value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/content#arbitrary-values
 *
 * @type utility
 */
export const content_arb = (value: string) => `content-["${value}"]`;


/**
 * Content
 *
 * Utilities for controlling the content of the before and after pseudo-elements.
 *
 * @see https://tailwindcss.com/docs/content
 */
export const content_utilities = {
  content_none,
  content_arbitrary
};

