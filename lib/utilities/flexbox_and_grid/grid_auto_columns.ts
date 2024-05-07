

/**
 * auto-cols-auto
 *
 * CSS:
 * - `grid-auto-columns: auto;`
  *
  * @see grid_auto_columns
  *
  * @type utility
  */
export const auto_cols_auto = "auto-cols-auto";


/**
 * auto-cols-min
 *
 * CSS:
 * - `grid-auto-columns: min-content;`
  *
  * @see grid_auto_columns
  *
  * @type utility
  */
export const auto_cols_min = "auto-cols-min";


/**
 * auto-cols-max
 *
 * CSS:
 * - `grid-auto-columns: max-content;`
  *
  * @see grid_auto_columns
  *
  * @type utility
  */
export const auto_cols_max = "auto-cols-max";


/**
 * auto-cols-fr
 *
 * CSS:
 * - `grid-auto-columns: minmax(0, 1fr);`
  *
  * @see grid_auto_columns
  *
  * @type utility
  */
export const auto_cols_fr = "auto-cols-fr";


/**
 * auto-cols-[{value}]
 *
 * If you need to use a one-off grid-auto-columns value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/grid-auto-columns#arbitrary-values
 *
 * @type utility
 */
export const auto_cols_arbitrary = (value: string) => `auto-cols-[${value}]`;


/**
 * auto-cols-[{value}]
 *
 * If you need to use a one-off grid-auto-columns value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/grid-auto-columns#arbitrary-values
 *
 * @type utility
 */
export const auto_cols_arb = (value: string) => `auto-cols-[${value}]`;


/**
 * Grid Auto Columns
 *
 * Utilities for controlling the size of implicitly-created grid columns.
 *
 * @see https://tailwindcss.com/docs/grid-auto-columns
 */
export const grid_auto_columns_utilities = {
  auto_cols_auto,
  auto_cols_min,
  auto_cols_max,
  auto_cols_fr,
  auto_cols_arbitrary
};

