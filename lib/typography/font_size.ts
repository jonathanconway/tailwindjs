/**
 * text-xs
 *
 * CSS properties:
 * - font-size: 0.75rem; \/* 12px *\/, * - line-height: 1rem; \/* 16px *\/
 *
 * @see https://tailwindcss.com/docs/font-size
 *
 * @type utility
 */
export const text_xs = "text-xs";

/**
 * text-sm
 *
 * CSS properties:
 * - font-size: 0.875rem; \/* 14px *\/, * - line-height: 1.25rem; \/* 20px *\/
 *
 * @see https://tailwindcss.com/docs/font-size
 *
 * @type utility
 */
export const text_sm = "text-sm";

/**
 * text-base
 *
 * CSS properties:
 * - font-size: 1rem; \/* 16px *\/, * - line-height: 1.5rem; \/* 24px *\/
 *
 * @see https://tailwindcss.com/docs/font-size
 *
 * @type utility
 */
export const text_base = "text-base";

/**
 * text-lg
 *
 * CSS properties:
 * - font-size: 1.125rem; \/* 18px *\/, * - line-height: 1.75rem; \/* 28px *\/
 *
 * @see https://tailwindcss.com/docs/font-size
 *
 * @type utility
 */
export const text_lg = "text-lg";

/**
 * text-xl
 *
 * CSS properties:
 * - font-size: 1.25rem; \/* 20px *\/, * - line-height: 1.75rem; \/* 28px *\/
 *
 * @see https://tailwindcss.com/docs/font-size
 *
 * @type utility
 */
export const text_xl = "text-xl";

/**
 * text-2xl
 *
 * CSS properties:
 * - font-size: 1.5rem; \/* 24px *\/, * - line-height: 2rem; \/* 32px *\/
 *
 * @see https://tailwindcss.com/docs/font-size
 *
 * @type utility
 */
export const text_2xl = "text-2xl";

/**
 * text-3xl
 *
 * CSS properties:
 * - font-size: 1.875rem; \/* 30px *\/, * - line-height: 2.25rem; \/* 36px *\/
 *
 * @see https://tailwindcss.com/docs/font-size
 *
 * @type utility
 */
export const text_3xl = "text-3xl";

/**
 * text-4xl
 *
 * CSS properties:
 * - font-size: 2.25rem; \/* 36px *\/, * - line-height: 2.5rem; \/* 40px *\/
 *
 * @see https://tailwindcss.com/docs/font-size
 *
 * @type utility
 */
export const text_4xl = "text-4xl";

/**
 * text-5xl
 *
 * CSS properties:
 * - font-size: 3rem; \/* 48px *\/, * - line-height: 1;
 *
 * @see https://tailwindcss.com/docs/font-size
 *
 * @type utility
 */
export const text_5xl = "text-5xl";

/**
 * text-6xl
 *
 * CSS properties:
 * - font-size: 3.75rem; \/* 60px *\/, * - line-height: 1;
 *
 * @see https://tailwindcss.com/docs/font-size
 *
 * @type utility
 */
export const text_6xl = "text-6xl";

/**
 * text-7xl
 *
 * CSS properties:
 * - font-size: 4.5rem; \/* 72px *\/, * - line-height: 1;
 *
 * @see https://tailwindcss.com/docs/font-size
 *
 * @type utility
 */
export const text_7xl = "text-7xl";

/**
 * text-8xl
 *
 * CSS properties:
 * - font-size: 6rem; \/* 96px *\/, * - line-height: 1;
 *
 * @see https://tailwindcss.com/docs/font-size
 *
 * @type utility
 */
export const text_8xl = "text-8xl";

/**
 * text-9xl
 *
 * CSS properties:
 * - font-size: 8rem; \/* 128px *\/, * - line-height: 1;
 *
 * @see https://tailwindcss.com/docs/font-size
 *
 * @type utility
 */
export const text_9xl = "text-9xl";

/**
 * text-[:value]
 *
 * If you need to use a one-off font-size value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
 *
 * @see https://tailwindcss.com/docs/font-size#arbitrary-values
 */
export const text_arbitrary = (value: string) => `text-[${value}]`;

/**
 * Typography
 *
 * Utilities for controlling the font size of an element.
 *
 * @see https://tailwindcss.com/docs/font-size
 */
export const font_size = {
  text_xs,
  text_sm,
  text_base,
  text_lg,
  text_xl,
  text_2xl,
  text_3xl,
  text_4xl,
  text_5xl,
  text_6xl,
  text_7xl,
  text_8xl,
  text_9xl,
  text_arbitrary
};