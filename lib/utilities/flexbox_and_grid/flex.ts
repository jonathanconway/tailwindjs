

/**
 * flex-1
 *
 * CSS:
 * - flex: 1 1 0%;
  *
  * @see flex
  *
  * @type utility
  */
export const flex_1 = "flex-1";


/**
 * flex-auto
 *
 * CSS:
 * - flex: 1 1 auto;
  *
  * @see flex
  *
  * @type utility
  */
export const flex_auto = "flex-auto";


/**
 * flex-initial
 *
 * CSS:
 * - flex: 0 1 auto;
  *
  * @see flex
  *
  * @type utility
  */
export const flex_initial = "flex-initial";


/**
 * flex-none
 *
 * CSS:
 * - flex: none;
  *
  * @see flex
  *
  * @type utility
  */
export const flex_none = "flex-none";


/**
 * flex-[…]-[{value}]
 *
 * If you need to use a one-off flex value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/flex#arbitrary-values
 *
 * @type utility
 */
export const flex_arbitrary = (value: string) => `flex-[${value}]`;


/**
 * flex-[…]-[{value}]
 *
 * If you need to use a one-off flex value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/flex#arbitrary-values
 *
 * @type utility
 */
export const flex_arb = (value: string) => `flex-[${value}]`;


/**
 * Flex
 *
 * Utilities for controlling how flex items both grow and shrink.
 *
 * @see https://tailwindcss.com/docs/flex
 */
export const flex_utilities = {
  flex_1,
  flex_auto,
  flex_initial,
  flex_none,
  flex_arbitrary
};

