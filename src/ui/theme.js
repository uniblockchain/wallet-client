// @flow
export type Theme = {
  background: string,
  altBackground: string,
  main: string,
  alt: string,
  text: string,
  altText: string,
};

export const DefaultTheme: Theme = {
  background: '#e5f9f3',
  altBackground: '#c6f3ff',
  main: '#02bda5',
  alt: '#083b70',
  text: '#a1a1a1',
  altText: '#2a2a2a',
  breakpoints: {
    mobile: 0,
    landscape: 500,
    tablet: 1000,
    desktop: 1200,
  },
};

export default { DefaultTheme };
