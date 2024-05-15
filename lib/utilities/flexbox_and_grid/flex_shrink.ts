

/**
 * shrink
 *
 * CSS:
 * - flex-shrink: 1;
  *
  * @see flex_shrink
  *
  * @type utility
  */
export const shrink = "shrink";


/**
 * shrink-0
 *
 * CSS:
 * - flex-shrink: 0;
  *
  * @see flex_shrink
  *
  * @type utility
  */
export const shrink_0 = "shrink-0";


/**
 * shrink-[…]-[{value}]
 *
 * If you need to use a one-off flex-shrink value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/flex-shrink#arbitrary-values
 *
 * @type utility
 */
export const shrink_arbitrary = (value: string) => `shrink-[${value}]`;


/**
 * shrink-[…]-[{value}]
 *
 * If you need to use a one-off flex-shrink value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/flex-shrink#arbitrary-values
 *
 * @type utility
 */
export const shrink_arb = (value: string) => `shrink-[${value}]`;


/**
 * Flex Shrink
 *
 * Utilities for controlling how flex items shrink.
 *
 * @see https://tailwindcss.com/docs/flex-shrink
 */
export const flex_shrink_utilities = {
  shrink,
  shrink_0,
  shrink_arbitrary
};

