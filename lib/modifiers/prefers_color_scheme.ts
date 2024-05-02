

/**
 * dark
 * 
 * The prefers-color-scheme media query tells you whether the user prefers a light theme or dark theme, and is usually configured at the operating system level.
 *
 * CSS:
 * - `@media (prefers-color-scheme: dark)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-color-scheme
 *
 * @type modifier
 */
export const dark = (suffix: string) => `dark:${suffix}`;
 
