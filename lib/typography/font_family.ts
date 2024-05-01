/**
 * font-sans
 *
 * CSS properties:
 * - font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
 *
 * @see https://tailwindcss.com/docs/font-family
 *
 * @type utility
 */
export const font_sans = "font-sans";

/**
 * font-serif
 *
 * CSS properties:
 * - font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
 *
 * @see https://tailwindcss.com/docs/font-family
 *
 * @type utility
 */
export const font_serif = "font-serif";

/**
 * font-mono
 *
 * CSS properties:
 * - font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
 *
 * @see https://tailwindcss.com/docs/font-family
 *
 * @type utility
 */
export const font_mono = "font-mono";

/**
 * font-[:value]
 *
 * If you need to use a one-off font-family value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/font-family#arbitrary-values
 */
export const font_arbitrary = (value: string) => `font-[${value}]`;

/**
 * Typography
 *
 * Utilities for controlling the font family of an element.
 *
 * @see https://tailwindcss.com/docs/font-family
 */
export const font_family = {
  font_sans,
  font_serif,
  font_mono,
  font_arbitrary
};