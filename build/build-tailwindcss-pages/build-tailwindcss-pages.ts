import { load } from "cheerio";
import { Element, isText, Text } from "domhandler";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";

import { writeExportLineToIndex } from "../code-gen.utils";
import { convertTitleToCodeName } from "../utils";

export const TAILWIND_CSS_BASE_URL = "https://tailwindcss.com";

export const TAILWIND_CSS_DOCS_URL = `${TAILWIND_CSS_BASE_URL}/docs/installation`;

const UTILITY_AREAS = [
  "Layout",
  "Flexbox & Grid",
  "Spacing",
  "Sizing",
  "Typography",
  "Backgrounds",
  "Borders",
  "Effects",
  "Filters",
  "Tables",
  "Transitions & Animation",
  "Transforms",
  "Interactivity",
  "SVG",
  "Accessibility",
];

function writePage(
  url: string,
  filePathAndName: string,
  codeName: string,
  html: string
) {
  writeFileSync(
    filePathAndName,
    `export const ${codeName} = {
  url: ${JSON.stringify(url)},
  html: ${JSON.stringify(html)},
}`
  );
}

export async function buildTailwindCSSPages() {
  const docsResponse = await fetch(TAILWIND_CSS_DOCS_URL);
  const docsHtml = await docsResponse.text();

  const $ = load(docsHtml);
  const h5s = Array.from($("h5"));
  const h5sUtilityAreas = h5s.filter((h5) =>
    UTILITY_AREAS.includes((h5.children[0] as any).data)
  );

  writePage(
    TAILWIND_CSS_DOCS_URL,
    `${__dirname}/tailwindcss-pages/docs.ts`,
    "docs",
    docsHtml
  );
  writeExportLineToIndex(`${__dirname}/tailwindcss-pages/index.ts`, "docs");

  for await (const h5UtilityArea of h5sUtilityAreas) {
    await buildTailwindCSSUtilityAreaPages(h5UtilityArea);
  }
}

async function buildTailwindCSSUtilityAreaPages(h5UtilityArea: Element) {
  const areaTextNode = h5UtilityArea.childNodes.find((childNode) =>
    isText(childNode)
  ) as Text;

  const areaTitle = areaTextNode.data;
  const areaName = convertTitleToCodeName(areaTitle);

  const nextElement = h5UtilityArea.nextSibling as Element;
  const nextElementName = nextElement.name;
  if (nextElementName !== "ul") {
    throw new Error(
      `Expected next element after H5 to be UL. ${JSON.stringify({
        nextElementName,
        areaTitle,
      })}`
    );
  }

  const groupItems = nextElement.children.map(
    (childElement) => childElement as Element
  );

  const groupItemLinks = groupItems.map(
    (groupItem) => groupItem.children[0] as Element
  );

  for await (const groupItemLink of groupItemLinks) {
    await buildTailwindCSSGroupPage(areaName, groupItemLink);
  }
}

async function buildTailwindCSSGroupPage(
  areaName: string,
  groupItemLink: Element
) {
  const groupPagePath = groupItemLink.attribs["href"];
  const groupPageUrl = `${TAILWIND_CSS_BASE_URL}${groupPagePath}`;
  const groupCodeName = convertTitleToCodeName(
    (groupItemLink.children[0] as Text).data.toString()
  );

  const areaFolderPathAndName = `${__dirname}/tailwindcss-pages/${areaName}`;
  if (!existsSync(areaFolderPathAndName)) {
    mkdirSync(areaFolderPathAndName);
  }
  writeExportLineToIndex(
    `${__dirname}/tailwindcss-pages/index.ts`,
    areaName,
    areaName
  );

  const groupPathFilename = `${areaFolderPathAndName}/${groupCodeName}.ts`;

  const groupPageResponse = await fetch(groupPageUrl);
  const groupPageHtml = await groupPageResponse.text();

  writePage(groupPageUrl, groupPathFilename, groupCodeName, groupPageHtml);
  writeExportLineToIndex(
    `${__dirname}/tailwindcss-pages/${areaName}/index.ts`,
    groupCodeName
  );
}
