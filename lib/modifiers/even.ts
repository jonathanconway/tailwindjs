

/**
 * even
 * 
 * Style an element if it’s an evenly numbered child using the even modifier:
 *
 * CSS:
 * - `&:nth-child(even)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#even
 *
 * @type modifier
 */
export const even = (suffix: string) => `even:${suffix}`;
 
