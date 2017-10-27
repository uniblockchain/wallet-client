// @flow
export type Theme = {
  background: string,
  text: string,
  altText: string,
};

export const BlueTheme: Theme = {
  background: '#c6f3ff',
  text: '#083b70',
  altText: '#02bda5',
};

export const GreenTheme: Theme = {
  background: '#e5f9f3',
  text: '#02bda5',
  altText: '#083b70',
};

export default { GreenTheme, BlueTheme };
