/**
 * delay-0
 *
 * CSS properties:
 * - transition-delay: 0s;
 *
 * @see https://tailwindcss.com/docs/transition-delay
 *
 * @type utility
 */
export const delay_0 = "delay-0";

/**
 * delay-75
 *
 * CSS properties:
 * - transition-delay: 75ms;
 *
 * @see https://tailwindcss.com/docs/transition-delay
 *
 * @type utility
 */
export const delay_75 = "delay-75";

/**
 * delay-100
 *
 * CSS properties:
 * - transition-delay: 100ms;
 *
 * @see https://tailwindcss.com/docs/transition-delay
 *
 * @type utility
 */
export const delay_100 = "delay-100";

/**
 * delay-150
 *
 * CSS properties:
 * - transition-delay: 150ms;
 *
 * @see https://tailwindcss.com/docs/transition-delay
 *
 * @type utility
 */
export const delay_150 = "delay-150";

/**
 * delay-200
 *
 * CSS properties:
 * - transition-delay: 200ms;
 *
 * @see https://tailwindcss.com/docs/transition-delay
 *
 * @type utility
 */
export const delay_200 = "delay-200";

/**
 * delay-300
 *
 * CSS properties:
 * - transition-delay: 300ms;
 *
 * @see https://tailwindcss.com/docs/transition-delay
 *
 * @type utility
 */
export const delay_300 = "delay-300";

/**
 * delay-500
 *
 * CSS properties:
 * - transition-delay: 500ms;
 *
 * @see https://tailwindcss.com/docs/transition-delay
 *
 * @type utility
 */
export const delay_500 = "delay-500";

/**
 * delay-700
 *
 * CSS properties:
 * - transition-delay: 700ms;
 *
 * @see https://tailwindcss.com/docs/transition-delay
 *
 * @type utility
 */
export const delay_700 = "delay-700";

/**
 * delay-1000
 *
 * CSS properties:
 * - transition-delay: 1000ms;
 *
 * @see https://tailwindcss.com/docs/transition-delay
 *
 * @type utility
 */
export const delay_1000 = "delay-1000";

/**
 * delay-[:value]
 *
 * If you need to use a one-off transition-delay value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/transition-delay#arbitrary-values
 */
export const delay_arbitrary = (value: string) => `delay-[${value}]`;

/**
 * Transitions & Animation
 *
 * Utilities for controlling the delay of CSS transitions.
 *
 * @see https://tailwindcss.com/docs/transition-delay
 */
export const transition_delay = {
  delay_0,
  delay_75,
  delay_100,
  delay_150,
  delay_200,
  delay_300,
  delay_500,
  delay_700,
  delay_1000,
  delay_arbitrary
};