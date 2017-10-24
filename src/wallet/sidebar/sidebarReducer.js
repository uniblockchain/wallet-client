// @flow

import { initialSidebarState, type SidebarState } from './sidebarState';
import {
  SIDEBAR_STATE_UPDATED,
  type SidebarStateUpdate,
} from './sidebarActions';

export const sidebarReducer = (
  state: SidebarState = initialSidebarState,
  action: SidebarStateUpdate,
): SidebarState => {
  switch (action.type) {
    case SIDEBAR_STATE_UPDATED:
      return {
        ...state,
        open: action.open,
      };

    default:
      return state;
  }
};

export default { sidebarReducer };
