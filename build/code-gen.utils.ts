import { existsSync, readFileSync, writeFileSync } from "fs";

function genIndexExportLine(
  exportRelativePathFilename: string,
  exportAs?: string
) {
  const exportAsPart = exportAs ? ` as ${exportAs}` : "";
  const exportStatement = `export *${exportAsPart} from "./${exportRelativePathFilename}";`;
  return exportStatement;
}

export function writeExportLineToIndex(
  indexPathFilename: string,
  exportRelativePathFilename: string,
  exportAs?: string
) {
  const indexContent = existsSync(indexPathFilename)
    ? readFileSync(indexPathFilename)
    : "";

  const exportStatement = genIndexExportLine(
    exportRelativePathFilename,
    exportAs
  );

  if (!indexContent.includes(exportStatement)) {
    writeFileSync(
      indexPathFilename,
      [indexContent, exportStatement].join("\n")
    );
  }
}
