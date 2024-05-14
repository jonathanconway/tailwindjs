

/**
 * bg-none
 *
 * CSS:
 * - background-image: none;
  *
  * @see background_image
  *
  * @type utility
  */
export const bg_none = "bg-none";


/**
 * bg-gradient-to-t
 *
 * CSS:
 * - background-image: linear-gradient(to top, var(--tw-gradient-stops));
  *
  * @see background_image
  *
  * @type utility
  */
export const bg_gradient_to_t = "bg-gradient-to-t";


/**
 * bg-gradient-to-tr
 *
 * CSS:
 * - background-image: linear-gradient(to top right, var(--tw-gradient-stops));
  *
  * @see background_image
  *
  * @type utility
  */
export const bg_gradient_to_tr = "bg-gradient-to-tr";


/**
 * bg-gradient-to-r
 *
 * CSS:
 * - background-image: linear-gradient(to right, var(--tw-gradient-stops));
  *
  * @see background_image
  *
  * @type utility
  */
export const bg_gradient_to_r = "bg-gradient-to-r";


/**
 * bg-gradient-to-br
 *
 * CSS:
 * - background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
  *
  * @see background_image
  *
  * @type utility
  */
export const bg_gradient_to_br = "bg-gradient-to-br";


/**
 * bg-gradient-to-b
 *
 * CSS:
 * - background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
  *
  * @see background_image
  *
  * @type utility
  */
export const bg_gradient_to_b = "bg-gradient-to-b";


/**
 * bg-gradient-to-bl
 *
 * CSS:
 * - background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));
  *
  * @see background_image
  *
  * @type utility
  */
export const bg_gradient_to_bl = "bg-gradient-to-bl";


/**
 * bg-gradient-to-l
 *
 * CSS:
 * - background-image: linear-gradient(to left, var(--tw-gradient-stops));
  *
  * @see background_image
  *
  * @type utility
  */
export const bg_gradient_to_l = "bg-gradient-to-l";


/**
 * bg-gradient-to-tl
 *
 * CSS:
 * - background-image: linear-gradient(to top left, var(--tw-gradient-stops));
  *
  * @see background_image
  *
  * @type utility
  */
export const bg_gradient_to_tl = "bg-gradient-to-tl";


/**
 * bg-gradient-to-[…]-[{value}]
 *
 * If you need to use a one-off background-image value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/background-image#arbitrary-values
 *
 * @type utility
 */
export const bg_gradient_to_arbitrary = (value: string) => `bg-gradient-to-["${value}"]`;


/**
 * bg-gradient-to-[…]-[{value}]
 *
 * If you need to use a one-off background-image value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/background-image#arbitrary-values
 *
 * @type utility
 */
export const bg_gradient_to_arb = (value: string) => `bg-gradient-to-["${value}"]`;


/**
 * Background Image
 *
 * Utilities for controlling an element's background image.
 *
 * @see https://tailwindcss.com/docs/background-image
 */
export const background_image_utilities = {
  bg_none,
  bg_gradient_to_t,
  bg_gradient_to_tr,
  bg_gradient_to_r,
  bg_gradient_to_br,
  bg_gradient_to_b,
  bg_gradient_to_bl,
  bg_gradient_to_l,
  bg_gradient_to_tl,
  bg_gradient_to_arbitrary
};

