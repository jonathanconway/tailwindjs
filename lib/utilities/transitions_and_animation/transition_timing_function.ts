/**
 * ease-linear
 *
 * CSS:
 * - `transition-timing-function: linear;`
 *
 * @see https://tailwindcss.com/docs/transition-timing-function
 *
 * @type utility
 */
export const ease_linear = "ease-linear";

/**
 * ease-in
 *
 * CSS:
 * - `transition-timing-function: cubic-bezier(0.4, 0, 1, 1);`
 *
 * @see https://tailwindcss.com/docs/transition-timing-function
 *
 * @type utility
 */
export const ease_in = "ease-in";

/**
 * ease-out
 *
 * CSS:
 * - `transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`
 *
 * @see https://tailwindcss.com/docs/transition-timing-function
 *
 * @type utility
 */
export const ease_out = "ease-out";

/**
 * ease-in-out
 *
 * CSS:
 * - `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`
 *
 * @see https://tailwindcss.com/docs/transition-timing-function
 *
 * @type utility
 */
export const ease_in_out = "ease-in-out";

/**
 * ease-[{value}]
 *
 * If you need to use a one-off transition-timing-function value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/transition-timing-function#arbitrary-values
 *
 * @type utility
 */
export const ease_arbitrary = (value: string) => `ease-[${value}]`;


/**
 * ease-in-[{value}]
 *
 * If you need to use a one-off transition-timing-function value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/transition-timing-function#arbitrary-values
 *
 * @type utility
 */
export const ease_in_arbitrary = (value: string) => `ease-in-[${value}]`;

/**
 * Transition Timing Function
 *
 * Utilities for controlling the easing of CSS transitions.
 *
 * @see https://tailwindcss.com/docs/transition-timing-function
 */
export const transition_timing_function_utilities = {
  ease_linear,
  ease_in,
  ease_out,
  ease_in_out,
  ease_arbitrary,
  ease_in_arbitrary
};