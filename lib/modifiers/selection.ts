

/**
 * selection
 * 
 * Style the active text selection using the selection modifier:
 *
 * CSS:
 * - `&::selection`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#highlighted-text
 *
 * @type modifier
 */
export const selection = (suffix: string) => `selection:${suffix}`;


