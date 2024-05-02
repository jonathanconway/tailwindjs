/**
 * z-0
 *
 * CSS:
 * - `z-index: 0;`
 *
 * @see https://tailwindcss.com/docs/z-index
 *
 * @type utility
 */
export const z_0 = "z-0";

/**
 * z-10
 *
 * CSS:
 * - `z-index: 10;`
 *
 * @see https://tailwindcss.com/docs/z-index
 *
 * @type utility
 */
export const z_10 = "z-10";

/**
 * z-20
 *
 * CSS:
 * - `z-index: 20;`
 *
 * @see https://tailwindcss.com/docs/z-index
 *
 * @type utility
 */
export const z_20 = "z-20";

/**
 * z-30
 *
 * CSS:
 * - `z-index: 30;`
 *
 * @see https://tailwindcss.com/docs/z-index
 *
 * @type utility
 */
export const z_30 = "z-30";

/**
 * z-40
 *
 * CSS:
 * - `z-index: 40;`
 *
 * @see https://tailwindcss.com/docs/z-index
 *
 * @type utility
 */
export const z_40 = "z-40";

/**
 * z-50
 *
 * CSS:
 * - `z-index: 50;`
 *
 * @see https://tailwindcss.com/docs/z-index
 *
 * @type utility
 */
export const z_50 = "z-50";

/**
 * z-auto
 *
 * CSS:
 * - `z-index: auto;`
 *
 * @see https://tailwindcss.com/docs/z-index
 *
 * @type utility
 */
export const z_auto = "z-auto";

/**
 * z-[:value]
 *
 * If you need to use a one-off z-index value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/z-index#arbitrary-values
 *
 * @type utility
 */
export const z_arbitrary = (value: string) => `z-[${value}]`;

/**
 * Z-Index
 *
 * Utilities for controlling the stack order of an element.
 *
 * @see https://tailwindcss.com/docs/z-index
 */
export const z_index_utilities = {
  z_0,
  z_10,
  z_20,
  z_30,
  z_40,
  z_50,
  z_auto,
  z_arbitrary
};