

/**
 * decoration-auto
 *
 * CSS:
 * - text-decoration-thickness: auto;
  *
  * @see text_decoration_thickness
  *
  * @type utility
  */
export const decoration_auto = "decoration-auto";


/**
 * decoration-from-font
 *
 * CSS:
 * - text-decoration-thickness: from-font;
  *
  * @see text_decoration_thickness
  *
  * @type utility
  */
export const decoration_from_font = "decoration-from-font";


/**
 * decoration-0
 *
 * CSS:
 * - text-decoration-thickness: 0px;
  *
  * @see text_decoration_thickness
  *
  * @type utility
  */
export const decoration_0 = "decoration-0";


/**
 * decoration-1
 *
 * CSS:
 * - text-decoration-thickness: 1px;
  *
  * @see text_decoration_thickness
  *
  * @type utility
  */
export const decoration_1 = "decoration-1";


/**
 * decoration-2
 *
 * CSS:
 * - text-decoration-thickness: 2px;
  *
  * @see text_decoration_thickness
  *
  * @type utility
  */
export const decoration_2 = "decoration-2";


/**
 * decoration-4
 *
 * CSS:
 * - text-decoration-thickness: 4px;
  *
  * @see text_decoration_thickness
  *
  * @type utility
  */
export const decoration_4 = "decoration-4";


/**
 * decoration-8
 *
 * CSS:
 * - text-decoration-thickness: 8px;
  *
  * @see text_decoration_thickness
  *
  * @type utility
  */
export const decoration_8 = "decoration-8";


/**
 * decoration-from-[…]-[{value}]
 *
 * If you need to use a one-off text-decoration-thickness value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/text-decoration-thickness#arbitrary-values
 *
 * @type utility
 */
export const decoration_from_arbitrary = (value: string) => `decoration-from-["${value}"]`;


/**
 * decoration-from-[…]-[{value}]
 *
 * If you need to use a one-off text-decoration-thickness value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/text-decoration-thickness#arbitrary-values
 *
 * @type utility
 */
export const decoration_from_arb = (value: string) => `decoration-from-["${value}"]`;


/**
 * Text Decoration Thickness
 *
 * Utilities for controlling the thickness of text decorations.
 *
 * @see https://tailwindcss.com/docs/text-decoration-thickness
 */
export const text_decoration_thickness_utilities = {
  decoration_auto,
  decoration_from_font,
  decoration_0,
  decoration_1,
  decoration_2,
  decoration_4,
  decoration_8,
  decoration_from_arbitrary
};

