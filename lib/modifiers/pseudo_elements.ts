

/**
 * before
 * 
 * Style the ::before and ::after pseudo-elements using the before and after modifiers.
 *
 * CSS:
 * - `&::before`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after
 *
 * @type modifier
 */
export const before = (suffix: string) => `before:${suffix}`;


/**
 * after
 * 
 * Style the ::before and ::after pseudo-elements using the before and after modifiers.
 *
 * CSS:
 * - `&::after`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after
 *
 * @type modifier
 */
export const after = (suffix: string) => `after:${suffix}`;


/**
 * first-letter
 * 
 * Style the first line in a block of content using the first-line modifier, and the first letter using the first-letter modifier.
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


/**
 * first-line
 * 
 * Style the first line in a block of content using the first-line modifier, and the first letter using the first-letter modifier.
 *
 * CSS:
 * - `&::first-line`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#first-line-and-first-letter
 *
 * @type modifier
 */
export const first_line = (suffix: string) => `first-line:${suffix}`;


/**
 * marker
 * 
 * Style the active text selection using the selection modifier.
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


/**
 * selection
 * 
 * Style the active text selection using the selection modifier.
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


/**
 * file
 * 
 * Style the button in file inputs using the file modifier.
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


/**
 * backdrop
 * 
 * Style the backdrop of a native <dialog> element using the backdrop modifier.
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


/**
 * placeholder
 * 
 * Style the placeholder text of any input or textarea using the placeholder modifier.
 *
 * CSS:
 * - `&::placeholder`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#placeholder-text
 *
 * @type modifier
 */
export const placeholder = (suffix: string) => `placeholder:${suffix}`;



/**
 * Pseudo elements
 * 
 * Pseudo-elements, like ::before, ::after, ::placeholder, and ::selection
 *
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-elements
 */
export const pseudo_elements_modifiers = {
  before,
  after,
  first_letter,
  first_line,
  marker,
  selection,
  file,
  backdrop,
  placeholder
};

