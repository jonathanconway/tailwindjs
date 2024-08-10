const group_ = "group";

/**
 * group:{class} / group-{modifier}:{class}
 *
 * When you need to style an element based on the state of some parent element,
 * mark the parent with the group class, and use group-* modifiers like
 * group-hover to style the target element.
 *
 * @param modifierOrSuffix Pseudo-class modifier to target a state of {group}.
 * @param suffix Class to apply when matched.
 *
 * @constant group
 *
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
 */
export const group = (modifierOrSuffix?: string, suffix?: string) =>
  `${group_}${modifierOrSuffix && suffix ? `-${modifierOrSuffix}` : ""}:${
    suffix ?? modifierOrSuffix
  }`;

/**
 * group-[{arbitrary}]:{class}
 *
 * You can create one-off group-* modifiers on the fly by providing your own
 * selector as an arbitrary value between square brackets.
 *
 * @param arbitrary Arbitrary value with which to generate a class on the fly for the group.
 * @param suffix Class to apply when matched.
 *
 * @constant group
 *
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#arbitrary-groups
 */
export const group_arbitrary = (arbitrary: string, suffix: string) =>
  `${group_}-[${arbitrary}]:${suffix}`;

/**
 * group/name:{suffix} / group-{modifier}/name:{suffix}
 *
 * When nesting groups, you can style something based on the state of a specific parent group
 * by giving that parent a unique group name using a group/{name} class, and including that
 * name in modifiers using classes like group-hover/{name}.
 *
 * @param name Name
 * @param modifierOrSuffix Modifier if prefix-modifier:suffix syntax or suffix if prefix:suffix syntax.
 * @param suffix Class to apply when matched.
 *
 * @constant group
 *
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#differentiating-nested-groups
 */
export const group_name = (
  name: string,
  modifierOrSuffix?: string,
  suffix?: string
) =>
  `${group_}${
    modifierOrSuffix && suffix ? `-${modifierOrSuffix}` : ""
  }/${name}:${suffix ?? modifierOrSuffix}`;
