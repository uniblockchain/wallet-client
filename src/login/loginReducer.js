// @flow

import type { LoginAction, LoginSuccessful } from './loginActionTypes';
import loginAction from './loginActionTypes';

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

function addToLocalStorage(action: LoginSuccessful) {
  if (window.localStorage) {
    localStorage.setItem(TOKEN_STORAGE_KEY, action.oauthToken.access_token);
  }
}

function removeFromLocalStorage() {
  if (window.localStorage) {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }
}

const loginReducer = (
  state: LoginState = defaultState,
  action: LoginAction,
): LoginState => {
  switch (action.type) {
    case loginAction.LOGIN_SUCCESSFUL:
      addToLocalStorage(action);
      return {
        ...state,
        token: action.oauthToken.access_token,
      };
    case loginAction.LOGOUT:
      removeFromLocalStorage();
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
};

export default loginReducer;
