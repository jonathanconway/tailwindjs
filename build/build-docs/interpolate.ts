import { readFileSync, writeFileSync } from "fs";

const interpolationToken = (label: string, part: "start" | "end") =>
  `<!-- insert ${label} ${part} -->`;

export function interpolate(
  filePathName: string,
  label: string,
  value: string
) {
  const currentContent = readFileSync(filePathName).toString();

  const interpolationTokenStart = interpolationToken(label, "start");
  const currentContentBeforeStartLabel = currentContent
    .split(interpolationTokenStart)[0]
    .trim();
  const interpolationTokenEnd = interpolationToken(label, "end");
  const currentContentAfterEndLabel = currentContent
    .split(interpolationTokenEnd)[1]
    .trim();

  const newContent = [
    currentContentBeforeStartLabel,
    interpolationTokenStart,
    value,
    interpolationTokenEnd,
    currentContentAfterEndLabel,
  ].join("\n");

  writeFileSync(filePathName, newContent);
}
