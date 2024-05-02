

/**
 * data-[…]
 * 
 * Use the data-* modifier to conditionally apply styles based on data attributes.
 *
 * CSS:
 * - `&[data-…]`
 * 
 * @param arbitrary Custom value for modifier
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#data-attributes
 *
 * @type modifier
 */
export const data_arbitrary = (arbitrary: string, suffix: string) => `data-[${arbitrary}]:${suffix}`;
 
