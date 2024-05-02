/**
 * snap-none
 *
 * CSS:
 * - `scroll-snap-type: none;`
 *
 * @see https://tailwindcss.com/docs/scroll-snap-type
 *
 * @type utility
 */
export const snap_none = "snap-none";

/**
 * snap-x
 *
 * CSS:
 * - `scroll-snap-type: x var(--tw-scroll-snap-strictness);`
 *
 * @see https://tailwindcss.com/docs/scroll-snap-type
 *
 * @type utility
 */
export const snap_x = "snap-x";

/**
 * snap-y
 *
 * CSS:
 * - `scroll-snap-type: y var(--tw-scroll-snap-strictness);`
 *
 * @see https://tailwindcss.com/docs/scroll-snap-type
 *
 * @type utility
 */
export const snap_y = "snap-y";

/**
 * snap-both
 *
 * CSS:
 * - `scroll-snap-type: both var(--tw-scroll-snap-strictness);`
 *
 * @see https://tailwindcss.com/docs/scroll-snap-type
 *
 * @type utility
 */
export const snap_both = "snap-both";

/**
 * snap-mandatory
 *
 * CSS:
 * - `--tw-scroll-snap-strictness: mandatory;`
 *
 * @see https://tailwindcss.com/docs/scroll-snap-type
 *
 * @type utility
 */
export const snap_mandatory = "snap-mandatory";

/**
 * snap-proximity
 *
 * CSS:
 * - `--tw-scroll-snap-strictness: proximity;`
 *
 * @see https://tailwindcss.com/docs/scroll-snap-type
 *
 * @type utility
 */
export const snap_proximity = "snap-proximity";

/**
 * Scroll Snap Type
 *
 * Utilities for controlling how strictly snap points are enforced in a snap container.
 *
 * @see https://tailwindcss.com/docs/scroll-snap-type
 */
export const scroll_snap_type_utilities = {
  snap_none,
  snap_x,
  snap_y,
  snap_both,
  snap_mandatory,
  snap_proximity
};