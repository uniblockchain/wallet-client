// @flow

import type RoutineAction from 'redux-saga-routines';
import { loginRoutine, logoutRoutine } from './loginRoutines';
import { type OauthToken } from './loginApi';
import verificationTokenLoginRoutine from './verification-token/verificationTokenRoutines';

export const TOKEN_STORAGE_KEY = 'accessToken';

// get saved token if it's there
const getToken = () => {
  const token =
    (window.localStorage && localStorage.getItem(TOKEN_STORAGE_KEY)) || null;
  try {
    return JSON.parse((token: any));
  } catch (e) {
    if (window.localStorage) {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
    }
  }
};

export type LoginState = {
  token: ?OauthToken,
  verificationTokenLoginError: ?string,
};

const defaultState: LoginState = {
  token: getToken(),
  verificationTokenLoginError: null,
};

function addToLocalStorage(action: RoutineAction) {
  if (window.localStorage) {
    localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(action.payload));
  }
}

function removeFromLocalStorage() {
  if (window.localStorage) {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }
}

function checkTokenExpiry() {
  const token = getToken();
  if (!token) {
    return null;
  }
  if (new Date(token.expirationTime) > new Date()) {
    return token;
  }
  removeFromLocalStorage();
  return null;
}

const loginReducer = (
  state: LoginState = defaultState,
  action: RoutineAction,
): LoginState => {
  switch (action.type) {
    case verificationTokenLoginRoutine.SUCCESS:
    case loginRoutine.SUCCESS: {
      addToLocalStorage(action);
      return {
        ...state,
        token: action.payload,
      };
    }
    case verificationTokenLoginRoutine.FULFILL:
    case loginRoutine.FULFILL: {
      const accessToken = checkTokenExpiry();
      return {
        ...state,
        token: accessToken,
      };
    }
    case logoutRoutine.TRIGGER: {
      removeFromLocalStorage();
      return {
        ...state,
        token: null,
      };
    }
    case verificationTokenLoginRoutine.FAILURE: {
      return {
        ...state,
        verificationTokenLoginError: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default loginReducer;
