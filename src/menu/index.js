// @flow
export type MenuItem = {
  +link: string,
  +name: string,
  +code: string,
};

export type Menu = Array<MenuItem>;

export default [
  { link: '/overview', name: 'Overview', code: 'overview' },
  { link: '/wallet', name: 'Wallet', code: 'wallet' },
  { link: '/card', name: 'Card', code: 'card' },
  { link: '/settings', name: 'Settings', code: 'settings' },
];
