

/**
 * animate-none
 *
 * CSS:
 * - animation: none;
  *
  * @see animation
  *
  * @type utility
  */
export const animate_none = "animate-none";


/**
 * animate-spin
 *
 * CSS:
 * - animation: spin 1s linear infinite;
 * - \@keyframes spin {
 * - from {
 * - transform: rotate(0deg);
 * - }
 * - to {
 * - transform: rotate(360deg);
 * - }
 * - }
  *
  * @see animation
  *
  * @type utility
  */
export const animate_spin = "animate-spin";


/**
 * animate-ping
 *
 * CSS:
 * - animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
 * - \@keyframes ping {
 * - 75%, 100% {
 * - transform: scale(2);
 * - opacity: 0;
 * - }
 * - }
  *
  * @see animation
  *
  * @type utility
  */
export const animate_ping = "animate-ping";


/**
 * animate-pulse
 *
 * CSS:
 * - animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
 * - \@keyframes pulse {
 * - 0%, 100% {
 * - opacity: 1;
 * - }
 * - 50% {
 * - opacity: .5;
 * - }
 * - }
  *
  * @see animation
  *
  * @type utility
  */
export const animate_pulse = "animate-pulse";


/**
 * animate-bounce
 *
 * CSS:
 * - animation: bounce 1s infinite;
 * - \@keyframes bounce {
 * - 0%, 100% {
 * - transform: translateY(-25%);
 * - animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
 * - }
 * - 50% {
 * - transform: translateY(0);
 * - animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
 * - }
 * - }
  *
  * @see animation
  *
  * @type utility
  */
export const animate_bounce = "animate-bounce";


/**
 * animate-[…]-[{value}]
 *
 * If you need to use a one-off animation value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/animation#arbitrary-values
 *
 * @type utility
 */
export const animate_arbitrary = (value: string) => `animate-[${value}]`;


/**
 * animate-[…]-[{value}]
 *
 * If you need to use a one-off animation value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/animation#arbitrary-values
 *
 * @type utility
 */
export const animate_arb = (value: string) => `animate-[${value}]`;


/**
 * Animation
 *
 * Utilities for animating elements with CSS animations.
 *
 * @see https://tailwindcss.com/docs/animation
 */
export const animation_utilities = {
  animate_none,
  animate_spin,
  animate_ping,
  animate_pulse,
  animate_bounce,
  animate_arbitrary
};

