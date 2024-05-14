

/**
 * duration-0
 *
 * CSS:
 * - transition-duration: 0s;
  *
  * @see transition_duration
  *
  * @type utility
  */
export const duration_0 = "duration-0";


/**
 * duration-75
 *
 * CSS:
 * - transition-duration: 75ms;
  *
  * @see transition_duration
  *
  * @type utility
  */
export const duration_75 = "duration-75";


/**
 * duration-100
 *
 * CSS:
 * - transition-duration: 100ms;
  *
  * @see transition_duration
  *
  * @type utility
  */
export const duration_100 = "duration-100";


/**
 * duration-150
 *
 * CSS:
 * - transition-duration: 150ms;
  *
  * @see transition_duration
  *
  * @type utility
  */
export const duration_150 = "duration-150";


/**
 * duration-200
 *
 * CSS:
 * - transition-duration: 200ms;
  *
  * @see transition_duration
  *
  * @type utility
  */
export const duration_200 = "duration-200";


/**
 * duration-300
 *
 * CSS:
 * - transition-duration: 300ms;
  *
  * @see transition_duration
  *
  * @type utility
  */
export const duration_300 = "duration-300";


/**
 * duration-500
 *
 * CSS:
 * - transition-duration: 500ms;
  *
  * @see transition_duration
  *
  * @type utility
  */
export const duration_500 = "duration-500";


/**
 * duration-700
 *
 * CSS:
 * - transition-duration: 700ms;
  *
  * @see transition_duration
  *
  * @type utility
  */
export const duration_700 = "duration-700";


/**
 * duration-1000
 *
 * CSS:
 * - transition-duration: 1000ms;
  *
  * @see transition_duration
  *
  * @type utility
  */
export const duration_1000 = "duration-1000";


/**
 * duration-[…]-[{value}]
 *
 * If you need to use a one-off transition-duration value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/transition-duration#arbitrary-values
 *
 * @type utility
 */
export const duration_arbitrary = (value: string) => `duration-["${value}"]`;


/**
 * duration-[…]-[{value}]
 *
 * If you need to use a one-off transition-duration value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/transition-duration#arbitrary-values
 *
 * @type utility
 */
export const duration_arb = (value: string) => `duration-["${value}"]`;


/**
 * Transition Duration
 *
 * Utilities for controlling the duration of CSS transitions.
 *
 * @see https://tailwindcss.com/docs/transition-duration
 */
export const transition_duration_utilities = {
  duration_0,
  duration_75,
  duration_100,
  duration_150,
  duration_200,
  duration_300,
  duration_500,
  duration_700,
  duration_1000,
  duration_arbitrary
};

