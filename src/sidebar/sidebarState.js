// @flow
export type SidebarState = {
  +open: boolean,
  +path: ?string,
};

export const initialSidebarState: SidebarState = {
  open: false,
  path: null,
};

export default { initialSidebarState };
