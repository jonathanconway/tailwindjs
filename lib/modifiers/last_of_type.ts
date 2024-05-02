

/**
 * last-of-type
 * 
 * Style an element if it’s the last child of its type using the last-of-type modifier:
 *
 * CSS:
 * - `&:last-of-type`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#last-of-type
 *
 * @type modifier
 */
export const last_of_type = (suffix: string) => `last-of-type:${suffix}`;
 
