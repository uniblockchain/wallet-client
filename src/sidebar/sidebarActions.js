// @flow
export const SIDEBAR_STATE_UPDATED = '@sidebar/SIDEBAR_STATE_UPDATED';

export type SidebarStateUpdate = {
  +type: '@sidebar/SIDEBAR_STATE_UPDATED',
  +open: boolean,
  +path: string,
};

export const openSidebar = (
  open: boolean,
  path: string,
): SidebarStateUpdate => ({
  type: SIDEBAR_STATE_UPDATED,
  open,
  path,
});

export default { openSidebar };
