export const LabelTypes = {
  Black: 'black',
  Purple: 'purple',
} as const;

export type LabelTypes =
  typeof LabelTypes[keyof typeof LabelTypes];
