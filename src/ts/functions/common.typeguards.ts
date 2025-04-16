export const isA = <K>(collection: string[] | readonly string[], str: unknown): str is K =>
  (typeof str === "string") &&
  (collection as readonly string[]).includes(str)

export const isArrayOf = <T>(thing: unknown, typeGuard: ((t: unknown) => t is T)): thing is T[] =>
  Array.isArray(thing) && thing.every(typeGuard);

export const isMapOf = <T>(thing: unknown, typeGuard: ((t: unknown) => t is T)): thing is {  [key: string]: T } =>
  (typeof thing === 'object') &&
  (thing != null) &&
  isArrayOf(Object.values(thing), typeGuard)

export const contains = <Key extends PropertyKey, Z>(thing: unknown, fieldName: Key, example: Z):
  thing is Record<Key, Z> =>
  (typeof thing === 'object') && (thing != null) && (fieldName in thing) &&
  // @ts-ignore
  (typeof thing[fieldName] === typeof example);

export const isCarrier = <Key extends string, Z extends string>(thing: unknown, fieldName: Key, collection: Z[] | readonly Z[]):
  thing is { [fieldName in Key]: Z } =>
  (typeof thing === 'object') && (thing != null) && (fieldName in thing) &&
  // @ts-ignore
  (typeof thing[fieldName] === "string") && (collection as readonly string[]).includes(thing[fieldName as string]);
