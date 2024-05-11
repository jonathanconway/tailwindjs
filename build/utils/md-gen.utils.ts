import {
  Arbitrary,
  Primitive,
  UtilityArbitrary,
} from "../parse-tailwindcss-pages";

export function genMdTable(cells: readonly Record<string, string>[]) {
  if (cells.length === 0) {
    return undefined;
  }

  const columns = Object.keys(cells[0]);
  const columnHeader = [
    `| ${columns.join(" | ")} |`,
    `| ${columns.map((_) => "-----").join(" | ")} |`,
  ].join("\n");

  const rows = cells.map((row) => `| ${Object.values(row).join(" | ")} |`);

  return [columnHeader, ...rows].join("\n");
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

export function genMdBlock(heading: string, content?: string) {
  if (!content) {
    return "";
  }

  return `
### ${heading}

${content}
`;
}

export function genMdPrimitivesTable(primitives: readonly Primitive[]) {
  return genMdTable(
    primitives
      .sortBy("name")
      .map(({ name, tailwindCssName, tailwindCssUrl }) => ({
        "TailwindJS token": `\`${name}\``,
        "TailwindCSS token": `[${tailwindCssName}](${tailwindCssUrl})`,
      }))
  );
}

export function genMdArbitrariesTable(primitives: readonly Arbitrary[]) {
  return genMdTable(
    primitives
      .sortBy("name")
      .map(({ name, tailwindCssName, tailwindCssUrl }) => ({
        "TailwindJS token": `\`${name}_arbitrary\`, \`${name}_arb\``,
        "TailwindCSS token": `[${tailwindCssName}](${tailwindCssUrl})`,
      }))
  );
}

export function genMdLink(name: string, href: string) {
  return `[${name}](${href})`;
}
