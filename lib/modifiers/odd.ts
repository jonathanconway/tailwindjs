

/**
 * odd
 * 
 * Style an element if it’s an oddly numbered child using the odd modifier:
 *
 * CSS:
 * - `&:nth-child(odd)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#odd
 *
 * @type modifier
 */
export const odd = (suffix: string) => `odd:${suffix}`;
 
