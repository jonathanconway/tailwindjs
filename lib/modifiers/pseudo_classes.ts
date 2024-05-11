

/**
 * hover
 * 
 * Style an element when the user hovers over it with the mouse cursor using the hover modifier.
 *
 * CSS:
 * - &:hover
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#hover
 *
 * @type modifier
 */
export const hover = (suffix: string) => `hover:${suffix}`;


/**
 * focus
 * 
 * Style an element when it has focus using the focus modifier.
 *
 * CSS:
 * - &:focus
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#focus
 *
 * @type modifier
 */
export const focus = (suffix: string) => `focus:${suffix}`;


/**
 * focus-within
 * 
 * Style an element when it or one of its descendants has focus using the focus-within modifier.
 *
 * CSS:
 * - &:focus-within
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#focus-within
 *
 * @type modifier
 */
export const focus_within = (suffix: string) => `focus-within:${suffix}`;


/**
 * focus-visible
 * 
 * Style an element when it has been focused using the keyboard using the focus-visible modifier.
 *
 * CSS:
 * - &:focus-visible
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#focus-visible
 *
 * @type modifier
 */
export const focus_visible = (suffix: string) => `focus-visible:${suffix}`;


/**
 * active
 * 
 * Style an element when it is being pressed using the active modifier.
 *
 * CSS:
 * - &:active
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#active
 *
 * @type modifier
 */
export const active = (suffix: string) => `active:${suffix}`;


/**
 * visited
 * 
 * Style a link when it has already been visited using the visited modifier.
 *
 * CSS:
 * - &:visited
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#visited
 *
 * @type modifier
 */
export const visited = (suffix: string) => `visited:${suffix}`;


/**
 * target
 * 
 * Style an element if its ID matches the current URL fragment using the target modifier.
 *
 * CSS:
 * - &:target
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#target
 *
 * @type modifier
 */
export const target = (suffix: string) => `target:${suffix}`;


/**
 * *
 * 
 * While it’s generally preferable to put utility classes directly on child elements, you can use the * modifier in situations where you need to style direct children that you don’t have control over.
 *
 * CSS:
 * - & > *
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#styling-direct-children
 *
 * @type modifier
 */
export const all = (suffix: string) => `*:${suffix}`;


/**
 * has
 * 
 * Use the has-* modifier to style an element based on the state or content of its descendants.
 *
 * CSS:
 * - &:has
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-descendants
 *
 * @type modifier
 */
export const has = (suffix: string) => `has:${suffix}`;


/**
 * first
 * 
 * Style an element if it’s the first child using the first modifier.
 *
 * CSS:
 * - &:first-child
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#first
 *
 * @type modifier
 */
export const first = (suffix: string) => `first:${suffix}`;


/**
 * last
 * 
 * Style an element if it’s the last child using the last modifier.
 *
 * CSS:
 * - &:last-child
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#last
 *
 * @type modifier
 */
export const last = (suffix: string) => `last:${suffix}`;


/**
 * only
 * 
 * Style an element if it’s the only child using the only modifier.
 *
 * CSS:
 * - &:only-child
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#only
 *
 * @type modifier
 */
export const only = (suffix: string) => `only:${suffix}`;


/**
 * odd
 * 
 * Style an element if it’s an oddly numbered child using the odd modifier.
 *
 * CSS:
 * - &:nth-child(odd)
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#odd
 *
 * @type modifier
 */
export const odd = (suffix: string) => `odd:${suffix}`;


/**
 * even
 * 
 * Style an element if it’s an evenly numbered child using the even modifier.
 *
 * CSS:
 * - &:nth-child(even)
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#even
 *
 * @type modifier
 */
export const even = (suffix: string) => `even:${suffix}`;


/**
 * first-of-type
 * 
 * Style an element if it’s the first child of its type using the first-of-type modifier.
 *
 * CSS:
 * - &:first-of-type
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#first-of-type
 *
 * @type modifier
 */
export const first_of_type = (suffix: string) => `first-of-type:${suffix}`;


/**
 * last-of-type
 * 
 * Style an element if it’s the last child of its type using the last-of-type modifier.
 *
 * CSS:
 * - &:last-of-type
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#last-of-type
 *
 * @type modifier
 */
export const last_of_type = (suffix: string) => `last-of-type:${suffix}`;


/**
 * only-of-type
 * 
 * Style an element if it’s the only child of its type using the only-of-type modifier.
 *
 * CSS:
 * - &:only-of-type
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#only-of-type
 *
 * @type modifier
 */
export const only_of_type = (suffix: string) => `only-of-type:${suffix}`;


/**
 * empty
 * 
 * Style an element if it has no content using the empty modifier.
 *
 * CSS:
 * - &:empty
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#empty
 *
 * @type modifier
 */
export const empty = (suffix: string) => `empty:${suffix}`;


/**
 * disabled
 * 
 * Style an input when it’s disabled using the disabled modifier.
 *
 * CSS:
 * - &:disabled
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#disabled
 *
 * @type modifier
 */
export const disabled = (suffix: string) => `disabled:${suffix}`;


/**
 * enabled
 * 
 * Style an input when it’s enabled using the enabled modifier, most helpful when you only want to apply another style when an element is not disabled.
 *
 * CSS:
 * - &:enabled
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#enabled
 *
 * @type modifier
 */
export const enabled = (suffix: string) => `enabled:${suffix}`;


/**
 * checked
 * 
 * Style a checkbox or radio button when it’s checked using the checked modifier.
 *
 * CSS:
 * - &:checked
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#checked
 *
 * @type modifier
 */
export const checked = (suffix: string) => `checked:${suffix}`;


/**
 * indeterminate
 * 
 * Style a checkbox or radio button in an indeterminate state using the indeterminate modifier.
 *
 * CSS:
 * - &:indeterminate
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#indeterminate
 *
 * @type modifier
 */
export const indeterminate = (suffix: string) => `indeterminate:${suffix}`;


/**
 * default
 * 
 * Style an option, checkbox or radio button that was the default value when the page initially loaded using the default modifier.
 *
 * CSS:
 * - &:default
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#default
 *
 * @type modifier
 */
export const default_ = (suffix: string) => `default:${suffix}`;


/**
 * required
 * 
 * Style an input when it’s required using the required modifier.
 *
 * CSS:
 * - &:required
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#required
 *
 * @type modifier
 */
export const required = (suffix: string) => `required:${suffix}`;


/**
 * valid
 * 
 * Style an input when it’s valid using the valid modifier.
 *
 * CSS:
 * - &:valid
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#valid
 *
 * @type modifier
 */
export const valid = (suffix: string) => `valid:${suffix}`;


/**
 * invalid
 * 
 * Style an input when it’s invalid using the invalid modifier.
 *
 * CSS:
 * - &:invalid
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#invalid
 *
 * @type modifier
 */
export const invalid = (suffix: string) => `invalid:${suffix}`;


/**
 * in-range
 * 
 * Style an input when its value is within a specified range limit using the in-range modifier.
 *
 * CSS:
 * - &:in-range
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#in-range
 *
 * @type modifier
 */
export const in_range = (suffix: string) => `in-range:${suffix}`;


/**
 * out-of-range
 * 
 * Style an input when its value is outside of a specified range limit using the out-of-range modifier.
 *
 * CSS:
 * - &:out-of-range
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#out-of-range
 *
 * @type modifier
 */
export const out_of_range = (suffix: string) => `out-of-range:${suffix}`;


/**
 * placeholder-shown
 * 
 * Style an input when the placeholder is shown using the placeholder-shown modifier.
 *
 * CSS:
 * - &:placeholder-shown
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#placeholder-shown
 *
 * @type modifier
 */
export const placeholder_shown = (suffix: string) => `placeholder-shown:${suffix}`;


/**
 * autofill
 * 
 * Style an input when it has been autofilled by the browser using the autofill modifier.
 *
 * CSS:
 * - &:autofill
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#autofill
 *
 * @type modifier
 */
export const autofill = (suffix: string) => `autofill:${suffix}`;


/**
 * read-only
 * 
 * Style an input when it is read-only using the read-only modifier.
 *
 * CSS:
 * - &:read-only
 *
 * @param suffix Utility to modify
 * 
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#read-only
 *
 * @type modifier
 */
export const read_only = (suffix: string) => `read-only:${suffix}`;



/**
 * Pseudo classes
 * 
 * Pseudo-classes, like :hover, :focus, :first-child, and :required
 *
 * @see https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-classes
 */
export const pseudo_classes_modifiers = {
  hover,
  focus,
  focus_within,
  focus_visible,
  active,
  visited,
  target,
  all,
  has,
  first,
  last,
  only,
  odd,
  even,
  first_of_type,
  last_of_type,
  only_of_type,
  empty,
  disabled,
  enabled,
  checked,
  indeterminate,
  default_,
  required,
  valid,
  invalid,
  in_range,
  out_of_range,
  placeholder_shown,
  autofill,
  read_only
};

