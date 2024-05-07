

/**
 * grid-rows-1
 *
 * CSS:
 * - `grid-template-rows: repeat(1, minmax(0, 1fr));`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_1 = "grid-rows-1";


/**
 * grid-rows-2
 *
 * CSS:
 * - `grid-template-rows: repeat(2, minmax(0, 1fr));`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_2 = "grid-rows-2";


/**
 * grid-rows-3
 *
 * CSS:
 * - `grid-template-rows: repeat(3, minmax(0, 1fr));`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_3 = "grid-rows-3";


/**
 * grid-rows-4
 *
 * CSS:
 * - `grid-template-rows: repeat(4, minmax(0, 1fr));`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_4 = "grid-rows-4";


/**
 * grid-rows-5
 *
 * CSS:
 * - `grid-template-rows: repeat(5, minmax(0, 1fr));`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_5 = "grid-rows-5";


/**
 * grid-rows-6
 *
 * CSS:
 * - `grid-template-rows: repeat(6, minmax(0, 1fr));`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_6 = "grid-rows-6";


/**
 * grid-rows-7
 *
 * CSS:
 * - `grid-template-rows: repeat(7, minmax(0, 1fr));`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_7 = "grid-rows-7";


/**
 * grid-rows-8
 *
 * CSS:
 * - `grid-template-rows: repeat(8, minmax(0, 1fr));`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_8 = "grid-rows-8";


/**
 * grid-rows-9
 *
 * CSS:
 * - `grid-template-rows: repeat(9, minmax(0, 1fr));`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_9 = "grid-rows-9";


/**
 * grid-rows-10
 *
 * CSS:
 * - `grid-template-rows: repeat(10, minmax(0, 1fr));`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_10 = "grid-rows-10";


/**
 * grid-rows-11
 *
 * CSS:
 * - `grid-template-rows: repeat(11, minmax(0, 1fr));`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_11 = "grid-rows-11";


/**
 * grid-rows-12
 *
 * CSS:
 * - `grid-template-rows: repeat(12, minmax(0, 1fr));`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_12 = "grid-rows-12";


/**
 * grid-rows-none
 *
 * CSS:
 * - `grid-template-rows: none;`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_none = "grid-rows-none";


/**
 * grid-rows-subgrid
 *
 * CSS:
 * - `grid-template-rows: subgrid;`
  *
  * @see grid_template_rows
  *
  * @type utility
  */
export const grid_rows_subgrid = "grid-rows-subgrid";


/**
 * grid-rows-[{value}]
 *
 * If you need to use a one-off grid-template-rows value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/grid-template-rows#arbitrary-values
 *
 * @type utility
 */
export const grid_rows_arbitrary = (value: string) => `grid-rows-[${value}]`;


/**
 * grid-rows-[{value}]
 *
 * If you need to use a one-off grid-template-rows value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/grid-template-rows#arbitrary-values
 *
 * @type utility
 */
export const grid_rows_arb = (value: string) => `grid-rows-[${value}]`;


/**
 * Grid Template Rows
 *
 * Utilities for specifying the rows in a grid layout.
 *
 * @see https://tailwindcss.com/docs/grid-template-rows
 */
export const grid_template_rows_utilities = {
  grid_rows_1,
  grid_rows_2,
  grid_rows_3,
  grid_rows_4,
  grid_rows_5,
  grid_rows_6,
  grid_rows_7,
  grid_rows_8,
  grid_rows_9,
  grid_rows_10,
  grid_rows_11,
  grid_rows_12,
  grid_rows_none,
  grid_rows_subgrid,
  grid_rows_arbitrary
};

