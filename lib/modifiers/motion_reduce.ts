

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


