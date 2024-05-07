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

export function prepareComment(input: string) {
  return input.replaceAll("/", "\\/").replaceAll("@", "\\@");
}

export function convertTitleToCodeName(title: string) {
  return title
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll("/", "")
    .replaceAll("%", "_pc")
    .split(" ")
    .map((word) => word.trim())
    .filter(Boolean)
    .join("_")
    .replaceAll(":", "_")
    .replaceAll("-", "_");
}

const RESERVED_WORDS = ["default", "static"];

export function convertTailwindCssNameToCodeName(input: string) {
  input = input
    .replaceAll(".", "_")
    .replaceAll("/", "_on_")
    .replaceAll("%", "_pc")
    .replaceAll("[…]", "arbitrary")
    .replaceAll(":", "_")
    .replaceAll("-", "_");

  while (input.endsWith("_")) {
    input = input = input.substring(0, input.length - 1);
  }

  for (const reservedWord of RESERVED_WORDS) {
    if (input === reservedWord) {
      input += "_";
    }
  }

  if (input === "*") {
    input = "all";
  }

  if (!isNaN(Number(input[0]))) {
    input = `_${input}`;
  }

  return input;
}

export function convertCodeNameToTitle(name: string) {
  const fullAndWithSpaces = name
    .replaceAll(" and ", " & ")
    .replaceAll("_", " ")
    .trim();
  const startCased = `${fullAndWithSpaces[0].toUpperCase()}${fullAndWithSpaces
    .substring(1)
    .toLowerCase()}`;
  return startCased;
}
