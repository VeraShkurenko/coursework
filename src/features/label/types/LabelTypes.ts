export const LabelTypes = {
  Black: 'black',
  Purple: 'purple',
  Red: 'red',
} as const;

export type LabelTypes =
  typeof LabelTypes[keyof typeof LabelTypes];
