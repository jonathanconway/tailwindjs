/**
 * drop-shadow-sm
 *
 * CSS properties:
 * - filter: drop-shadow(0 1px 1px rgb(0 0 0 \/ 0.05));
 *
 * @see https://tailwindcss.com/docs/drop-shadow
 *
 * @type utility
 */
export const drop_shadow_sm = "drop-shadow-sm";

/**
 * drop-shadow
 *
 * CSS properties:
 * - filter: drop-shadow(0 1px 2px rgb(0 0 0 \/ 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 \/ 0.06));
 *
 * @see https://tailwindcss.com/docs/drop-shadow
 *
 * @type utility
 */
export const drop_shadow = "drop-shadow";

/**
 * drop-shadow-md
 *
 * CSS properties:
 * - filter: drop-shadow(0 4px 3px rgb(0 0 0 \/ 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 \/ 0.06));
 *
 * @see https://tailwindcss.com/docs/drop-shadow
 *
 * @type utility
 */
export const drop_shadow_md = "drop-shadow-md";

/**
 * drop-shadow-lg
 *
 * CSS properties:
 * - filter: drop-shadow(0 10px 8px rgb(0 0 0 \/ 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 \/ 0.1));
 *
 * @see https://tailwindcss.com/docs/drop-shadow
 *
 * @type utility
 */
export const drop_shadow_lg = "drop-shadow-lg";

/**
 * drop-shadow-xl
 *
 * CSS properties:
 * - filter: drop-shadow(0 20px 13px rgb(0 0 0 \/ 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 \/ 0.08));
 *
 * @see https://tailwindcss.com/docs/drop-shadow
 *
 * @type utility
 */
export const drop_shadow_xl = "drop-shadow-xl";

/**
 * drop-shadow-2xl
 *
 * CSS properties:
 * - filter: drop-shadow(0 25px 25px rgb(0 0 0 \/ 0.15));
 *
 * @see https://tailwindcss.com/docs/drop-shadow
 *
 * @type utility
 */
export const drop_shadow_2xl = "drop-shadow-2xl";

/**
 * drop-shadow-none
 *
 * CSS properties:
 * - filter: drop-shadow(0 0 #0000);
 *
 * @see https://tailwindcss.com/docs/drop-shadow
 *
 * @type utility
 */
export const drop_shadow_none = "drop-shadow-none";

/**
 * drop-shadow-[:value]
 *
 * If you need to use a one-off drop-shadow value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/drop-shadow#arbitrary-values
 */
export const drop_shadow_arbitrary = (value: string) => `drop-shadow-[${value}]`;

/**
 * Filters
 *
 * Utilities for applying drop-shadow filters to an element.
 *
 * @see https://tailwindcss.com/docs/drop-shadow
 */
export const drop_shadow = {
  drop_shadow_sm,
  drop_shadow,
  drop_shadow_md,
  drop_shadow_lg,
  drop_shadow_xl,
  drop_shadow_2xl,
  drop_shadow_none,
  drop_shadow_arbitrary
};