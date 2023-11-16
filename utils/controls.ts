// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export type Control = {
  label: string;
  type: string;
};

export const CONTROLS: Control[] = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Onion', type: 'onion' },
  { label: 'Bacon', type: 'bacon' }
];
