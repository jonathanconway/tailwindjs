## Arbitrary

You can pass any value to the `arb` or `arbitrary` function and it will surround the value with square brackets so that TailwindCSS can recognise it as an arbitrary value.

For example: `arb(20rem)` returns `"[20rem]"`.

| TailwindJS token | TailwindCSS token                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------ |
| `arb`            | [[{expression}]](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) |
| `arbitrary`      | [[{expression}]](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) |

TailwindJS also exposes more specific `arbitrary` functions for all utilities that support arbitrary values.

For example: `h_arb(20rem)` returns `"h-[20rem]"`.
