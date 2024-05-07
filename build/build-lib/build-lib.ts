import { parseTailwindCssPages } from "../parse-tailwindcss-pages";
import { mkdirIfNotExistsSync } from "../utils/dir.utils";
import { buildLibModifierGroups } from "./build-lib-modifier-groups";
import { buildLibUtilityAreas } from "./build-lib-utility-areas";

export function buildLib() {
  const definition = parseTailwindCssPages();

  mkdirIfNotExistsSync(`${__dirname}/../../lib`);

  buildLibUtilityAreas(definition);
  buildLibModifierGroups(definition);
}
