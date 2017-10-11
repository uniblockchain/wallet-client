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
        ...action.user,
      };

    case userAction.USER_FETCH_FAILED:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default userReducer;
