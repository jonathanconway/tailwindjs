import { parseTailwindCssPages } from "../parse-tailwindcss-pages";
import { buildDocsModifiers } from "./build-docs-modifiers";
import { buildDocsReadmeIndex } from "./build-docs-readme-index";
import { buildDocsUtilities } from "./build-docs-utilities";

export function buildDocs() {
  const definition = parseTailwindCssPages();

  buildDocsUtilities(definition);
  buildDocsModifiers(definition);
  buildDocsReadmeIndex(definition);
}
