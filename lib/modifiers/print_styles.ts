

/**
 * print
 * 
 * Use the print modifier to conditionally add styles that only apply when the document is being printed:
 *
 * CSS:
 * - `@media print`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#print-styles
 *
 * @type modifier
 */
export const print = (suffix: string) => `print:${suffix}`;
 
