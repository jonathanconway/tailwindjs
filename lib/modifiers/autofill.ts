

/**
 * autofill
 * 
 * Style an input when it has been autofilled by the browser using the autofill modifier:
 *
 * CSS:
 * - `&:autofill`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#autofill
 *
 * @type modifier
 */
export const autofill = (suffix: string) => `autofill:${suffix}`;
 
