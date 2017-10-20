// @flow

import loginAction from './loginActionTypes';
import type { LoginAction } from './loginActionTypes';

const TOKEN_STORAGE_KEY = 'accessToken';

// get saved token if it's there
const token: ?string =
  (window.localStorage && localStorage.getItem(TOKEN_STORAGE_KEY)) || null;

type LoginState = {
  token: ?string,
};

const defaultState: LoginState = {
  token,
};

function updateLocalStorage(action) {
  if (window.localStorage) {
    localStorage.setItem(TOKEN_STORAGE_KEY, action.oauthToken.access_token);
  }
}

const loginReducer = (
  state: LoginState = defaultState,
  action: LoginAction,
): LoginState => {
  switch (action.type) {
    case loginAction.LOGIN_SUCCESSFUL:
      updateLocalStorage(action);
      return {
        ...state,
        token: action.oauthToken.access_token,
      };

    default:
      return state;
  }
};

export default loginReducer;
