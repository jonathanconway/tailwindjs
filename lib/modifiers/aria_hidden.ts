

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


