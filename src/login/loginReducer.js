// @flow

import loginAction from './loginActionTypes';
import type { LoginAction } from './loginActionTypes';
import type { OauthToken } from './loginApi';

const loginReducer = (
  state: OauthToken = {},
  action: LoginAction,
): OauthToken => {
  switch (action.type) {
    case loginAction.LOGIN_SUCCESSFUL:
      return {
        ...state,
        oauthToken: action.oauthToken,
      };

    default:
      return state;
  }
};

export default loginReducer;
