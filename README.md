# tailwindjs

> Tailwind as Javascript functions for code completion and type safety.

## Table of contents

- [Introduction](#introduction)
- [Installation](#installation)
- [API](#api)
- [Contributing](#contributing)

## Introduction

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

## Installation

NPM:

```bash
npm install @jonathanconway/tailwindjs
```

Yarn:

```bash
yarn add @jonathanconway/tailwindjs
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

### Contributors ✨

Jonathan Conway ([conwy.co](http://conwy.co))

Contributions of any kind are welcome!