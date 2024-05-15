

/**
 * line-clamp-1
 *
 * CSS:
 * - overflow: hidden;
 * - display: -webkit-box;
 * - -webkit-box-orient: vertical;
 * - -webkit-line-clamp: 1;
  *
  * @see line_clamp
  *
  * @type utility
  */
export const line_clamp_1 = "line-clamp-1";


/**
 * line-clamp-2
 *
 * CSS:
 * - overflow: hidden;
 * - display: -webkit-box;
 * - -webkit-box-orient: vertical;
 * - -webkit-line-clamp: 2;
  *
  * @see line_clamp
  *
  * @type utility
  */
export const line_clamp_2 = "line-clamp-2";


/**
 * line-clamp-3
 *
 * CSS:
 * - overflow: hidden;
 * - display: -webkit-box;
 * - -webkit-box-orient: vertical;
 * - -webkit-line-clamp: 3;
  *
  * @see line_clamp
  *
  * @type utility
  */
export const line_clamp_3 = "line-clamp-3";


/**
 * line-clamp-4
 *
 * CSS:
 * - overflow: hidden;
 * - display: -webkit-box;
 * - -webkit-box-orient: vertical;
 * - -webkit-line-clamp: 4;
  *
  * @see line_clamp
  *
  * @type utility
  */
export const line_clamp_4 = "line-clamp-4";


/**
 * line-clamp-5
 *
 * CSS:
 * - overflow: hidden;
 * - display: -webkit-box;
 * - -webkit-box-orient: vertical;
 * - -webkit-line-clamp: 5;
  *
  * @see line_clamp
  *
  * @type utility
  */
export const line_clamp_5 = "line-clamp-5";


/**
 * line-clamp-6
 *
 * CSS:
 * - overflow: hidden;
 * - display: -webkit-box;
 * - -webkit-box-orient: vertical;
 * - -webkit-line-clamp: 6;
  *
  * @see line_clamp
  *
  * @type utility
  */
export const line_clamp_6 = "line-clamp-6";


/**
 * line-clamp-none
 *
 * CSS:
 * - overflow: visible;
 * - display: block;
 * - -webkit-box-orient: horizontal;
 * - -webkit-line-clamp: none;
  *
  * @see line_clamp
  *
  * @type utility
  */
export const line_clamp_none = "line-clamp-none";


/**
 * line-clamp-[…]-[{value}]
 *
 * If you need to use a one-off line-clamp value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/line-clamp#arbitrary-values
 *
 * @type utility
 */
export const line_clamp_arbitrary = (value: string) => `line-clamp-[${value}]`;


/**
 * line-clamp-[…]-[{value}]
 *
 * If you need to use a one-off line-clamp value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/line-clamp#arbitrary-values
 *
 * @type utility
 */
export const line_clamp_arb = (value: string) => `line-clamp-[${value}]`;


/**
 * Line Clamp
 *
 * Utilities for clamping text to a specific number of lines.
 *
 * @see https://tailwindcss.com/docs/line-clamp
 */
export const line_clamp_utilities = {
  line_clamp_1,
  line_clamp_2,
  line_clamp_3,
  line_clamp_4,
  line_clamp_5,
  line_clamp_6,
  line_clamp_none,
  line_clamp_arbitrary
};

