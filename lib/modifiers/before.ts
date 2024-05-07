

/**
 * before
 * 
 * Style the ::before and ::after pseudo-elements using the before and after modifiers:
 *
 * CSS:
 * - `&::before`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after
 *
 * @type modifier
 */
export const before = (suffix: string) => `before:${suffix}`;


