import { sortBy } from "./array.utils";

const MOCK_ARRAY_STRINGS = ["zza", "aaa", "222", "bbb", "111", "zzb"];

const MOCK_ARRAY_OBJECTS = MOCK_ARRAY_STRINGS.map((value) => ({ value }));

describe("array.utils", () => {
  describe("sortBy", () => {
    it("sorts array values in alphabetical order descending", () => {
      const output = sortBy(MOCK_ARRAY_STRINGS);

      expect(output).toEqual(["111", "222", "aaa", "bbb", "zza", "zzb"]);
    });

    it("sorts array by specified field in alphabetical order descending", () => {
      const output = sortBy(MOCK_ARRAY_OBJECTS, "value");

      expect(output).toEqual([
        { value: "111" },
        { value: "222" },
        { value: "aaa" },
        { value: "bbb" },
        { value: "zza" },
        { value: "zzb" },
      ]);
    });
  });
});
