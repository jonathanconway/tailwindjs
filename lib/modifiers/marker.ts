

/**
 * marker
 * 
 * Style the active text selection using the selection modifier:
 *
 * CSS:
 * - `&::marker`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#highlighted-text
 *
 * @type modifier
 */
export const marker = (suffix: string) => `marker:${suffix}`;


