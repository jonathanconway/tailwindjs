

/**
 * enabled
 * 
 * Style an input when it’s enabled using the enabled modifier, most helpful when you only want to apply another style when an element is not disabled:
 *
 * CSS:
 * - `&:enabled`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#enabled
 *
 * @type modifier
 */
export const enabled = (suffix: string) => `enabled:${suffix}`;


