

/**
 * open
 * 
 * Use the open modifier to conditionally add styles when a <details> or <dialog> element is in an open state:
 *
 * CSS:
 * - `&[open]`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state
 *
 * @type modifier
 */
export const open = (suffix: string) => `open:${suffix}`;
 
