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
  const fullAndWithSpaces = name.replaceAll("and", "&").replaceAll("_", " ");
  const startCased = `${fullAndWithSpaces[0].toUpperCase()}${fullAndWithSpaces
    .substring(1)
    .toLowerCase()}`;
  return startCased;
}

export function convertTitleToMdLinkHashName(title: string) {
  return title
    .toLowerCase()
    .replaceAll("&", "")
    .replaceAll("/", "")
    .replaceAll("%", "")
    .replaceAll(":", "")
    .split(" ")
    .map((word) => word.trim())
    .filter(Boolean)
    .join("-");
}

export function uniq<T extends string | number | symbol>(array: T[]) {
  const map: Partial<Record<T, boolean>> = {};
  for (const item of array) {
    map[item] = true;
  }
  return Object.keys(map) as T[];
}
