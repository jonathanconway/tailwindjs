/**
 * transition-none
 * 
 * CSS properties:
 * - transition-property: none;
 * 
 * @see https://tailwindcss.com/docs/transition-property
 * 
 * @type utility
 */
export const transition_none = "transition-none";

/**
 * transition-all
 * 
 * CSS properties:
 * - transition-property: all;, * - transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);, * - transition-duration: 150ms;
 * 
 * @see https://tailwindcss.com/docs/transition-property
 * 
 * @type utility
 */
export const transition_all = "transition-all";

/**
 * transition
 * 
 * CSS properties:
 * - transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;, * - transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);, * - transition-duration: 150ms;
 * 
 * @see https://tailwindcss.com/docs/transition-property
 * 
 * @type utility
 */
export const transition = "transition";

/**
 * transition-colors
 * 
 * CSS properties:
 * - transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;, * - transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);, * - transition-duration: 150ms;
 * 
 * @see https://tailwindcss.com/docs/transition-property
 * 
 * @type utility
 */
export const transition_colors = "transition-colors";

/**
 * transition-opacity
 * 
 * CSS properties:
 * - transition-property: opacity;, * - transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);, * - transition-duration: 150ms;
 * 
 * @see https://tailwindcss.com/docs/transition-property
 * 
 * @type utility
 */
export const transition_opacity = "transition-opacity";

/**
 * transition-shadow
 * 
 * CSS properties:
 * - transition-property: box-shadow;, * - transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);, * - transition-duration: 150ms;
 * 
 * @see https://tailwindcss.com/docs/transition-property
 * 
 * @type utility
 */
export const transition_shadow = "transition-shadow";

/**
 * transition-transform
 * 
 * CSS properties:
 * - transition-property: transform;, * - transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);, * - transition-duration: 150ms;
 * 
 * @see https://tailwindcss.com/docs/transition-property
 * 
 * @type utility
 */
export const transition_transform = "transition-transform";

/**
 * Transitions & Animation
 * 
 * Utilities for controlling which CSS properties transition.
 * 
 * @see https://tailwindcss.com/docs/transition-property
 */
export const transition_property = {
  transition_none,
  transition_all,
  transition,
  transition_colors,
  transition_opacity,
  transition_shadow,
  transition_transform
};