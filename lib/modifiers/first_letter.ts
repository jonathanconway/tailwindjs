

/**
 * first-letter
 * 
 * Style the first line in a block of content using the first-line modifier, and the first letter using the first-letter modifier:
 *
 * CSS:
 * - `&::first-letter`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#first-line-and-first-letter
 *
 * @type modifier
 */
export const first_letter = (suffix: string) => `first-letter:${suffix}`;

