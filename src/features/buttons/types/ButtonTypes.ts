export const ButtonTypes = {
  Black: 'black',
  White: 'white',
} as const;

export type ButtonTypes =
  typeof ButtonTypes[keyof typeof ButtonTypes];
