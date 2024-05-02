

/**
 * file
 * 
 * Style the button in file inputs using the file modifier:
 *
 * CSS:
 * - `&::file-selector-button`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#file-input-buttons
 *
 * @type modifier
 */
export const file = (suffix: string) => `file:${suffix}`;
 
