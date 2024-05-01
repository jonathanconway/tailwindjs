/**
 * tracking-tighter
 *
 * CSS properties:
 * - letter-spacing: -0.05em;
 *
 * @see https://tailwindcss.com/docs/letter-spacing
 *
 * @type utility
 */
export const tracking_tighter = "tracking-tighter";

/**
 * tracking-tight
 *
 * CSS properties:
 * - letter-spacing: -0.025em;
 *
 * @see https://tailwindcss.com/docs/letter-spacing
 *
 * @type utility
 */
export const tracking_tight = "tracking-tight";

/**
 * tracking-normal
 *
 * CSS properties:
 * - letter-spacing: 0em;
 *
 * @see https://tailwindcss.com/docs/letter-spacing
 *
 * @type utility
 */
export const tracking_normal = "tracking-normal";

/**
 * tracking-wide
 *
 * CSS properties:
 * - letter-spacing: 0.025em;
 *
 * @see https://tailwindcss.com/docs/letter-spacing
 *
 * @type utility
 */
export const tracking_wide = "tracking-wide";

/**
 * tracking-wider
 *
 * CSS properties:
 * - letter-spacing: 0.05em;
 *
 * @see https://tailwindcss.com/docs/letter-spacing
 *
 * @type utility
 */
export const tracking_wider = "tracking-wider";

/**
 * tracking-widest
 *
 * CSS properties:
 * - letter-spacing: 0.1em;
 *
 * @see https://tailwindcss.com/docs/letter-spacing
 *
 * @type utility
 */
export const tracking_widest = "tracking-widest";

/**
 * tracking-[:value]
 *
 * If you need to use a one-off letter-spacing value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/letter-spacing#arbitrary-values
 */
export const tracking_arbitrary = (value: string) => `tracking-[${value}]`;

/**
 * Typography
 *
 * Utilities for controlling the tracking (letter spacing) of an element.
 *
 * @see https://tailwindcss.com/docs/letter-spacing
 */
export const letter_spacing = {
  tracking_tighter,
  tracking_tight,
  tracking_normal,
  tracking_wide,
  tracking_wider,
  tracking_widest,
  tracking_arbitrary
};