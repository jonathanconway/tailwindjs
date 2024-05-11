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
  readonly utilities: readonly Utility[];
  readonly arbitraries: readonly UtilityArbitrary[];
}

export interface Arbitrary extends Primitive {
  readonly description: string;
}

export interface UtilityArbitrary extends Arbitrary {}

export interface Primitive {
  readonly name: string;
  readonly tailwindCssName: string;
  readonly tailwindCssUrl: string;
}

export interface Utility extends Primitive {
  readonly cssProperties: readonly string[];
}

export interface ModifierGroup {
  readonly name: string;
  readonly title: string;
  readonly tailwindCssUrl: string;
  readonly description: string;
  readonly modifiers: readonly Modifier[];
  readonly arbitraries: readonly ModifierArbitrary[];
}

export interface Modifier extends Primitive {
  readonly cssCode: string;
  readonly description: string;
}

export interface ModifierArbitrary extends Arbitrary {}
