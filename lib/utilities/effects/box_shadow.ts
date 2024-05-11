

/**
 * shadow-sm
 *
 * CSS:
 * - box-shadow: 0 1px 2px 0 rgb(0 0 0 \/ 0.05);
  *
  * @see box_shadow
  *
  * @type utility
  */
export const shadow_sm = "shadow-sm";


/**
 * shadow
 *
 * CSS:
 * - box-shadow: 0 1px 3px 0 rgb(0 0 0 \/ 0.1), 0 1px 2px -1px rgb(0 0 0 \/ 0.1);
  *
  * @see box_shadow
  *
  * @type utility
  */
export const shadow = "shadow";


/**
 * shadow-md
 *
 * CSS:
 * - box-shadow: 0 4px 6px -1px rgb(0 0 0 \/ 0.1), 0 2px 4px -2px rgb(0 0 0 \/ 0.1);
  *
  * @see box_shadow
  *
  * @type utility
  */
export const shadow_md = "shadow-md";


/**
 * shadow-lg
 *
 * CSS:
 * - box-shadow: 0 10px 15px -3px rgb(0 0 0 \/ 0.1), 0 4px 6px -4px rgb(0 0 0 \/ 0.1);
  *
  * @see box_shadow
  *
  * @type utility
  */
export const shadow_lg = "shadow-lg";


/**
 * shadow-xl
 *
 * CSS:
 * - box-shadow: 0 20px 25px -5px rgb(0 0 0 \/ 0.1), 0 8px 10px -6px rgb(0 0 0 \/ 0.1);
  *
  * @see box_shadow
  *
  * @type utility
  */
export const shadow_xl = "shadow-xl";


/**
 * shadow-2xl
 *
 * CSS:
 * - box-shadow: 0 25px 50px -12px rgb(0 0 0 \/ 0.25);
  *
  * @see box_shadow
  *
  * @type utility
  */
export const shadow_2xl = "shadow-2xl";


/**
 * shadow-inner
 *
 * CSS:
 * - box-shadow: inset 0 2px 4px 0 rgb(0 0 0 \/ 0.05);
  *
  * @see box_shadow
  *
  * @type utility
  */
export const shadow_inner = "shadow-inner";


/**
 * shadow-none
 *
 * CSS:
 * - box-shadow: 0 0 #0000;
  *
  * @see box_shadow
  *
  * @type utility
  */
export const shadow_none = "shadow-none";


/**
 * shadow-[{value}]
 *
 * If you need to use a one-off box-shadow value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/box-shadow#arbitrary-values
 *
 * @type utility
 */
export const shadow_arbitrary = (value: string) => `shadow-[${value}]`;


/**
 * shadow-[{value}]
 *
 * If you need to use a one-off box-shadow value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/box-shadow#arbitrary-values
 *
 * @type utility
 */
export const shadow_arb = (value: string) => `shadow-[${value}]`;


/**
 * Box Shadow
 *
 * Utilities for controlling the box shadow of an element.
 *
 * @see https://tailwindcss.com/docs/box-shadow
 */
export const box_shadow_utilities = {
  shadow_sm,
  shadow,
  shadow_md,
  shadow_lg,
  shadow_xl,
  shadow_2xl,
  shadow_inner,
  shadow_none,
  shadow_arbitrary
};

