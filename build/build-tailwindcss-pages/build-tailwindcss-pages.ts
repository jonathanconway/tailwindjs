import { existsSync, writeFileSync, mkdirSync } from "fs";
import { JSDOM } from "jsdom";

import { convertTitleToCodeName, writeExportLineToIndex } from "../utils";

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

  // JSDOM.from
  const jsdom = new JSDOM(docsHtml);
  const h5s = Array.from(jsdom.window.document.querySelectorAll("h5"));
  const h5sUtilityAreas = h5s.filter((h5) =>
    UTILITY_AREAS.includes(h5.textContent)
  );

  for await (const h5UtilityArea of h5sUtilityAreas) {
    await buildTailwindCSSUtilityAreaPages(h5UtilityArea);
  }

  await buildTailwindCSSModifiersPage();

  await buildTailwindCSSDocsPage(docsHtml);
}

async function buildTailwindCSSDocsPage(docsHtml: string) {
  writePage(
    TAILWIND_CSS_DOCS_URL,
    `${__dirname}/tailwindcss-pages/docs.ts`,
    "docs",
    docsHtml
  );
  writeExportLineToIndex(`${__dirname}/tailwindcss-pages/index.ts`, "docs");
}

async function buildTailwindCSSUtilityAreaPages(
  h5UtilityArea: HTMLHeadingElement
) {
  const areaTitle = h5UtilityArea.textContent.trim();
  const areaName = convertTitleToCodeName(areaTitle);

  const nextElement = h5UtilityArea.nextSibling;
  const nextElementName = (nextElement as HTMLElement).tagName;
  if (nextElementName !== "UL") {
    throw new Error(
      `Expected next element after H5 to be UL. ${JSON.stringify({
        nextElementName,
        areaTitle,
      })}`
    );
  }

  const ul = nextElement as HTMLUListElement;

  const groupItems = Array.from(ul.children).map(
    (childElement) => childElement as HTMLLIElement
  );

  const groupItemLinks = groupItems.map(
    (groupItem) => groupItem.children[0] as HTMLAnchorElement
  );

  for await (const groupItemLink of groupItemLinks) {
    await buildTailwindCSSGroupPage(areaName, groupItemLink);
  }
}

async function buildTailwindCSSGroupPage(
  areaName: string,
  groupItemLink: HTMLAnchorElement
) {
  const groupPagePath = groupItemLink.attributes["href"].value;
  const groupPageUrl = `${TAILWIND_CSS_BASE_URL}${groupPagePath}`;
  const groupCodeName = convertTitleToCodeName(groupItemLink.textContent);

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

async function buildTailwindCSSModifiersPage() {
  const statesUrl = `${TAILWIND_CSS_BASE_URL}/docs/hover-focus-and-other-states`;
  const statesResponse = await fetch(statesUrl);
  const statesHtml = await statesResponse.text();

  writePage(
    statesUrl,
    `${__dirname}/tailwindcss-pages/states.ts`,
    "states",
    statesHtml
  );
  writeExportLineToIndex(`${__dirname}/tailwindcss-pages/index.ts`, "states");
}
