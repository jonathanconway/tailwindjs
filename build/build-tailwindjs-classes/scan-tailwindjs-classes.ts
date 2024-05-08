import { readdirSync, statSync, writeFileSync } from "fs";
import { resolve } from "path";
import {
  JsxEmit,
  createProgram,
  isImportDeclaration,
  isImportSpecifier,
  isNamedImports,
  Node,
  SourceFile,
  isCallExpression,
  isIdentifier,
  CallExpression,
  isLiteralExpression,
} from "typescript";

import * as tailwindjs from "../../lib";
import * as tailwindjsHelpersGenerated from "../../lib/hardcoded/helpers";
import { cn } from "../../lib/hardcoded/helpers";
import * as tailwindjsModifiersHarcoded from "../../lib/hardcoded/modifiers";
import * as tailwindjsModifiersGenerated from "../../lib/modifiers";
import * as tailwindjsUtilitiesGenerated from "../../lib/utilities";
import { PROJECT_NAME } from "../constants";
import "../utils/array.utils";

const modifiers = {
  ...tailwindjsModifiersGenerated,
  ...tailwindjsModifiersHarcoded,
};

const modifierNames = Object.keys(modifiers);

const utilities = {
  ...tailwindjsUtilitiesGenerated,
};

const utilityNames = Object.keys(utilities);

const utilityConstantNames = utilityNames.filter(
  (utilityName) => typeof utilities[utilityName] !== "function"
);

const helpers = {
  ...tailwindjsHelpersGenerated,
};

const helperNames = Object.keys(helpers);

const modifierOrUtilityFunctionNames = [
  ...modifierNames,
  ...utilityNames,
  ...helperNames,
].filter((objectName) => typeof tailwindjs[objectName] === "function");

function parseExpression(
  sourceFile: SourceFile,
  tailwindJSImportSpecifiers: readonly string[],
  node: Node,
  isArgument: boolean
): string | undefined {
  // e.g. size_1
  if (isIdentifier(node)) {
    const nodeArgumentText = node.escapedText.toString();

    if (!tailwindJSImportSpecifiers.includes(nodeArgumentText)) {
      return;
    }

    if (!utilityConstantNames.includes(nodeArgumentText)) {
      return;
    }

    const utilityCodeName = nodeArgumentText;
    const utilityCSSName = tailwindjs[utilityCodeName];
    return utilityCSSName;
  }

  // e.g. "0.95rem"
  if (isArgument && isLiteralExpression(node)) {
    const literalText = node.getText(sourceFile);
    return literalText;
  }

  // e.g. dark(text_stone_50)
  // e.g. size_arb("0.95rem")
  if (isCallExpression(node)) {
    const nodeArgumentExpressionText = node.expression.getText(sourceFile);

    if (!tailwindJSImportSpecifiers.includes(nodeArgumentExpressionText)) {
      return;
    }

    if (!modifierOrUtilityFunctionNames.includes(nodeArgumentExpressionText)) {
      return;
    }

    const modifierCodeName = nodeArgumentExpressionText;
    const modifierFn = tailwindjs[modifierCodeName];
    return parseModifierCallExpression(
      sourceFile,
      tailwindJSImportSpecifiers,
      node,
      modifierFn
    );
  }
}

function parseModifierCallExpression(
  sourceFile: SourceFile,
  tailwindJSImportSpecifiers: readonly string[],
  node: CallExpression,
  modifierFn?: (...inputs) => string
): string {
  const modifierArgs = [];

  for (const nodeArgument of node.arguments) {
    const result = parseExpression(
      sourceFile,
      tailwindJSImportSpecifiers,
      nodeArgument,
      true
    );
    if (!result) {
      break;
    }
    modifierArgs.push(result);
  }

  if (modifierFn) {
    return modifierFn(...modifierArgs);
  } else {
    return cn(...modifierArgs);
  }
}

function walkNodes(
  sourceFile: SourceFile,
  tailwindJSImportSpecifiers: readonly string[],
  nodes: readonly Node[]
): readonly string[] {
  const tailwindCSSClasses = [];
  for (const node of nodes) {
    tailwindCSSClasses.push(
      parseExpression(sourceFile, tailwindJSImportSpecifiers, node, false)
    );

    tailwindCSSClasses.push(
      ...walkNodes(
        sourceFile,
        tailwindJSImportSpecifiers,
        node.getChildren(sourceFile)
      )
    );
  }

  return tailwindCSSClasses
    .filter(Boolean)
    .flatMap((str) =>
      str
        .split(" ")
        .map((substr) => substr?.trim())
        .filter(Boolean)
    )
    .filter(Boolean);
}

export function scanTailwindJSClasses(
  inputDir: string,
  outputDirFilename?: string
) {
  if (!outputDirFilename) {
    outputDirFilename = `${inputDir}/tailwind-js-classes.json`;
  }

  const files = getFiles(inputDir, ["ts", "js"]).slice(0, 10);

  const tailwindCSSClasses = [];

  for (const file of files) {
    const contentsAst = createProgram([file], {
      allowJs: true,
      jsx: JsxEmit.React,
    });

    const sourceFile = contentsAst.getSourceFile(file);

    const imports = sourceFile.statements.filter(isImportDeclaration);

    const importsTailwindJS = imports.filter(
      (declaration) =>
        (declaration.moduleSpecifier as any).text === PROJECT_NAME
    );

    const tailwindJSImportSpecifiers = importsTailwindJS
      .map((import_) => import_.importClause?.namedBindings)
      .filter(isNamedImports)
      .flatMap((binding) => binding.elements)
      .filter(isImportSpecifier)
      .map((importSpecifier) => importSpecifier.name.escapedText.toString());

    tailwindCSSClasses.push(
      ...walkNodes(
        sourceFile,
        tailwindJSImportSpecifiers,
        sourceFile.getChildren(sourceFile)
      )
    );
  }

  const tailwindCSSClassesUniqSorted = tailwindCSSClasses.uniq().sort();

  writeFileSync(
    outputDirFilename,
    JSON.stringify(tailwindCSSClassesUniqSorted)
  );
}

function getFiles(dir: string, extensions: readonly string[]) {
  const subdirs = readdirSync(dir);
  const files = subdirs.map((subdir) => {
    const res = resolve(dir, subdir);
    return statSync(res).isDirectory() ? getFiles(res, extensions) : res;
  });
  return files
    .reduce((a, f) => a.concat(f), [])
    .filter((file) =>
      extensions.find((extension) => file.endsWith(`.${extension}`))
    );
}

// // todo: remove
// scanTailwindJSClasses(
//   __dirname + "/../../build/build-tailwindjs-classes/mocks"
// );
