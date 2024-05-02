export function genMdTable(cells: readonly Record<string, string>[]) {
  const columns = Object.keys(cells[0]);
  const columnHeader = [
    `| ${columns.join(" | ")} |`,
    `| ${columns.map((col) => "-----").join(" | ")} |`,
  ].join("\n");
  const rows = cells.map((row) => `| ${Object.values(row).join(" | ")} |`);
  return [columnHeader, ...rows].join("\n");
}
