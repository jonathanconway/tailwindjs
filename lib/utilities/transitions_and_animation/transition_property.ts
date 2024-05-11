

/**
 * transition-none
 *
 * CSS:
 * - transition-property: none;
  *
  * @see transition_property
  *
  * @type utility
  */
export const transition_none = "transition-none";


/**
 * transition-all
 *
 * CSS:
 * - transition-property: all;
 * - transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 * - transition-duration: 150ms;
  *
  * @see transition_property
  *
  * @type utility
  */
export const transition_all = "transition-all";


/**
 * transition
 *
 * CSS:
 * - transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
 * - transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 * - transition-duration: 150ms;
  *
  * @see transition_property
  *
  * @type utility
  */
export const transition = "transition";


/**
 * transition-colors
 *
 * CSS:
 * - transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
 * - transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 * - transition-duration: 150ms;
  *
  * @see transition_property
  *
  * @type utility
  */
export const transition_colors = "transition-colors";


/**
 * transition-opacity
 *
 * CSS:
 * - transition-property: opacity;
 * - transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 * - transition-duration: 150ms;
  *
  * @see transition_property
  *
  * @type utility
  */
export const transition_opacity = "transition-opacity";


/**
 * transition-shadow
 *
 * CSS:
 * - transition-property: box-shadow;
 * - transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 * - transition-duration: 150ms;
  *
  * @see transition_property
  *
  * @type utility
  */
export const transition_shadow = "transition-shadow";


/**
 * transition-transform
 *
 * CSS:
 * - transition-property: transform;
 * - transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 * - transition-duration: 150ms;
  *
  * @see transition_property
  *
  * @type utility
  */
export const transition_transform = "transition-transform";


/**
 * transition-[{value}]
 *
 * If you need to use a one-off transition-property value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/transition-property#arbitrary-values
 *
 * @type utility
 */
export const transition_arbitrary = (value: string) => `transition-[${value}]`;


/**
 * transition-[{value}]
 *
 * If you need to use a one-off transition-property value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/transition-property#arbitrary-values
 *
 * @type utility
 */
export const transition_arb = (value: string) => `transition-[${value}]`;


/**
 * Transition Property
 *
 * Utilities for controlling which CSS properties transition.
 *
 * @see https://tailwindcss.com/docs/transition-property
 */
export const transition_property_utilities = {
  transition_none,
  transition_all,
  transition,
  transition_colors,
  transition_opacity,
  transition_shadow,
  transition_transform,
  transition_arbitrary
};

