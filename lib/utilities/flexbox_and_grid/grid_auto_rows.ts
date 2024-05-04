/**
 * auto-rows-auto
 *
 * CSS:
 * - `grid-auto-rows: auto;`
 *
 * @see https://tailwindcss.com/docs/grid-auto-rows
 *
 * @type utility
 */
export const auto_rows_auto = "auto-rows-auto";

/**
 * auto-rows-min
 *
 * CSS:
 * - `grid-auto-rows: min-content;`
 *
 * @see https://tailwindcss.com/docs/grid-auto-rows
 *
 * @type utility
 */
export const auto_rows_min = "auto-rows-min";

/**
 * auto-rows-max
 *
 * CSS:
 * - `grid-auto-rows: max-content;`
 *
 * @see https://tailwindcss.com/docs/grid-auto-rows
 *
 * @type utility
 */
export const auto_rows_max = "auto-rows-max";

/**
 * auto-rows-fr
 *
 * CSS:
 * - `grid-auto-rows: minmax(0, 1fr);`
 *
 * @see https://tailwindcss.com/docs/grid-auto-rows
 *
 * @type utility
 */
export const auto_rows_fr = "auto-rows-fr";

/**
 * auto-rows-[{value}]
 *
 * If you need to use a one-off grid-auto-rows value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/grid-auto-rows#arbitrary-values
 *
 * @type utility
 */
export const auto_rows_arbitrary = (value: string) => `auto-rows-[${value}]`;

/**
 * Grid Auto Rows
 *
 * Utilities for controlling the size of implicitly-created grid rows.
 *
 * @see https://tailwindcss.com/docs/grid-auto-rows
 */
export const grid_auto_rows_utilities = {
  auto_rows_auto,
  auto_rows_min,
  auto_rows_max,
  auto_rows_fr,
  auto_rows_arbitrary
};