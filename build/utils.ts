export function convertTitleToCodeName(title: string) {
  return title
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll("/", "")
    .split(" ")
    .map((word) => word.trim())
    .filter(Boolean)
    .join("_")
    .replaceAll("-", "_");
}

export function convertCodeNameToTitle(name: string) {
  const fullAndWithSpaces = name.replaceAll("and", "&").replaceAll("_", " ");
  const startCased = `${fullAndWithSpaces[0].toUpperCase()}${fullAndWithSpaces
    .substring(1)
    .toLowerCase()}`;
  return startCased;
}
