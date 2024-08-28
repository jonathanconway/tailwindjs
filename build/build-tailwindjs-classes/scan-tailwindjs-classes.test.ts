import * as fs from "fs";
import * as typescript from "typescript";

import { scanTailwindJSClasses } from "./scan-tailwindjs-classes";
import { MOCK_TAILWINDJS_CLASSES } from "./scan-tailwindjs-classes.mocks";

const actualFs = jest.requireActual("fs");

jest.mock("fs", () => ({
  ...jest.requireActual("fs"),
  existsSync: jest.fn(),
  writeFileSync: jest.fn(),
  readFileSync: jest.fn(),
}));

const existsSyncSpy = jest.spyOn(fs, "existsSync").mockImplementation();
const writeFileSyncSpy = jest.spyOn(fs, "writeFileSync").mockImplementation();
const readFileSyncSpy = jest.spyOn(fs, "readFileSync").mockImplementation();

const actualTypescript = jest.requireActual("typescript");

jest.mock("typescript", () => ({
  ...jest.requireActual("typescript"),
  createProgram: jest.fn(),
}));

const createProgramSpy = jest.spyOn(typescript, "createProgram");
createProgramSpy.mockImplementation((...args) =>
  actualTypescript.createProgram(...args)
);

describe("scan-tailwindjs-classes", () => {
  beforeEach(() => {
    createProgramSpy.mockClear();
  });

  describe("scanTailwindJSClasses", () => {
    it("builds a list of tailwind classes used in js/ts code files including utilities, modifiers and arbitraries", () => {
      existsSyncSpy.mockReturnValue(false);
      readFileSyncSpy.mockImplementation((filename) =>
        actualFs.readFileSync(filename)
      );

      scanTailwindJSClasses(`${__dirname}/mocks`);

      expect(writeFileSyncSpy).toBeCalledWith(
        `${__dirname}/mocks/tailwind-js-classes.json`,
        JSON.stringify(MOCK_TAILWINDJS_CLASSES, null, 2)
      );
    });

    it("skips parsing files that have already been scanned, by comparing the recorded checksum", () => {
      existsSyncSpy.mockReturnValue(true);

      readFileSyncSpy.mockImplementation((filename) => {
        if (filename.toString().endsWith("tailwind-js-classes.json")) {
          return JSON.stringify({
            [`${__dirname}/mocks/mock_1.ts`]:
              MOCK_TAILWINDJS_CLASSES[`${__dirname}/mocks/mock_1.ts`],
          });
        }
        return actualFs.readFileSync(filename);
      });

      scanTailwindJSClasses(`${__dirname}/mocks`);

      expect(createProgramSpy).not.toBeCalledWith(
        [`${__dirname}/mocks/mock_1.ts`],
        expect.any(Object)
      );
      expect(createProgramSpy).toBeCalledWith(
        [`${__dirname}/mocks/mock_2/mock_1_1.ts`],
        expect.any(Object)
      );

      expect(writeFileSyncSpy).toBeCalledWith(
        `${__dirname}/mocks/tailwind-js-classes.json`,
        JSON.stringify(MOCK_TAILWINDJS_CLASSES, null, 2)
      );
    });
  });
});
