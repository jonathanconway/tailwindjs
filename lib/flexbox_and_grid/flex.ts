/**
 * flex-1
 *
 * CSS properties:
 * - flex: 1 1 0%;
 *
 * @see https://tailwindcss.com/docs/flex
 *
 * @type utility
 */
export const flex_1 = "flex-1";

/**
 * flex-auto
 *
 * CSS properties:
 * - flex: 1 1 auto;
 *
 * @see https://tailwindcss.com/docs/flex
 *
 * @type utility
 */
export const flex_auto = "flex-auto";

/**
 * flex-initial
 *
 * CSS properties:
 * - flex: 0 1 auto;
 *
 * @see https://tailwindcss.com/docs/flex
 *
 * @type utility
 */
export const flex_initial = "flex-initial";

/**
 * flex-none
 *
 * CSS properties:
 * - flex: none;
 *
 * @see https://tailwindcss.com/docs/flex
 *
 * @type utility
 */
export const flex_none = "flex-none";

/**
 * flex-[:value]
 *
 * If you need to use a one-off flex value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/flex#arbitrary-values
 */
export const flex_arbitrary = (value: string) => `flex-[${value}]`;

/**
 * Flexbox & Grid
 *
 * Utilities for controlling how flex items both grow and shrink.
 *
 * @see https://tailwindcss.com/docs/flex
 */
export const flex = {
  flex_1,
  flex_auto,
  flex_initial,
  flex_none,
  flex_arbitrary
};