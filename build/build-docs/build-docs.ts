import { readFileSync, writeFileSync } from "fs";

import { parseTailwindCssPages } from "../parse-tailwindcss-pages";

export function buildDocs() {
  const { areas } = parseTailwindCssPages();

  const modifiersPart = `
### Modifiers

${areas.map(
  (area) => `
#### ${area.title}

${area.groups
  .map(
    (group) => `
##### ${group.title}

| TailwindJS token | TailwindCSS class |
| ---------------- | ----------------- |
${group.primitives
  .map(
    (
      primitive
    ) => `|${primitive.name}|[${primitive.tailwindCssName}](${group.tailwindCssUrl})|
`
  )
  .join("")}

`
  )
  .join("")}

`
)}

  
`;

  const readmeFilePathName = `${__dirname}/../../README.md`;
  const readmeCurrentContent = readFileSync(readmeFilePathName).toString();
  const readmeBefore = readmeCurrentContent
    .split(readmeInterpolationTokenBefore)[0]
    .trim();
  const readmeAfter = readmeCurrentContent
    .split(readmeInterpolationTokenAfter)[1]
    .trim();
  const readmeNewContent = [
    readmeBefore,
    readmeInterpolationTokenBefore,
    modifiersPart,
    readmeInterpolationTokenAfter,
    readmeAfter,
  ].join("\n");
  writeFileSync(readmeFilePathName, readmeNewContent);
}

const readmeInterpolationToken = (part: "START" | "END") =>
  `<!-- INSERT GENERATED DOCS ${part} -->`;
const readmeInterpolationTokenBefore = readmeInterpolationToken("START");
const readmeInterpolationTokenAfter = readmeInterpolationToken("END");
