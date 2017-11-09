// @flow

import pageAction, { type PageAction } from './pageActionTypes';
import { type PageState, initialPageState } from './pageState';

const pageReducer = (
  state: PageState = initialPageState,
  action: PageAction,
): PageState => {
  switch (action.type) {
    case pageAction.BLUR:
      return {
        ...state,
        blur: action.blur,
      };

    case pageAction.SHOW_PROGRESS:
      return {
        ...state,
        showProgress: action.showProgress,
      };

    default:
      return state;
  }
};

export default pageReducer;
