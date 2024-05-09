# tailwindjs

> Tailwind as Javascript functions for code completion and type safety.

## Table of contents

- [Introduction](#introduction)
- [Installation](#installation)
- [API](#api)
- [Contributing](#contributing)

## Getting started

### Introduction

[TailwindCSS](https://tailwindcss.com) is a CSS framework which allows you to fully style a front-end by applying powerful utility classes in your markup.

TailwindJS is a Javascript/Typescript library that exposes these classes as Javascript objects.

Benefits of using TailwindJS:

- Runtime checking of Javascript objects to quickly identify typos and errors
- Build-time checking of Typescript (and Javascript if you use a build tool)
- Auto-suggestion and auto-completion features in your IDE (e.g. Intellisense in VS Code)
- Composability with modifiers/helpers without direct string manipulation

TailwindJS exposes:

- **All TailwindCSS utilities** as simple constants, e.g. `h_10` => `h-10`
- **All TailwindCSS modifiers** as functions, e.g. `dark(bg_stone_900)` => `dark:bg-stone-900`

Additionally TailwindJS provides helpers for arbitrary and negative values and a basic `classNames` composer.

### Installation

NPM:

```bash
npm install @jonathanconway/tailwindjs
```

Yarn:

```bash
yarn add @jonathanconway/tailwindjs
```

### Class detection

You may want to use TailwindCSS and TailwindJS as part of a build system such as Webpack or a framework including a build such as [NextJS](http://nextjs.org) or [React](http://reactjs.org).

In that case you will need to somehow expose to Tailwind the list of classes your app code uses so that those classes can be included in the TailwindCSS build. (For further information, please see [Class detection in-depth](https://tailwindcss.com/docs/content-configuration#class-detection-in-depth) in the TailwindCSS docs.)

TailwindJS provides a special utility function to help with this: `scanTailwindJSClasses`. If you call this function from your `tailwind.config.js` file, providing a code path and an optional output path and filename, TailwindJS will scan your code, generate the list, and save it to an output file. You then simply need to add this file to the `content` array in your TailwindCSS config object.

Here's the full set of steps:

1. Ensure TailwindJS and TailwindCSS are installed in your project as dependencies.
2. Open `tailwind.config.js` in your editor/IDE.
3. Add the following import to the top: `import { scanTailwindJSClasses } from "@jonathanconway/tailwindjs";`
4. Add the following call after the imports but before the config object: ` scanTailwindJSClasses(``${__dirname}/src``); `
5. Add the following line to the `content` array in the config object: `"./src/tailwind-js-classes.json"`

At the end your `tailwind.config.js` file should look something like this:

```javascript
import { scanTailwindJSClasses } from "@jonathanconway/tailwindjs/build";
import type { Config } from "tailwindcss";

scanTailwindJSClasses(`${__dirname}/src`);

module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/tailwind-js-classes.json"],
};
```

### Using utilities

You can use TailwindJS utilities by referencing them directly.

For example, in a React TSX or JSX file, you can have code like this:

```tsx
import { cn, rounded, bg_stone_500, text_sm } from "@jonathanconway/tailwindjs";

export function Button({ children }) {
  return (
    <button className={cn(rounded, bg_stone_500, text_sm)}>{children}</button>
  );
}
```

This will produce markup like the following:

```html
<button class="rounded bg-stone-500 text-sm">Ok</button>
```

### Using modifiers

You can use Tailwind modifiers by calling them as functions.

For example, in a React TSX or JSX file, you can have code like this:

```tsx
import {
  cn,
  dark,
  text_stone_950,
  text_stone_50,
} from "@jonathanconway/tailwindjs";

export function Text({ children }) {
  return (
    <span className={cn(text_stone_950, dark(text_stone_50))}>{children}</span>
  );
}
```

This will produce markup like the following:

```html
<span class="text-stone-950 dark:text-stone-50">Ok</button>
```

Note: TailwindJS does not yet support any non-TailwindJS arguments, apart from string literals, being passed to modifiers. So we recommend only passing TailwindJS utilities or modifiers, or string literals, as arguments to TailwindJS modifiers. Part of the reason for this is that TailwindJS [class detection](#class-detection) can only recognise TailwindJS utilities and functions.

### Using aribtraries

You can use Tailwind arbitrary values by calling them as functions, similar to modifiers.

For example, in a React TSX or JSX file, you can have code like this:

```tsx
import { cn, size_arb } from "@jonathanconway/tailwindjs";

export function Footnote({ children }) {
  return <span className={cn(size_arb("0.95rem"))}>{children}</span>;
}
```

This will produce markup like the following:

```html
<span class='size-["0.95rem"]'>Ok</button>
```

## API
<!-- insert api start -->


### Utilities

- [Accessibility](./docs/utilities/accessibility.md)
- [Backgrounds](./docs/utilities/backgrounds.md)
- [Borders](./docs/utilities/borders.md)
- [Effects](./docs/utilities/effects.md)
- [Filters](./docs/utilities/filters.md)
- [Flexbox and grid](./docs/utilities/flexbox_and_grid.md)
- [Interactivity](./docs/utilities/interactivity.md)
- [Layout](./docs/utilities/layout.md)
- [Sizing](./docs/utilities/sizing.md)
- [Spacing](./docs/utilities/spacing.md)
- [Svg](./docs/utilities/svg.md)
- [Tables](./docs/utilities/tables.md)
- [Transforms](./docs/utilities/transforms.md)
- [Transitions and animation](./docs/utilities/transitions_and_animation.md)
- [Typography](./docs/utilities/typography.md)



### Modifiers

- [_2xl](./docs/modifiers/_2xl.md)
- [active](./docs/modifiers/active.md)
- [after](./docs/modifiers/after.md)
- [all](./docs/modifiers/all.md)
- [aria_arbitrary](./docs/modifiers/aria_arbitrary.md)
- [aria_checked](./docs/modifiers/aria_checked.md)
- [aria_disabled](./docs/modifiers/aria_disabled.md)
- [aria_expanded](./docs/modifiers/aria_expanded.md)
- [aria_hidden](./docs/modifiers/aria_hidden.md)
- [aria_pressed](./docs/modifiers/aria_pressed.md)
- [aria_readonly](./docs/modifiers/aria_readonly.md)
- [aria_required](./docs/modifiers/aria_required.md)
- [aria_selected](./docs/modifiers/aria_selected.md)
- [autofill](./docs/modifiers/autofill.md)
- [backdrop](./docs/modifiers/backdrop.md)
- [before](./docs/modifiers/before.md)
- [checked](./docs/modifiers/checked.md)
- [contrast_less](./docs/modifiers/contrast_less.md)
- [contrast_more](./docs/modifiers/contrast_more.md)
- [dark](./docs/modifiers/dark.md)
- [data_arbitrary](./docs/modifiers/data_arbitrary.md)
- [default_](./docs/modifiers/default_.md)
- [disabled](./docs/modifiers/disabled.md)
- [empty](./docs/modifiers/empty.md)
- [enabled](./docs/modifiers/enabled.md)
- [even](./docs/modifiers/even.md)
- [file](./docs/modifiers/file.md)
- [first](./docs/modifiers/first.md)
- [first_letter](./docs/modifiers/first_letter.md)
- [first_line](./docs/modifiers/first_line.md)
- [first_of_type](./docs/modifiers/first_of_type.md)
- [focus](./docs/modifiers/focus.md)
- [focus_visible](./docs/modifiers/focus_visible.md)
- [focus_within](./docs/modifiers/focus_within.md)
- [has](./docs/modifiers/has.md)
- [hover](./docs/modifiers/hover.md)
- [in_range](./docs/modifiers/in_range.md)
- [indeterminate](./docs/modifiers/indeterminate.md)
- [invalid](./docs/modifiers/invalid.md)
- [landscape](./docs/modifiers/landscape.md)
- [last](./docs/modifiers/last.md)
- [last_of_type](./docs/modifiers/last_of_type.md)
- [lg](./docs/modifiers/lg.md)
- [ltr](./docs/modifiers/ltr.md)
- [marker](./docs/modifiers/marker.md)
- [max_2xl](./docs/modifiers/max_2xl.md)
- [max_arbitrary](./docs/modifiers/max_arbitrary.md)
- [max_lg](./docs/modifiers/max_lg.md)
- [max_md](./docs/modifiers/max_md.md)
- [max_sm](./docs/modifiers/max_sm.md)
- [max_xl](./docs/modifiers/max_xl.md)
- [md](./docs/modifiers/md.md)
- [min_arbitrary](./docs/modifiers/min_arbitrary.md)
- [motion_reduce](./docs/modifiers/motion_reduce.md)
- [motion_safe](./docs/modifiers/motion_safe.md)
- [odd](./docs/modifiers/odd.md)
- [only](./docs/modifiers/only.md)
- [only_of_type](./docs/modifiers/only_of_type.md)
- [open](./docs/modifiers/open.md)
- [out_of_range](./docs/modifiers/out_of_range.md)
- [placeholder](./docs/modifiers/placeholder.md)
- [placeholder_shown](./docs/modifiers/placeholder_shown.md)
- [portrait](./docs/modifiers/portrait.md)
- [print](./docs/modifiers/print.md)
- [read_only](./docs/modifiers/read_only.md)
- [required](./docs/modifiers/required.md)
- [rtl](./docs/modifiers/rtl.md)
- [selection](./docs/modifiers/selection.md)
- [sm](./docs/modifiers/sm.md)
- [supports_arbitrary](./docs/modifiers/supports_arbitrary.md)
- [target](./docs/modifiers/target.md)
- [valid](./docs/modifiers/valid.md)
- [visited](./docs/modifiers/visited.md)
- [xl](./docs/modifiers/xl.md)


<!-- insert api end -->
## Helpers

- [Negative](./docs/helpers/negative.md)
- [Class names](./docs/helpers/class-names.md)

## Contributing

### Installation

To get set up developing this library simple install the dependencies via NPM, run the following:

```bash
npm install
```

To build the project as an importable library, run the following:

```bash
npm run build
```

To re-generate utilities and modifiers, which are scanned from the TailwindCSS website, run the following:

```bash
npm run build-tailwindcss-pages
npm run build-lib
npm run build
```

If you make any changes, to re-build the generated part of the docs, run the following:

```bash
npm run build-docs
npm run build
```

### Versioning

Currently TailwindJS is in Beta. Versions are formatted as 0.0._n_ where _n_ is incremented on each publish.

At some point I plan to move the versions to align with TailwindCSS versions for major and minor (e.g. 3.4) and increment the patch for fixes / minor tweaks (e.g. 1, 2, 3...).

### Contributors ✨

Jonathan Conway ([conwy.co](http://conwy.co))

Contributions of any kind are welcome!