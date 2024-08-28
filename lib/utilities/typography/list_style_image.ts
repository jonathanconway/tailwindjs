

/**
 * list-image-none
 *
 * CSS:
 * - list-style-image: none;
  *
  * @see list_style_image
  *
  * @type utility
  */
export const list_image_none = "list-image-none";


/**
 * list-image-[…]-[{value}]
 *
 * If you need to use a one-off list-style-image value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/list-style-image#arbitrary-values
 *
 * @type utility
 */
export const list_image_arbitrary = (value: string) => `list-image-[${value}]`;


/**
 * list-image-[…]-[{value}]
 *
 * If you need to use a one-off list-style-image value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/list-style-image#arbitrary-values
 *
 * @type utility
 */
export const list_image_arb = (value: string) => `list-image-[${value}]`;


/**
 * List Style Image
 *
 * Utilities for controlling the marker images for list items.
 *
 * @see https://tailwindcss.com/docs/list-style-image
 */
export const list_style_image_utilities = {
  list_image_none,
  list_image_arbitrary
};

