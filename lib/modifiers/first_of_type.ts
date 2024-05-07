

/**
 * first-of-type
 * 
 * Style an element if it’s the first child of its type using the first-of-type modifier:
 *
 * CSS:
 * - `&:first-of-type`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#first-of-type
 *
 * @type modifier
 */
export const first_of_type = (suffix: string) => `first-of-type:${suffix}`;


