

/**
 * max-md
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
 * CSS:
 * - `\@media not all and (min-width: 768px)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
 *
 * @type modifier
 */
export const max_md = (suffix: string) => `max-md:${suffix}`;


