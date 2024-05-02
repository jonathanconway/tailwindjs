

/**
 * target
 * 
 * Style an element if its ID matches the current URL fragment using the target modifier:
 *
 * CSS:
 * - `&:target`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#target
 *
 * @type modifier
 */
export const target = (suffix: string) => `target:${suffix}`;
 
