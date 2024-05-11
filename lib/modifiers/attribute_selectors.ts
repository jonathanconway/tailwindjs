

/**
 * aria-checked
 * 
 * Use the aria-* modifier to conditionally style things based on ARIA attributes.
 *
 * CSS:
 * - `&[aria-checked=“true”]`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states
 *
 * @type modifier
 */
export const aria_checked = (suffix: string) => `aria-checked:${suffix}`;


/**
 * aria-disabled
 * 
 * Use the aria-* modifier to conditionally style things based on ARIA attributes.
 *
 * CSS:
 * - `&[aria-disabled=“true”]`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states
 *
 * @type modifier
 */
export const aria_disabled = (suffix: string) => `aria-disabled:${suffix}`;


/**
 * aria-expanded
 * 
 * Use the aria-* modifier to conditionally style things based on ARIA attributes.
 *
 * CSS:
 * - `&[aria-expanded=“true”]`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states
 *
 * @type modifier
 */
export const aria_expanded = (suffix: string) => `aria-expanded:${suffix}`;


/**
 * aria-hidden
 * 
 * Use the aria-* modifier to conditionally style things based on ARIA attributes.
 *
 * CSS:
 * - `&[aria-hidden=“true”]`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states
 *
 * @type modifier
 */
export const aria_hidden = (suffix: string) => `aria-hidden:${suffix}`;


/**
 * aria-pressed
 * 
 * Use the aria-* modifier to conditionally style things based on ARIA attributes.
 *
 * CSS:
 * - `&[aria-pressed=“true”]`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states
 *
 * @type modifier
 */
export const aria_pressed = (suffix: string) => `aria-pressed:${suffix}`;


/**
 * aria-readonly
 * 
 * Use the aria-* modifier to conditionally style things based on ARIA attributes.
 *
 * CSS:
 * - `&[aria-readonly=“true”]`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states
 *
 * @type modifier
 */
export const aria_readonly = (suffix: string) => `aria-readonly:${suffix}`;


/**
 * aria-required
 * 
 * Use the aria-* modifier to conditionally style things based on ARIA attributes.
 *
 * CSS:
 * - `&[aria-required=“true”]`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states
 *
 * @type modifier
 */
export const aria_required = (suffix: string) => `aria-required:${suffix}`;


/**
 * aria-selected
 * 
 * Use the aria-* modifier to conditionally style things based on ARIA attributes.
 *
 * CSS:
 * - `&[aria-selected=“true”]`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states
 *
 * @type modifier
 */
export const aria_selected = (suffix: string) => `aria-selected:${suffix}`;


/**
 * rtl
 * 
 * Use the rtl and ltr modifiers to conditionally add styles in right-to-left and left-to-right modes respectively when building multi-directional layouts.
 *
 * CSS:
 * - `[dir=“rtl”] &`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support
 *
 * @type modifier
 */
export const rtl = (suffix: string) => `rtl:${suffix}`;


/**
 * ltr
 * 
 * Use the rtl and ltr modifiers to conditionally add styles in right-to-left and left-to-right modes respectively when building multi-directional layouts.
 *
 * CSS:
 * - `[dir=“ltr”] &`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support
 *
 * @type modifier
 */
export const ltr = (suffix: string) => `ltr:${suffix}`;


/**
 * open
 * 
 * Use the open modifier to conditionally add styles when a <details> or <dialog> element is in an open state.
 *
 * CSS:
 * - `&[open]`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state
 *
 * @type modifier
 */
export const open = (suffix: string) => `open:${suffix}`;


/**
 * aria-[…]
 * 
 * Use the aria-* modifier to conditionally style things based on ARIA attributes.
 *
  * 
  * @param arbitrary Custom value for modifier
  * @param suffix Utility to modify
  * 
  * @see https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states
  *
  * @type modifier
  */
export const aria_arbitrary = (arbitrary: string, suffix: string) => `aria-[${arbitrary}]:${suffix}`;


/**
 * aria-[…]
 * 
 * Use the aria-* modifier to conditionally style things based on ARIA attributes.
 *
  * 
  * @param arbitrary Custom value for modifier
  * @param suffix Utility to modify
  * 
  * @see https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states
  *
  * @type modifier
  */
export const aria_arb = (arbitrary: string, suffix: string) => `aria-[${arbitrary}]:${suffix}`;


/**
 * data-[…]
 * 
 * Use the data-* modifier to conditionally apply styles based on data attributes.
 *
  * 
  * @param arbitrary Custom value for modifier
  * @param suffix Utility to modify
  * 
  * @see https://tailwindcss.com/docs/hover-focus-and-other-states#data-attributes
  *
  * @type modifier
  */
export const data_arbitrary = (arbitrary: string, suffix: string) => `data-[${arbitrary}]:${suffix}`;


/**
 * data-[…]
 * 
 * Use the data-* modifier to conditionally apply styles based on data attributes.
 *
  * 
  * @param arbitrary Custom value for modifier
  * @param suffix Utility to modify
  * 
  * @see https://tailwindcss.com/docs/hover-focus-and-other-states#data-attributes
  *
  * @type modifier
  */
export const data_arb = (arbitrary: string, suffix: string) => `data-[${arbitrary}]:${suffix}`;


/**
 * Attribute selectors
 * 
 * Attribute selectors, like [dir="rtl"] and [open]
 *
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#attribute-selectors
 */
export const attribute_selectors_modifiers = {
  aria_checked,
  aria_disabled,
  aria_expanded,
  aria_hidden,
  aria_pressed,
  aria_readonly,
  aria_required,
  aria_selected,
  rtl,
  ltr,
  open,
  aria_arbitrary,
  data_arbitrary
};

