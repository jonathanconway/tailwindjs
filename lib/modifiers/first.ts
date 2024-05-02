

/**
 * first
 * 
 * Style an element if it’s the first child using the first modifier:
 *
 * CSS:
 * - `&:first-child`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#first
 *
 * @type modifier
 */
export const first = (suffix: string) => `first:${suffix}`;
 
