# tailwindjs

> Tailwind as Javascript functions for code completion and type safety.

```tsx
import { cn, p_4, text_lg } from "@jonathanconway/tailwindjs";

...

<span className={cn(p_4, text_lg)}>TailwindJS!</span>
```

## Table of contents

- [Introduction](#introduction)
- [Getting started](#getting-started)
- [Usage](#usage)
- [API reference](#api-reference)
- [Contributing](#contributing)

## Introduction

TailwindJS is a Javascript/Typescript library that exposes [TailwindCSS](https://tailwindcss.com) classes as Javascript objects.

### What TailwindJS provides

TailwindJS exposes:

- **All TailwindCSS utilities** as simple constants, e.g. `h_10` => `h-10`
- **All TailwindCSS modifiers** as functions, e.g. `dark(bg_stone_900)` => `dark:bg-stone-900`

Additionally TailwindJS provides:

- **Arbitraries** - e.g. `h_arb("30rem")`
- **Helpers** - e.g. negative values (`neg`), class name joiner (`classNames`).

### Benefits of using TailwindJS

- Runtime checking of Javascript objects to quickly identify typos and errors
- Build-time checking of Typescript (and Javascript if you use a build tool)
- Auto-suggestion and auto-completion features in your IDE (e.g. Intellisense in VS Code)
- Composability with modifiers/helpers without direct string manipulation

## Getting started

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

If you use TailwindJS with a build system such as Webpack, [NextJS](http://nextjs.org) or [React](http://reactjs.org), you'll need to set up [class detection](https://tailwindcss.com/docs/content-configuration#class-detection-in-depth). This is so Tailwind knows the list of classes your app code uses and can include them in the build.

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

## Usage

### Utilities

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

### Modifiers

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

### Aribtraries

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

## API reference

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

- [attribute_selectors](./docs/modifiers/attribute_selectors.md)
- [media_feature_queries](./docs/modifiers/media_feature_queries.md)
- [pseudo_classes](./docs/modifiers/pseudo_classes.md)
- [pseudo_elements](./docs/modifiers/pseudo_elements.md)

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
