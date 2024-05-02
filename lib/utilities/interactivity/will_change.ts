/**
 * will-change-auto
 *
 * CSS:
 * - `will-change: auto;`
 *
 * @see https://tailwindcss.com/docs/will-change
 *
 * @type utility
 */
export const will_change_auto = "will-change-auto";

/**
 * will-change-scroll
 *
 * CSS:
 * - `will-change: scroll-position;`
 *
 * @see https://tailwindcss.com/docs/will-change
 *
 * @type utility
 */
export const will_change_scroll = "will-change-scroll";

/**
 * will-change-contents
 *
 * CSS:
 * - `will-change: contents;`
 *
 * @see https://tailwindcss.com/docs/will-change
 *
 * @type utility
 */
export const will_change_contents = "will-change-contents";

/**
 * will-change-transform
 *
 * CSS:
 * - `will-change: transform;`
 *
 * @see https://tailwindcss.com/docs/will-change
 *
 * @type utility
 */
export const will_change_transform = "will-change-transform";

/**
 * will-change-[:value]
 *
 * If you need to use a one-off will-change value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/will-change#arbitrary-values
 *
 * @type utility
 */
export const will_change_arbitrary = (value: string) => `will-change-[${value}]`;

/**
 * Will Change
 *
 * Utilities for optimizing upcoming animations of elements that are expected to change.
 *
 * @see https://tailwindcss.com/docs/will-change
 */
export const will_change_utilities = {
  will_change_auto,
  will_change_scroll,
  will_change_contents,
  will_change_transform,
  will_change_arbitrary
};