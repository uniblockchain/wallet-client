// @flow
export type SidebarState = {
  +open: ?boolean,
};

export const initialSidebarState: SidebarState = {
  open: false,
};

export default { initialSidebarState };
