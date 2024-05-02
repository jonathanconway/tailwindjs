

/**
 * required
 * 
 * Style an input when it’s required using the required modifier:
 *
 * CSS:
 * - `&:required`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#required
 *
 * @type modifier
 */
export const required = (suffix: string) => `required:${suffix}`;
 
