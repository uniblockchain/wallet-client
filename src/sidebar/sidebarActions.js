// @flow
export const SIDEBAR_STATE_UPDATED = '@sidebar/SIDEBAR_STATE_UPDATED';

export type SidebarStateUpdate = {
  +type: '@sidebar/SIDEBAR_STATE_UPDATED',
  +open: boolean,
};

export const openSidebar = (open: boolean): SidebarStateUpdate => ({
  type: SIDEBAR_STATE_UPDATED,
  open,
});

export default { openSidebar };
