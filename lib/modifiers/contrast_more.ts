

/**
 * contrast-more
 * 
 * The prefers-contrast media query tells you if the user has requested more or less contrast.
 *
 * CSS:
 * - `\@media (prefers-contrast: more)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-contrast
 *
 * @type modifier
 */
export const contrast_more = (suffix: string) => `contrast-more:${suffix}`;


