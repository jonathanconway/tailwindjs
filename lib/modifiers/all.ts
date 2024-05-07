

/**
 * *
 * 
 * While it’s generally preferable to put utility classes directly on child elements, you can use the * modifier in situations where you need to style direct children that you don’t have control over.
 *
 * CSS:
 * - `& > *`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#styling-direct-children
 *
 * @type modifier
 */
export const all = (suffix: string) => `*:${suffix}`;


