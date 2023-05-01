import { AREAS_MOCK } from "./areas.mock";
import { TAILWIND_CSS_DOCS_URL, fetchTailwindCSSDocs } from "./build-lib";
import { TAILWIND_DOCS_HTML_MOCK } from "./tailwind-docs-html.mock";

const RESPONSE_MOCKS = {
  [TAILWIND_CSS_DOCS_URL]: TAILWIND_DOCS_HTML_MOCK,
};

beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementation((url: string) =>
    Promise.resolve({
      text: jest.fn().mockResolvedValue(RESPONSE_MOCKS[url]),
    } as any)
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("parse-groups", () => {
  describe("parse", () => {
    it("fetchTailwindCSSDocs", async () => {
      const areas = await fetchTailwindCSSDocs();
      console.log(JSON.stringify(areas));
      expect(areas).toEqual(AREAS_MOCK);
    });
  });
});
