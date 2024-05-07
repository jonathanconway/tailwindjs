import { Definition, UtilityArea } from "../parse-tailwindcss-pages";
import { mkdirIfNotExistsSync, writeExportLineToIndex } from "../utils";
import { buildLibUtilityGroup } from "./build-lib-utility-area-groups";
import {
  LIB_INDEX_PATH,
  LIB_UTILITIES_INDEX_PATH,
  LIB_UTILITIES_PATH,
} from "./paths";

export function buildLibUtilityAreas({ utilityAreas: areas }: Definition) {
  mkdirIfNotExistsSync(LIB_UTILITIES_PATH);

  areas.forEach(buildLibUtilityArea);

  writeExportLineToIndex(LIB_INDEX_PATH, "utilities");
}

export function buildLibUtilityArea(area: UtilityArea) {
  const areaFolderPath = `${LIB_UTILITIES_PATH}/${area.name}`;
  mkdirIfNotExistsSync(areaFolderPath);

  area.groups.forEach((group) => buildLibUtilityGroup(areaFolderPath, group));

  writeExportLineToIndex(LIB_UTILITIES_INDEX_PATH, area.name);
}
