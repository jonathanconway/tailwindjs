import { existsSync, readFileSync, writeFileSync } from "fs";

export function writeExportLineToIndex(
  indexPathFilename: string,
  exportRelativePathFilename: string,
  exportAs?: string
) {
  const indexContent = existsSync(indexPathFilename)
    ? readFileSync(indexPathFilename)
    : "";
  const exportAsPart = exportAs ? ` as ${exportAs}` : "";
  const exportStatement = `export *${exportAsPart} from "./${exportRelativePathFilename}";`;
  if (!indexContent.includes(exportStatement)) {
    writeFileSync(indexPathFilename, `${indexContent}\n${exportStatement}`);
  }
}
