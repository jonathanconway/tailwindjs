/**
 * ring-offset-0
 *
 * CSS:
 * - `--tw-ring-offset-width: 0px;`
 * - `box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);`
 *
 * @see https://tailwindcss.com/docs/ring-offset-width
 *
 * @type utility
 */
export const ring_offset_0 = "ring-offset-0";

/**
 * ring-offset-1
 *
 * CSS:
 * - `--tw-ring-offset-width: 1px;`
 * - `box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);`
 *
 * @see https://tailwindcss.com/docs/ring-offset-width
 *
 * @type utility
 */
export const ring_offset_1 = "ring-offset-1";

/**
 * ring-offset-2
 *
 * CSS:
 * - `--tw-ring-offset-width: 2px;`
 * - `box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);`
 *
 * @see https://tailwindcss.com/docs/ring-offset-width
 *
 * @type utility
 */
export const ring_offset_2 = "ring-offset-2";

/**
 * ring-offset-4
 *
 * CSS:
 * - `--tw-ring-offset-width: 4px;`
 * - `box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);`
 *
 * @see https://tailwindcss.com/docs/ring-offset-width
 *
 * @type utility
 */
export const ring_offset_4 = "ring-offset-4";

/**
 * ring-offset-8
 *
 * CSS:
 * - `--tw-ring-offset-width: 8px;`
 * - `box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);`
 *
 * @see https://tailwindcss.com/docs/ring-offset-width
 *
 * @type utility
 */
export const ring_offset_8 = "ring-offset-8";

/**
 * ring-offset-[:value]
 *
 * If you need to use a one-off ring-offset value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/ring-offset-width#arbitrary-values
 *
 * @type utility
 */
export const ring_offset_arbitrary = (value: string) => `ring-offset-[${value}]`;

/**
 * Ring Offset Width
 *
 * Utilities for simulating an offset when adding outline rings.
 *
 * @see https://tailwindcss.com/docs/ring-offset-width
 */
export const ring_offset_width_utilities = {
  ring_offset_0,
  ring_offset_1,
  ring_offset_2,
  ring_offset_4,
  ring_offset_8,
  ring_offset_arbitrary
};