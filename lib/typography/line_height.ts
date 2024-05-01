/**
 * leading-3
 *
 * CSS properties:
 * - line-height: .75rem; \/* 12px *\/
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_3 = "leading-3";

/**
 * leading-4
 *
 * CSS properties:
 * - line-height: 1rem; \/* 16px *\/
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_4 = "leading-4";

/**
 * leading-5
 *
 * CSS properties:
 * - line-height: 1.25rem; \/* 20px *\/
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_5 = "leading-5";

/**
 * leading-6
 *
 * CSS properties:
 * - line-height: 1.5rem; \/* 24px *\/
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_6 = "leading-6";

/**
 * leading-7
 *
 * CSS properties:
 * - line-height: 1.75rem; \/* 28px *\/
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_7 = "leading-7";

/**
 * leading-8
 *
 * CSS properties:
 * - line-height: 2rem; \/* 32px *\/
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_8 = "leading-8";

/**
 * leading-9
 *
 * CSS properties:
 * - line-height: 2.25rem; \/* 36px *\/
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_9 = "leading-9";

/**
 * leading-10
 *
 * CSS properties:
 * - line-height: 2.5rem; \/* 40px *\/
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_10 = "leading-10";

/**
 * leading-none
 *
 * CSS properties:
 * - line-height: 1;
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_none = "leading-none";

/**
 * leading-tight
 *
 * CSS properties:
 * - line-height: 1.25;
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_tight = "leading-tight";

/**
 * leading-snug
 *
 * CSS properties:
 * - line-height: 1.375;
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_snug = "leading-snug";

/**
 * leading-normal
 *
 * CSS properties:
 * - line-height: 1.5;
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_normal = "leading-normal";

/**
 * leading-relaxed
 *
 * CSS properties:
 * - line-height: 1.625;
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_relaxed = "leading-relaxed";

/**
 * leading-loose
 *
 * CSS properties:
 * - line-height: 2;
 *
 * @see https://tailwindcss.com/docs/line-height
 *
 * @type utility
 */
export const leading_loose = "leading-loose";

/**
 * leading-[:value]
 *
 * If you need to use a one-off line-height value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/line-height#arbitrary-values
 */
export const leading_arbitrary = (value: string) => `leading-[${value}]`;

/**
 * Typography
 *
 * Utilities for controlling the leading (line height) of an element.
 *
 * @see https://tailwindcss.com/docs/line-height
 */
export const line_height = {
  leading_3,
  leading_4,
  leading_5,
  leading_6,
  leading_7,
  leading_8,
  leading_9,
  leading_10,
  leading_none,
  leading_tight,
  leading_snug,
  leading_normal,
  leading_relaxed,
  leading_loose,
  leading_arbitrary
};