export type ImportedConstant = string;

export type ImportedFunction = (...inputs: any) => string;

export type ImportedFunctionMap = Record<string, ImportedFunction>;

export type ImportedUtility = ImportedConstant | ImportedFunction;

export type ImportedUtilityGroupObject = Record<string, ImportedUtility>;

export type ImportedUtilityMap = Record<
  string,
  ImportedUtility | ImportedUtilityGroupObject
>;

export type ImportedModifier = ImportedFunction;

export type ImportedModifierGroupObject = Record<string, ImportedModifier>;

export type ImportedModifierMap = Record<
  string,
  ImportedModifier | ImportedModifierGroupObject
>;
