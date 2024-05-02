

/**
 * backdrop
 * 
 * Style the backdrop of a native <dialog> element using the backdrop modifier:
 *
 * CSS:
 * - `&::backdrop`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#dialog-backdrops
 *
 * @type modifier
 */
export const backdrop = (suffix: string) => `backdrop:${suffix}`;
 
