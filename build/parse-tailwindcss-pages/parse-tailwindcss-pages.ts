import { JSDOM } from "jsdom";

import * as tailwindjsPages from "../build-tailwindcss-pages/tailwindcss-pages";
import {
  assertExists,
  assertHasElements,
  assertHasText,
  assertTruthy,
  assertType,
  convertCodeNameToTitle,
  convertTailwindCssNameToCodeName,
  isNotNil,
  uniq,
} from "../utils";
import {
  Definition,
  UtilityArea,
  UtilityGroup,
  UtilityArbitrary,
  Utility,
  ModifierGroup,
  Modifier,
  ModifierArbitrary,
} from "./parse-tailwindcss-pages.types";

type ImportedPagesModule = ImportedPage | ImportedPageGroup;

type ImportedPagesMap = Record<string, ImportedPagesModule>;

type ImportedPageGroup = Record<string, ImportedPage>;

interface ImportedPage {
  readonly url: string;
  readonly html: string;
}

const pages: ImportedPagesMap = {
  ...tailwindjsPages,
};

function isImportedPage(
  pageOrGroup: ImportedPagesModule
): pageOrGroup is ImportedPage {
  return "url" in pageOrGroup && "html" in pageOrGroup;
}

function isImportedPageGroup(
  pageOrGroup: ImportedPagesModule
): pageOrGroup is ImportedPageGroup {
  return !isImportedPage(pageOrGroup);
}

const utilityArbitraryNames: Record<string, true> = {};

export function parseTailwindCssPages(): Definition {
  const areaNames = Object.keys(pages).filter(
    (page) => !["docs", "states"].includes(page)
  );

  const areas = areaNames.map(parseLibArea);

  const modifierGroups = parseLibModifiers();

  return { utilityAreas: areas, modifierGroups };
}

function parseLibArea(areaName: string): UtilityArea {
  return {
    name: areaName,
    title: convertCodeNameToTitle(areaName),
    groups: Object.keys(pages[areaName])
      .map((groupName) => parseLibGroup(areaName, groupName))
      .filter(isNotNil),
  };
}

function getLibGroupTableType(classTableColNames: readonly string[]) {
  switch (true) {
    case classTableColNames[0] === "Class" &&
      classTableColNames[1] === "Properties":
      return "regular";
    case classTableColNames[0] === "Class" &&
      classTableColNames[1] === "Breakpoint" &&
      classTableColNames[2] === "Properties":
      return "container";
    default:
      return undefined;
  }
}

function parseLibGroup(
  areaName: string,
  groupName: string
): UtilityGroup | undefined {
  const group = pages[areaName];
  assertType<ImportedPagesModule, ImportedPageGroup>(
    group,
    isImportedPageGroup,
    "group"
  );

  const page = group[groupName];

  const jsdom = new JSDOM(page.html);

  const titleElement = jsdom.window.document.querySelector("#header h1");
  assertExists(titleElement, "title element", { titleElement });

  const title = titleElement?.textContent;
  assertHasText(title, "title element", { titleElement, title });

  const descriptionElement =
    jsdom.window.document.querySelectorAll("#header p")[1];
  assertExists(descriptionElement, "description element", {
    descriptionElement,
  });
  const description = descriptionElement?.textContent;
  assertHasText(description, "description element", { descriptionElement });

  const tailwindCssUrl = page.url;

  const classTableRows = Array.from(
    jsdom.window.document.querySelectorAll("#class-table tbody tr")
  );

  const classTableColNames = Array.from(
    jsdom.window.document.querySelectorAll("#class-table thead th div")
  )
    .map((div) => div.textContent)
    .filter(isNotNil);

  const classTableType = getLibGroupTableType(classTableColNames);
  assertTruthy(classTableType, "Unrecognised table type.", {
    areaName,
    groupName,
    classTableColNames,
  });

  const buildUtilities = {
    regular: parseLibUtilities,
    container: parseLibUtilityContainer,
  };

  const name = groupName;

  const utilities = buildUtilities[classTableType](
    groupName,
    classTableRows,
    jsdom
  );

  const arbitraries = parseLibGroupArbitraries(
    jsdom,
    utilities,
    tailwindCssUrl
  );

  return {
    name,
    title,
    description,
    utilities,
    tailwindCssUrl,
    arbitraries,
  };
}

function parseLibGroupArbitraries(
  jsdom: JSDOM,
  utilities: readonly Utility[],
  tailwindCssGroupUrl: string
): readonly UtilityArbitrary[] {
  const arbitraryHeadingElement =
    jsdom.window.document.querySelector("#arbitrary-values");
  if (!arbitraryHeadingElement) {
    return [];
  }

  const nextP = arbitraryHeadingElement.nextElementSibling; // p
  assertExists(nextP, "arbitrary description element", { nextP });

  const nextCode = nextP.nextElementSibling; // pre
  assertExists(nextCode, "arbitrary code sample", { nextCode });

  const nextCodeHighlightElement = nextCode.querySelector(".code-highlight");
  assertExists(nextCodeHighlightElement, "arbitrary code sample highlight", {
    nextCodeHighlightElement,
  });

  const nextCodeHighlight = nextCodeHighlightElement?.textContent;
  assertHasText(nextCodeHighlight, "arbitrary code sample highlight", {
    nextCodeHighlightElement,
  });

  const nextCodeHighlightPrefix = nextCodeHighlight
    .split("-[")[0]
    .split(":")
    .slice(-1)[0];

  const description = nextP.textContent ?? undefined;

  const utilityNames = utilities.map((utility) => utility.tailwindCssName);
  const utilityPrefixes = utilityNames.map((name) =>
    name.split("-").slice(0, -1).join("-")
  );

  const names = [...utilityPrefixes, nextCodeHighlightPrefix].filter((name) =>
    name.trim()
  );

  const namesUniq = uniq(names);

  const namesUniqNotAlreadyUsed = namesUniq.filter(
    (name) => !utilityArbitraryNames[name]
  );

  const tailwindCssUrl = `${tailwindCssGroupUrl}#arbitrary-values`;

  const arbitraries = namesUniqNotAlreadyUsed.map((name) => ({
    name: name.replaceAll("-", "_"),
    description,
    tailwindCssUrl,
    tailwindCssName: name,
  }));

  for (const nameNowUsed of namesUniqNotAlreadyUsed) {
    utilityArbitraryNames[nameNowUsed] = true;
  }

  return arbitraries;
}

function parseLibUtilities(
  tailwindCssUrl: string,
  classTableRows: readonly Element[],
  jsdom: JSDOM
): readonly Utility[] {
  return classTableRows.map((tr) => parseLibUtility(tailwindCssUrl, tr));
}

function parseLibUtility(tailwindCssUrl: string, tr: Element): Utility {
  const tds = Array.from(tr.children);

  const tailwindCssName = tds[0].childNodes[0].textContent;
  assertExists(tailwindCssName, "class name cell element", { tailwindCssName });

  const name = convertTailwindCssNameToCodeName(tailwindCssName);

  const cssProperties =
    tds[1].textContent
      ?.split("\n")
      .map((line) => line.trim())
      .filter(Boolean) ?? [];
  assertHasElements(cssProperties[0], "css properties", { cssProperties });

  return {
    name,
    tailwindCssName,
    tailwindCssUrl,
    cssProperties,
  };
}

function parseLibUtilityContainer(
  tailwindCssUrl: string,
  classTableRows: readonly Element[],
  jsdom: JSDOM
): readonly Utility[] {
  const name = "container";
  const tailwindCssName = name;
  const cssProperties = classTableRows.map((tr, index) => {
    const cssColIndex = index === 0 ? 2 : 1;
    const cssColText = tr.children[cssColIndex].textContent;

    const breakpointColIndex = index === 0 ? 1 : 0;
    const breakpointColText = tr.children[breakpointColIndex].textContent;

    return `${cssColText} /* Breakpoint: ${breakpointColText} */`;
  });

  const containerUtility: Utility = {
    name,
    tailwindCssName,
    tailwindCssUrl,
    cssProperties,
  };

  return [containerUtility];
}

const arbitraryNames: Record<string, true> = {};

function parseLibModifiers(): readonly ModifierGroup[] {
  assertHasText(pages.states.html, "states page", pages);
  assertType<ImportedPagesModule, ImportedPage>(
    pages.states,
    isImportedPage,
    "states page",
    { pages }
  );

  const jsdom = new JSDOM(pages.states.html);

  const quickReferenceH3 =
    jsdom.window.document.querySelector("h3#quick-reference");
  assertExists(quickReferenceH3, "quick reference heading", {
    quickReferenceH3,
  });

  const quickReferenceNextP = quickReferenceH3.nextElementSibling;
  assertExists(quickReferenceNextP, "quick reference next p", {
    quickReferenceH3,
  });

  const quickReferenceNextTable = quickReferenceNextP.nextElementSibling;
  assertExists(quickReferenceNextTable, "quick reference next table", {
    quickReferenceNextP,
  });

  const nextTrs = Array.from(
    quickReferenceNextTable.querySelectorAll("tbody tr")
  );

  const modifierGroups: ModifierGroup[] = [];

  for (const tr of nextTrs) {
    const modifiers: Modifier[] = [];
    const arbitraries: ModifierArbitrary[] = [];

    const quickRefRowCols = Array.from(tr.querySelectorAll("td"));

    const quickRefRowNameCol = quickRefRowCols[0];

    const tailwindCssName = quickRefRowNameCol.textContent;
    assertHasText(tailwindCssName, "quick reference table name column text", {
      tailwindCssNameCol: quickRefRowNameCol,
    });

    const tailwindCssLink = quickRefRowNameCol.querySelector("a");
    assertExists(tailwindCssLink, "quick reference table row link", {
      tailwindCssNameCol: quickRefRowNameCol,
    });

    const tailwindCssLinkHref = tailwindCssLink.getAttribute("href");
    assertExists(tailwindCssLinkHref, "quick reference table row link href", {
      tailwindCssLink,
    });

    const tailwindCssHashUrl = ((hash: string) => {
      switch (hash) {
        case "#selection":
          return "#highlighted-text";
        case "#placeholder":
          return "#placeholder-text";
        default:
          return hash;
      }
    })(tailwindCssLinkHref);

    const name = convertTailwindCssNameToCodeName(tailwindCssName);

    const cssCodeColumn = quickRefRowCols[1];
    assertExists(cssCodeColumn, "quick reference table css code column");
    const cssCode = cssCodeColumn.textContent;
    assertHasText(cssCode, "quick reference table css code column", {
      cssCodeColumn,
    });

    const modifierSubHeading =
      jsdom.window.document.querySelector(tailwindCssHashUrl);
    assertExists(modifierSubHeading, "modifier sub heading");

    const tailwindCssUrl = `${pages.states.url}${tailwindCssHashUrl}`;

    const descriptionElement = modifierSubHeading.nextElementSibling;
    assertExists(descriptionElement, "modifier description", {
      modifierSubHeading,
    });
    const description = descriptionElement.textContent;
    assertHasText(description, "modifier description", { descriptionElement });

    const isArbitrary = tailwindCssName.includes("[…]");
    if (isArbitrary) {
      if (arbitraryNames[name]) {
        continue;
      }

      arbitraryNames[name] = true;

      const arbitrary = {
        name,
        description,
        tailwindCssName,
        tailwindCssUrl,
      };

      arbitraries.push(arbitrary);
    } else {
      const modifier: Modifier = {
        name,
        cssCode,
        description,
        tailwindCssName,
        tailwindCssUrl,
      };

      modifiers.push(modifier);
    }

    const modifierGroup = {
      modifiers,
      arbitraries,
      name,
      tailwindCssUrl,
    };

    modifierGroups.push(modifierGroup);
  }

  return modifierGroups;
}
