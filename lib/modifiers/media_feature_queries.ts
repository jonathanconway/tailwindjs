

/**
 * sm
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
 * CSS:
 * - `\@media (min-width: 640px)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
 *
 * @type modifier
 */
export const sm = (suffix: string) => `sm:${suffix}`;


/**
 * md
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
 * CSS:
 * - `\@media (min-width: 768px)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
 *
 * @type modifier
 */
export const md = (suffix: string) => `md:${suffix}`;


/**
 * lg
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
 * CSS:
 * - `\@media (min-width: 1024px)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
 *
 * @type modifier
 */
export const lg = (suffix: string) => `lg:${suffix}`;


/**
 * xl
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
 * CSS:
 * - `\@media (min-width: 1280px)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
 *
 * @type modifier
 */
export const xl = (suffix: string) => `xl:${suffix}`;


/**
 * 2xl
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
 * CSS:
 * - `\@media (min-width: 1536px)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
 *
 * @type modifier
 */
export const _2xl = (suffix: string) => `2xl:${suffix}`;


/**
 * max-sm
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
 * CSS:
 * - `\@media not all and (min-width: 640px)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
 *
 * @type modifier
 */
export const max_sm = (suffix: string) => `max-sm:${suffix}`;


/**
 * max-md
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
 * CSS:
 * - `\@media not all and (min-width: 768px)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
 *
 * @type modifier
 */
export const max_md = (suffix: string) => `max-md:${suffix}`;


/**
 * max-lg
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
 * CSS:
 * - `\@media not all and (min-width: 1024px)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
 *
 * @type modifier
 */
export const max_lg = (suffix: string) => `max-lg:${suffix}`;


/**
 * max-xl
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
 * CSS:
 * - `\@media not all and (min-width: 1280px)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
 *
 * @type modifier
 */
export const max_xl = (suffix: string) => `max-xl:${suffix}`;


/**
 * max-2xl
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
 * CSS:
 * - `\@media not all and (min-width: 1536px)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
 *
 * @type modifier
 */
export const max_2xl = (suffix: string) => `max-2xl:${suffix}`;


/**
 * dark
 * 
 * The prefers-color-scheme media query tells you whether the user prefers a light theme or dark theme, and is usually configured at the operating system level.
 *
 * CSS:
 * - `\@media (prefers-color-scheme: dark)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-color-scheme
 *
 * @type modifier
 */
export const dark = (suffix: string) => `dark:${suffix}`;


/**
 * portrait
 * 
 * Use the portrait and landscape modifiers to conditionally add styles when the viewport is in a specific orientation.
 *
 * CSS:
 * - `\@media (orientation: portrait)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#viewport-orientation
 *
 * @type modifier
 */
export const portrait = (suffix: string) => `portrait:${suffix}`;


/**
 * landscape
 * 
 * Use the portrait and landscape modifiers to conditionally add styles when the viewport is in a specific orientation.
 *
 * CSS:
 * - `\@media (orientation: landscape)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#viewport-orientation
 *
 * @type modifier
 */
export const landscape = (suffix: string) => `landscape:${suffix}`;


/**
 * motion-safe
 * 
 * The prefers-reduced-motion media query tells you if the user has requested that you minimize non-essential motion.
 *
 * CSS:
 * - `\@media (prefers-reduced-motion: no-preference)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-reduced-motion
 *
 * @type modifier
 */
export const motion_safe = (suffix: string) => `motion-safe:${suffix}`;


/**
 * motion-reduce
 * 
 * The prefers-reduced-motion media query tells you if the user has requested that you minimize non-essential motion.
 *
 * CSS:
 * - `\@media (prefers-reduced-motion: reduce)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-reduced-motion
 *
 * @type modifier
 */
export const motion_reduce = (suffix: string) => `motion-reduce:${suffix}`;


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


/**
 * contrast-less
 * 
 * The prefers-contrast media query tells you if the user has requested more or less contrast.
 *
 * CSS:
 * - `\@media (prefers-contrast: less)`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-contrast
 *
 * @type modifier
 */
export const contrast_less = (suffix: string) => `contrast-less:${suffix}`;


/**
 * print
 * 
 * Use the print modifier to conditionally add styles that only apply when the document is being printed.
 *
 * CSS:
 * - `\@media print`
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#print-styles
 *
 * @type modifier
 */
export const print = (suffix: string) => `print:${suffix}`;


/**
 * min-[…]
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
  * 
  * @param arbitrary Custom value for modifier
  * @param suffix Utility to modify
  * 
  * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
  *
  * @type modifier
  */
export const min_arbitrary = (arbitrary: string, suffix: string) => `min-[${arbitrary}]:${suffix}`;


/**
 * min-[…]
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
  * 
  * @param arbitrary Custom value for modifier
  * @param suffix Utility to modify
  * 
  * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
  *
  * @type modifier
  */
export const min_arb = (arbitrary: string, suffix: string) => `min-[${arbitrary}]:${suffix}`;


/**
 * max-[…]
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
  * 
  * @param arbitrary Custom value for modifier
  * @param suffix Utility to modify
  * 
  * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
  *
  * @type modifier
  */
export const max_arbitrary = (arbitrary: string, suffix: string) => `max-[${arbitrary}]:${suffix}`;


/**
 * max-[…]
 * 
 * To style an element at a specific breakpoint, use responsive modifiers like md and lg.
 *
  * 
  * @param arbitrary Custom value for modifier
  * @param suffix Utility to modify
  * 
  * @see https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints
  *
  * @type modifier
  */
export const max_arb = (arbitrary: string, suffix: string) => `max-[${arbitrary}]:${suffix}`;


/**
 * supports-[…]
 * 
 * Use the supports-[...] modifier to style things based on whether a certain feature is supported in the user’s browser.
 *
  * 
  * @param arbitrary Custom value for modifier
  * @param suffix Utility to modify
  * 
  * @see https://tailwindcss.com/docs/hover-focus-and-other-states#supports-rules
  *
  * @type modifier
  */
export const supports_arbitrary = (arbitrary: string, suffix: string) => `supports-[${arbitrary}]:${suffix}`;


/**
 * supports-[…]
 * 
 * Use the supports-[...] modifier to style things based on whether a certain feature is supported in the user’s browser.
 *
  * 
  * @param arbitrary Custom value for modifier
  * @param suffix Utility to modify
  * 
  * @see https://tailwindcss.com/docs/hover-focus-and-other-states#supports-rules
  *
  * @type modifier
  */
export const supports_arb = (arbitrary: string, suffix: string) => `supports-[${arbitrary}]:${suffix}`;


/**
 * Media feature queries
 * 
 * Media and feature queries, like responsive breakpoints, dark mode, and prefers-reduced-motion
 *
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#media-and-feature-queries
 */
export const media_feature_queries_modifiers = {
  sm,
  md,
  lg,
  xl,
  _2xl,
  max_sm,
  max_md,
  max_lg,
  max_xl,
  max_2xl,
  dark,
  portrait,
  landscape,
  motion_safe,
  motion_reduce,
  contrast_more,
  contrast_less,
  print,
  min_arbitrary,
  max_arbitrary,
  supports_arbitrary
};

