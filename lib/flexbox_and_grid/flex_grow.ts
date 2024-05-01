/**
 * grow
 *
 * CSS properties:
 * - flex-grow: 1;
 *
 * @see https://tailwindcss.com/docs/flex-grow
 *
 * @type utility
 */
export const grow = "grow";

/**
 * grow-0
 *
 * CSS properties:
 * - flex-grow: 0;
 *
 * @see https://tailwindcss.com/docs/flex-grow
 *
 * @type utility
 */
export const grow_0 = "grow-0";

/**
 * grow-[:value]
 *
 * If you need to use a one-off flex-grow value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/flex-grow#arbitrary-values
 */
export const grow_arbitrary = (value: string) => `grow-[${value}]`;

/**
 * Flexbox & Grid
 *
 * Utilities for controlling how flex items grow.
 *
 * @see https://tailwindcss.com/docs/flex-grow
 */
export const flex_grow = {
  grow,
  grow_0,
  grow_arbitrary
};