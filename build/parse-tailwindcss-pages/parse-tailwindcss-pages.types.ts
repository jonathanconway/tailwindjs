export interface Definition {
  readonly utilityAreas: readonly UtilityArea[];
  readonly modifierGroups: readonly ModifierGroup[];
}

export interface UtilityArea {
  readonly name: string;
  readonly title: string;
  readonly groups: readonly UtilityGroup[];
}

export interface UtilityGroup {
  readonly name: string;
  readonly title: string;
  readonly tailwindCssUrl: string;
  readonly description: string;
  readonly primitives: readonly UtilityPrimitive[];
  readonly arbitraries: readonly UtilityGroupArbitrary[];
}

export interface UtilityGroupArbitrary {
  readonly name: string;
  readonly tailwindCssName: string;
  readonly description: string;
  readonly tailwindCssUrl: string;
}

export interface UtilityPrimitive {
  readonly name: string;
  readonly tailwindCssName: string;
  readonly cssProperties: readonly string[];
}

export interface ModifierGroup {
  readonly name: string;
  readonly tailwindCssUrl: string;
  readonly modifiers: readonly Modifier[];
}

export interface Modifier {
  readonly name: string;
  readonly tailwindCssName: string;
  readonly cssCode: string;
  readonly description: string;
  readonly tailwindCssUrl: string;
  readonly arbitrary: boolean;
}
