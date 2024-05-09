export type ImportedUtilityGroupObject = Record<string, ImportedUtility>;

export type ImportedFunction = (...inputs: string[]) => string;

export type ImportedFunctionMap = Record<string, ImportedFunction>;

export type ImportedModifier = ImportedFunction;

export type ImportedUtility = ImportedUtilityConstant | ImportedUtilityFunction;

export type ImportedUtilityConstant = string;

export type ImportedUtilityFunction = ImportedFunction;

export type ImportedUtilityMap = Record<
  string,
  ImportedUtility | ImportedUtilityGroupObject
>;

export type ImportedModifierMap = Record<string, ImportedModifier>;
