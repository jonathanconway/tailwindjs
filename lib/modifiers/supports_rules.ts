

/**
 * supports-[…]
 * 
 * Use the supports-[...] modifier to style things based on whether a certain feature is supported in the user’s browser.
 *
 * CSS:
 * - `@supports (…)`
 * 
 * @param arbitrary Custom value for modifier
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#supports-rules
 *
 * @type modifier
 */
export const supports_arbitrary = (arbitrary: string, suffix: string) => `supports-[${arbitrary}]:${suffix}`;
 
