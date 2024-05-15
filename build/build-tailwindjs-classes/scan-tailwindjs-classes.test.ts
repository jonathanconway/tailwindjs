import * as fs from "fs";

import { scanTailwindJSClasses } from "./scan-tailwindjs-classes";

jest.mock("fs", () => ({
  ...jest.requireActual("fs"),
  writeFileSync: jest.fn(),
}));

const writeFileSyncSpy = jest.spyOn(fs, "writeFileSync").mockImplementation();

describe("scan-tailwindjs-classes", () => {
  describe("scanTailwindJSClasses", () => {
    it("builds a list of tailwind classes used in js/ts code files including utilities, modifiers and arbitraries", () => {
      scanTailwindJSClasses(`${__dirname}/mocks`);

      expect(writeFileSyncSpy).toBeCalledWith(
        `${__dirname}/mocks/tailwind-js-classes.json`,
        JSON.stringify([
          "absolute",
          "bottom-3",
          "container",
          "dark:text-stone-50",
          "dark:text-stone-500",
          "dark:w-[30rem]",
          "dark:xl:font-bold",
          "flex",
          "flex-col",
          "font-bold",
          "font-medium",
          "gap-1",
          "gap-3",
          "gap-4",
          "group:undefined",
          "h-14",
          "h-[25rem]",
          "inline-block",
          "lg:h-[25rem]",
          "list-none",
          "m-2.5",
          "md:dark:w-[30rem]",
          "overflow-hidden",
          "right-3",
          "rounded-md",
          "size-[0.95rem]",
          "text-ellipsis",
          "text-sm",
          "text-stone-400",
          "text-stone-50",
          "text-stone-500",
          "text-stone-950",
          "text-xs",
          "underline",
          "uppercase",
          "w-16",
          "w-[30rem]",
          "whitespace-nowrap",
          "xl:font-bold",
        ])
      );
    });
  });
});
