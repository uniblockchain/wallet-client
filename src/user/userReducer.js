// @flow

import { type UserState, initialUserState } from './userState';
import userAction, { type UserAction } from './userActionTypes';

const userReducer = (
  state: UserState = initialUserState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case userAction.USER_FETCH_REQUESTED:
      return {
        ...state,
      };

    case userAction.USER_FETCH_SUCCEEDED:
      return {
        ...state,
      };

    case userAction.USER_FETCH_FAILED:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducer;
