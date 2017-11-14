// @flow

import type RoutineAction from 'redux-saga-routines';
import { loginRoutine, logoutRoutine } from './loginRoutines';

const TOKEN_STORAGE_KEY = 'accessToken';

// get saved token if it's there
const token: ?string =
  (window.localStorage && localStorage.getItem(TOKEN_STORAGE_KEY)) || null;

export type LoginState = {
  token: ?string,
};

const defaultState: LoginState = {
  token,
};

function addToLocalStorage(action: RoutineAction) {
  if (window.localStorage) {
    localStorage.setItem(TOKEN_STORAGE_KEY, action.payload.access_token);
  }
}

function removeFromLocalStorage() {
  if (window.localStorage) {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }
}

const loginReducer = (
  state: LoginState = defaultState,
  action: RoutineAction,
): LoginState => {
  switch (action.type) {
    case loginRoutine.SUCCESS: {
      addToLocalStorage(action);
      return {
        ...state,
        token: action.payload.access_token,
      };
    }
    case logoutRoutine.TRIGGER: {
      removeFromLocalStorage();
      return {
        ...state,
        token: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default loginReducer;
