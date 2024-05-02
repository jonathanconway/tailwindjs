

/**
 * rtl
 * 
 * Use the rtl and ltr modifiers to conditionally add styles in right-to-left and left-to-right modes respectively when building multi-directional layouts:
 *
 * CSS:
 * - `[dir=“rtl”] &`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support
 *
 * @type modifier
 */
export const rtl = (suffix: string) => `rtl:${suffix}`;


/**
 * ltr
 * 
 * Use the rtl and ltr modifiers to conditionally add styles in right-to-left and left-to-right modes respectively when building multi-directional layouts:
 *
 * CSS:
 * - `[dir=“ltr”] &`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support
 *
 * @type modifier
 */
export const ltr = (suffix: string) => `ltr:${suffix}`;
 
