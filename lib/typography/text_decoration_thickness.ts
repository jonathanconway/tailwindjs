/**
 * decoration-auto
 *
 * CSS properties:
 * - text-decoration-thickness: auto;
 *
 * @see https://tailwindcss.com/docs/text-decoration-thickness
 *
 * @type utility
 */
export const decoration_auto = "decoration-auto";

/**
 * decoration-from-font
 *
 * CSS properties:
 * - text-decoration-thickness: from-font;
 *
 * @see https://tailwindcss.com/docs/text-decoration-thickness
 *
 * @type utility
 */
export const decoration_from_font = "decoration-from-font";

/**
 * decoration-0
 *
 * CSS properties:
 * - text-decoration-thickness: 0px;
 *
 * @see https://tailwindcss.com/docs/text-decoration-thickness
 *
 * @type utility
 */
export const decoration_0 = "decoration-0";

/**
 * decoration-1
 *
 * CSS properties:
 * - text-decoration-thickness: 1px;
 *
 * @see https://tailwindcss.com/docs/text-decoration-thickness
 *
 * @type utility
 */
export const decoration_1 = "decoration-1";

/**
 * decoration-2
 *
 * CSS properties:
 * - text-decoration-thickness: 2px;
 *
 * @see https://tailwindcss.com/docs/text-decoration-thickness
 *
 * @type utility
 */
export const decoration_2 = "decoration-2";

/**
 * decoration-4
 *
 * CSS properties:
 * - text-decoration-thickness: 4px;
 *
 * @see https://tailwindcss.com/docs/text-decoration-thickness
 *
 * @type utility
 */
export const decoration_4 = "decoration-4";

/**
 * decoration-8
 *
 * CSS properties:
 * - text-decoration-thickness: 8px;
 *
 * @see https://tailwindcss.com/docs/text-decoration-thickness
 *
 * @type utility
 */
export const decoration_8 = "decoration-8";

/**
 * decoration-[:value]
 *
 * If you need to use a one-off text-decoration-thickness value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/text-decoration-thickness#arbitrary-values
 */
export const decoration_arbitrary = (value: string) => `decoration-[${value}]`;

/**
 * Typography
 *
 * Utilities for controlling the thickness of text decorations.
 *
 * @see https://tailwindcss.com/docs/text-decoration-thickness
 */
export const text_decoration_thickness = {
  decoration_auto,
  decoration_from_font,
  decoration_0,
  decoration_1,
  decoration_2,
  decoration_4,
  decoration_8,
  decoration_arbitrary
};