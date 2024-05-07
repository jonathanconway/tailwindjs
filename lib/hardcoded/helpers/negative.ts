/**
 * -{expression}
 *
 * To use a negative value, prefix the expression with a dash to convert it to a negative value.
 *
 * @param suffix
 *
 * @returns "-{expression}"
 */
export function neg(suffix: string) {
  return `-${suffix}`;
}

/**
 * -{expression}
 *
 * To use a negative value, prefix the expression with a dash to convert it to a negative value.
 *
 * @param suffix
 *
 * @returns "-{expression}"
 */
export function negative(suffix: string) {
  return neg(suffix);
}
