import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "fs";
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
import {
  generateChecksum,
  ImportedFunctionMap,
  ImportedModifier,
  ImportedModifierMap,
  ImportedUtilityMap,
  isNotNil,
  uniq,
  verifyChecksum,
} from "../utils";
import "../utils/array.utils";

const tailwindjsAll: ImportedUtilityMap = {
  ...tailwindjs,
};

const modifiers: ImportedModifierMap = {
  ...tailwindjsModifiersGenerated,
  ...tailwindjsModifiersHarcoded,
};

const modifierNames = Object.keys(modifiers);

const utilities: ImportedUtilityMap = {
  ...tailwindjsUtilitiesGenerated,
};

const utilityNames = Object.keys(utilities);

const utilityConstantNames = utilityNames.filter(
  (utilityName) => typeof utilities[utilityName] !== "function"
);

const helpers: ImportedFunctionMap = {
  ...tailwindjsHelpersGenerated,
};

const helperNames = Object.keys(helpers);

const modifierOrUtilityFunctionNames = [
  ...modifierNames,
  ...utilityNames,
  ...helperNames,
].filter((objectName) => typeof tailwindjsAll[objectName] === "function");

export interface TailwindJSClasses {
  readonly [filePathName: string]: {
    readonly checksum: string;
    readonly classNames: readonly string[];
  };
}

function readTailwindJSClasses(filePathName: string) {
  if (!existsSync(filePathName)) {
    return {} as TailwindJSClasses;
  }
  return JSON.parse(readFileSync(filePathName).toString()) as TailwindJSClasses;
}

export function scanTailwindJSClasses(
  inputDir: string,
  outputDirFilename?: string
) {
  if (!outputDirFilename) {
    outputDirFilename = `${inputDir}/tailwind-js-classes.json`;
  }

  const previousCache = readTailwindJSClasses(outputDirFilename);
  const newCache = { ...previousCache };

  const files = getFiles(inputDir, ["ts", "js"]);

  const tailwindCSSClasses: string[] = [];

  for (const file of files) {
    // Is the file unchanged? If so, skip.
    const fileContents = readFileSync(file).toString().trim();

    if (
      previousCache[file] &&
      verifyChecksum(fileContents, previousCache[file].checksum)
    ) {
      console.log(`${file} is unchanged.`);

      tailwindCSSClasses.push(...previousCache[file].classNames);

      continue;
    }

    const contentsAst = createProgram([file], {
      allowJs: true,
      jsx: JsxEmit.React,
    });

    const sourceFile = contentsAst.getSourceFile(file);

    if (!sourceFile) {
      continue;
    }

    const imports = sourceFile?.statements.filter(isImportDeclaration) ?? [];

    const importsTailwindJS = imports.filter(
      (declaration) =>
        (declaration.moduleSpecifier as any).text === PROJECT_NAME
    );

    const tailwindJSImportSpecifiers = importsTailwindJS
      .map((import_) => import_.importClause?.namedBindings)
      .filter(isNotNil)
      .filter(isNamedImports)
      .flatMap((binding) => binding.elements)
      .filter(isImportSpecifier)
      .map((importSpecifier) => importSpecifier.name.escapedText.toString());

    const classNames = uniq(
      walkNodes(
        sourceFile,
        tailwindJSImportSpecifiers,
        sourceFile.getChildren(sourceFile)
      ).filter((className) => !tailwindCSSClasses.includes(className))
    );

    tailwindCSSClasses.push(...classNames);

    newCache[file] = {
      ...(previousCache[file] ?? {}),
      checksum: generateChecksum(fileContents),
      classNames,
    };
  }

  writeFileSync(outputDirFilename, JSON.stringify(newCache, null, 2));
}

function getFiles(dir: string, extensions: readonly string[]): string[] {
  const subdirs = readdirSync(dir);
  const files = subdirs.map((subdir) => {
    const res = resolve(dir, subdir);
    return statSync(res).isDirectory() ? getFiles(res, extensions) : res;
  });
  return files
    .reduce((a: string[], f: string | string[]) => a.concat(f), [])
    .filter((file: string) =>
      extensions.find((extension) => file.endsWith(`.${extension}`))
    );
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

  return (tailwindCSSClasses
    ?.filter(Boolean)
    ?.flatMap((str?: string) =>
      str
        ?.split(" ")
        ?.map((substr) => substr?.trim())
        ?.filter(Boolean)
    )
    ?.filter(Boolean) ?? []) as string[];
}

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
    const utilityCSSName = String(tailwindjsAll[utilityCodeName]);
    return utilityCSSName;
  }

  // e.g. "0.95rem"
  if (isArgument && isLiteralExpression(node)) {
    const literalText = node.getText(sourceFile);
    const argumentText = literalText.replaceAll('"', "");
    return argumentText;
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
    const modifierFn = tailwindjsAll[modifierCodeName] as ImportedModifier;

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
  modifierFn?: ImportedModifier
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
