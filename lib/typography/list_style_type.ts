/**
 * list-none
 *
 * CSS properties:
 * - list-style-type: none;
 *
 * @see https://tailwindcss.com/docs/list-style-type
 *
 * @type utility
 */
export const list_none = "list-none";

/**
 * list-disc
 *
 * CSS properties:
 * - list-style-type: disc;
 *
 * @see https://tailwindcss.com/docs/list-style-type
 *
 * @type utility
 */
export const list_disc = "list-disc";

/**
 * list-decimal
 *
 * CSS properties:
 * - list-style-type: decimal;
 *
 * @see https://tailwindcss.com/docs/list-style-type
 *
 * @type utility
 */
export const list_decimal = "list-decimal";

/**
 * list-[:value]
 *
 * If you need to use a one-off list-style-type value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/list-style-type#arbitrary-values
 */
export const list_arbitrary = (value: string) => `list-[${value}]`;

/**
 * Typography
 *
 * Utilities for controlling the bullet/number style of a list.
 *
 * @see https://tailwindcss.com/docs/list-style-type
 */
export const list_style_type = {
  list_none,
  list_disc,
  list_decimal,
  list_arbitrary
};