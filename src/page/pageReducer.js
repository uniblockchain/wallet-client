// @flow

import pageAction, { type PageAction } from './pageActionTypes';
import { type PageState, initialPageState } from './pageState';

const pageReducer = (
  state: PageState = initialPageState,
  action: PageAction,
): PageState => {
  switch (action.type) {
    case pageAction.SHOW_MODAL:
      return {
        ...state,
        showModal: action.showModal,
      };

    default:
      return state;
  }
};

export default pageReducer;
