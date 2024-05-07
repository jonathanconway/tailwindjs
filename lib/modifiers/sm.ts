

/**
 * sm
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
 * CSS:
 * - `\@media (min-width: 640px)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
 *
 * @type modifier
 */
export const sm = (suffix: string) => `sm:${suffix}`;


