

/**
 * sr-only
 *
 * CSS:
 * - position: absolute;
 * - width: 1px;
 * - height: 1px;
 * - padding: 0;
 * - margin: -1px;
 * - overflow: hidden;
 * - clip: rect(0, 0, 0, 0);
 * - white-space: nowrap;
 * - border-width: 0;
  *
  * @see screen_readers
  *
  * @type utility
  */
export const sr_only = "sr-only";


/**
 * not-sr-only
 *
 * CSS:
 * - position: static;
 * - width: auto;
 * - height: auto;
 * - padding: 0;
 * - margin: 0;
 * - overflow: visible;
 * - clip: auto;
 * - white-space: normal;
  *
  * @see screen_readers
  *
  * @type utility
  */
export const not_sr_only = "not-sr-only";



/**
 * Screen Readers
 *
 * Utilities for improving accessibility with screen readers.
 *
 * @see https://tailwindcss.com/docs/screen-readers
 */
export const screen_readers_utilities = {
  sr_only,
  not_sr_only
};

