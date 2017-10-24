// @flow
export type MenuItem = {
  +link: string,
  +name: string,
};

export type Menu = Array<MenuItem>;

export default [
  { link: '/overview', name: 'Overview' },
  { link: '/wallet', name: 'Wallet' },
  { link: '/card', name: 'Card' },
  { link: '/marketplace', name: 'Marketplace' },
];
