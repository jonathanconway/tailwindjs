

/**
 * grid-cols-1
 *
 * CSS:
 * - `grid-template-columns: repeat(1, minmax(0, 1fr));`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_1 = "grid-cols-1";


/**
 * grid-cols-2
 *
 * CSS:
 * - `grid-template-columns: repeat(2, minmax(0, 1fr));`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_2 = "grid-cols-2";


/**
 * grid-cols-3
 *
 * CSS:
 * - `grid-template-columns: repeat(3, minmax(0, 1fr));`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_3 = "grid-cols-3";


/**
 * grid-cols-4
 *
 * CSS:
 * - `grid-template-columns: repeat(4, minmax(0, 1fr));`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_4 = "grid-cols-4";


/**
 * grid-cols-5
 *
 * CSS:
 * - `grid-template-columns: repeat(5, minmax(0, 1fr));`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_5 = "grid-cols-5";


/**
 * grid-cols-6
 *
 * CSS:
 * - `grid-template-columns: repeat(6, minmax(0, 1fr));`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_6 = "grid-cols-6";


/**
 * grid-cols-7
 *
 * CSS:
 * - `grid-template-columns: repeat(7, minmax(0, 1fr));`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_7 = "grid-cols-7";


/**
 * grid-cols-8
 *
 * CSS:
 * - `grid-template-columns: repeat(8, minmax(0, 1fr));`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_8 = "grid-cols-8";


/**
 * grid-cols-9
 *
 * CSS:
 * - `grid-template-columns: repeat(9, minmax(0, 1fr));`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_9 = "grid-cols-9";


/**
 * grid-cols-10
 *
 * CSS:
 * - `grid-template-columns: repeat(10, minmax(0, 1fr));`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_10 = "grid-cols-10";


/**
 * grid-cols-11
 *
 * CSS:
 * - `grid-template-columns: repeat(11, minmax(0, 1fr));`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_11 = "grid-cols-11";


/**
 * grid-cols-12
 *
 * CSS:
 * - `grid-template-columns: repeat(12, minmax(0, 1fr));`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_12 = "grid-cols-12";


/**
 * grid-cols-none
 *
 * CSS:
 * - `grid-template-columns: none;`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_none = "grid-cols-none";


/**
 * grid-cols-subgrid
 *
 * CSS:
 * - `grid-template-columns: subgrid;`
  *
  * @see grid_template_columns
  *
  * @type utility
  */
export const grid_cols_subgrid = "grid-cols-subgrid";


/**
 * grid-cols-[{value}]
 *
 * If you need to use a one-off grid-template-columns value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/grid-template-columns#arbitrary-values
 *
 * @type utility
 */
export const grid_cols_arbitrary = (value: string) => `grid-cols-[${value}]`;


/**
 * grid-cols-[{value}]
 *
 * If you need to use a one-off grid-template-columns value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/grid-template-columns#arbitrary-values
 *
 * @type utility
 */
export const grid_cols_arb = (value: string) => `grid-cols-[${value}]`;


/**
 * Grid Template Columns
 *
 * Utilities for specifying the columns in a grid layout.
 *
 * @see https://tailwindcss.com/docs/grid-template-columns
 */
export const grid_template_columns_utilities = {
  grid_cols_1,
  grid_cols_2,
  grid_cols_3,
  grid_cols_4,
  grid_cols_5,
  grid_cols_6,
  grid_cols_7,
  grid_cols_8,
  grid_cols_9,
  grid_cols_10,
  grid_cols_11,
  grid_cols_12,
  grid_cols_none,
  grid_cols_subgrid,
  grid_cols_arbitrary
};

