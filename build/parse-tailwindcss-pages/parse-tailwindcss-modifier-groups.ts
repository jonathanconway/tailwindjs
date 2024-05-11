export const MODIFIER_GROUP_DETAILS: Record<
  string,
  { readonly url: string; readonly description: string }
> = {
  pseudo_classes: {
    url: "https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-classes",
    description:
      "Pseudo-classes, like :hover, :focus, :first-child, and :required",
  },
  pseudo_elements: {
    url: "https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-elements",
    description:
      "Pseudo-elements, like ::before, ::after, ::placeholder, and ::selection",
  },
  media_feature_queries: {
    url: "https://tailwindcss.com/docs/hover-focus-and-other-states#media-and-feature-queries",
    description:
      "Media and feature queries, like responsive breakpoints, dark mode, and prefers-reduced-motion",
  },
  attribute_selectors: {
    url: "https://tailwindcss.com/docs/hover-focus-and-other-states#attribute-selectors",
    description: 'Attribute selectors, like [dir="rtl"] and [open]',
  },
};

export const MODIFIERS_BY_GROUP = {
  pseudo_classes: [
    "hover",
    "focus",
    "focus-within",
    "focus-visible",
    "active",
    "visited",
    "target",

    "*",
    "has",
    "first",
    "last",
    "only",
    "odd",
    "even",
    "first-of-type",
    "last-of-type",
    "only-of-type",
    "empty",

    "disabled",
    "enabled",
    "checked",
    "indeterminate",
    "default",
    "required",
    "valid",
    "invalid",
    "in-range",
    "out-of-range",
    "placeholder-shown",
    "autofill",
    "read-only",
  ],
  pseudo_elements: [
    "before",
    "after",
    "first-letter",
    "first-line",
    "marker",
    "selection",
    "file",
    "backdrop",
    "placeholder",
  ],
  media_feature_queries: [
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "min-[…]",
    "max-sm",
    "max-md",
    "max-lg",
    "max-xl",
    "max-2xl",
    "max-[…]",
    "dark",
    "portrait",
    "landscape",
    "motion-safe",
    "motion-reduce",
    "contrast-more",
    "contrast-less",
    "print",
    "supports-[…]",
  ],
  attribute_selectors: [
    "aria-checked",
    "aria-disabled",
    "aria-expanded",
    "aria-hidden",
    "aria-pressed",
    "aria-readonly",
    "aria-required",
    "aria-selected",
    "aria-[…]",
    "data-[…]",
    "rtl",
    "ltr",
    "open",
  ],
};

export const GROUPS_BY_MODIFIER = Object.fromEntries(
  Object.entries(MODIFIERS_BY_GROUP).flatMap(([group, modifiers]) =>
    modifiers.map((modifier) => [modifier, group])
  )
);
