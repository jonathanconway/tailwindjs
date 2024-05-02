/**
 * align-baseline
 *
 * CSS:
 * - `vertical-align: baseline;`
 *
 * @see https://tailwindcss.com/docs/vertical-align
 *
 * @type utility
 */
export const align_baseline = "align-baseline";

/**
 * align-top
 *
 * CSS:
 * - `vertical-align: top;`
 *
 * @see https://tailwindcss.com/docs/vertical-align
 *
 * @type utility
 */
export const align_top = "align-top";

/**
 * align-middle
 *
 * CSS:
 * - `vertical-align: middle;`
 *
 * @see https://tailwindcss.com/docs/vertical-align
 *
 * @type utility
 */
export const align_middle = "align-middle";

/**
 * align-bottom
 *
 * CSS:
 * - `vertical-align: bottom;`
 *
 * @see https://tailwindcss.com/docs/vertical-align
 *
 * @type utility
 */
export const align_bottom = "align-bottom";

/**
 * align-text-top
 *
 * CSS:
 * - `vertical-align: text-top;`
 *
 * @see https://tailwindcss.com/docs/vertical-align
 *
 * @type utility
 */
export const align_text_top = "align-text-top";

/**
 * align-text-bottom
 *
 * CSS:
 * - `vertical-align: text-bottom;`
 *
 * @see https://tailwindcss.com/docs/vertical-align
 *
 * @type utility
 */
export const align_text_bottom = "align-text-bottom";

/**
 * align-sub
 *
 * CSS:
 * - `vertical-align: sub;`
 *
 * @see https://tailwindcss.com/docs/vertical-align
 *
 * @type utility
 */
export const align_sub = "align-sub";

/**
 * align-super
 *
 * CSS:
 * - `vertical-align: super;`
 *
 * @see https://tailwindcss.com/docs/vertical-align
 *
 * @type utility
 */
export const align_super = "align-super";

/**
 * align-[:value]
 *
 * If you need to use a one-off vertical-align value that isn't included in Tailwind by default, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/vertical-align#arbitrary-values
 *
 * @type utility
 */
export const align_arbitrary = (value: string) => `align-[${value}]`;

/**
 * Vertical Align
 *
 * Utilities for controlling the vertical alignment of an inline or table-cell box.
 *
 * @see https://tailwindcss.com/docs/vertical-align
 */
export const vertical_align_utilities = {
  align_baseline,
  align_top,
  align_middle,
  align_bottom,
  align_text_top,
  align_text_bottom,
  align_sub,
  align_super,
  align_arbitrary
};