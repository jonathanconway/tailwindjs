import {
  cn,
  flex,
  flex_col,
  font_bold,
  gap_1,
  gap_4,
  list_none,
  overflow_hidden,
  text_ellipsis,
  text_sm,
  whitespace_nowrap,
  dark,
  text_stone_50,
  text_stone_950,
  font_medium,
  text_stone_500,
  text_xs,
  uppercase,
  m_2_5,
} from "@jonathanconway/tailwindjs";

export const label = cn(uppercase, text_stone_500, text_xs, font_medium);

export const text = cn(text_stone_950, dark(text_stone_50));

export const container = cn(flex, flex_col, gap_4);

export const list = cn(list_none, flex, flex_col, gap_1);

export const listItem = cn(flex);

export const link = (selected: boolean) =>
  cn(
    selected ? cn(text, font_bold) : link,
    whitespace_nowrap,
    text_ellipsis,
    overflow_hidden,
    text_sm
  );

export const foo = m_2_5;
