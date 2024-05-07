export function sortBy<T>(array: readonly T[] | T[], field?: keyof T) {
  return Array.from(array).sort(function (a: T, b: T) {
    const aValue = field ? a[field] : a;
    const bValue = field ? b[field] : b;
    if (aValue < bValue) {
      return -1;
    }
    if (aValue > bValue) {
      return 1;
    }
    return 0;
  });
}

declare global {
  interface Array<T> {
    sortBy(this: T[], field?: keyof T): T[];
  }

  interface ReadonlyArray<T> {
    sortBy(this: readonly T[], field: keyof T): readonly T[];
  }
}

Array.prototype.sortBy = function (this, field?) {
  return sortBy(this, field);
};

export function uniq<T extends string | number | symbol>(array: readonly T[]) {
  const map: Partial<Record<T, boolean>> = {};
  for (const item of array) {
    map[item] = true;
  }
  return Object.keys(map) as T[];
}
