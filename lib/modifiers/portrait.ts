

/**
 * portrait
 * 
 * Use the portrait and landscape modifiers to conditionally add styles when the viewport is in a specific orientation:
 *
 * CSS:
 * - `\@media (orientation: portrait)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#viewport-orientation
 *
 * @type modifier
 */
export const portrait = (suffix: string) => `portrait:${suffix}`;


