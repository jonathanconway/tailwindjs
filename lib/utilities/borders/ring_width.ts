

/**
 * ring-0
 *
 * CSS:
 * - box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  *
  * @see ring_width
  *
  * @type utility
  */
export const ring_0 = "ring-0";


/**
 * ring-1
 *
 * CSS:
 * - box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  *
  * @see ring_width
  *
  * @type utility
  */
export const ring_1 = "ring-1";


/**
 * ring-2
 *
 * CSS:
 * - box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  *
  * @see ring_width
  *
  * @type utility
  */
export const ring_2 = "ring-2";


/**
 * ring
 *
 * CSS:
 * - box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  *
  * @see ring_width
  *
  * @type utility
  */
export const ring = "ring";


/**
 * ring-4
 *
 * CSS:
 * - box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  *
  * @see ring_width
  *
  * @type utility
  */
export const ring_4 = "ring-4";


/**
 * ring-8
 *
 * CSS:
 * - box-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  *
  * @see ring_width
  *
  * @type utility
  */
export const ring_8 = "ring-8";


/**
 * ring-inset
 *
 * CSS:
 * - --tw-ring-inset: inset;
  *
  * @see ring_width
  *
  * @type utility
  */
export const ring_inset = "ring-inset";


/**
 * ring-[…]-[{value}]
 *
 * If you need to use a one-off ring value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/ring-width#arbitrary-values
 *
 * @type utility
 */
export const ring_arbitrary = (value: string) => `ring-[${value}]`;


/**
 * ring-[…]-[{value}]
 *
 * If you need to use a one-off ring value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @param arbitrary Custom value for utility
 * 
 * @see https://tailwindcss.com/docs/ring-width#arbitrary-values
 *
 * @type utility
 */
export const ring_arb = (value: string) => `ring-[${value}]`;


/**
 * Ring Width
 *
 * Utilities for creating outline rings with box-shadows.
 *
 * @see https://tailwindcss.com/docs/ring-width
 */
export const ring_width_utilities = {
  ring_0,
  ring_1,
  ring_2,
  ring,
  ring_4,
  ring_8,
  ring_inset,
  ring_arbitrary
};

