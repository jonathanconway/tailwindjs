

/**
 * has
 * 
 * Use the has-* modifier to style an element based on the state or content of its descendants.
 *
 * CSS:
 * - `&:has`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-descendants
 *
 * @type modifier
 */
export const has = (suffix: string) => `has:${suffix}`;
 
