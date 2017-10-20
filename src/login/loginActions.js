// @flow

import loginActionTypes from './loginActionTypes';
import type {
  LoginFailed,
  LoginInitiated,
  LoginSuccessful,
} from './loginActionTypes';
import type { OauthToken } from './loginApi';

const login = (username: string, password: string): LoginInitiated => ({
  type: loginActionTypes.LOGIN_INITIATED,
  username,
  password,
});

const loginSuccessful = (oauthToken: OauthToken): LoginSuccessful => ({
  type: loginActionTypes.LOGIN_SUCCESSFUL,
  oauthToken,
});

const loginFailed = (error: string): LoginFailed => ({
  type: loginActionTypes.LOGIN_FAILED,
  error,
});

export default { login, loginSuccessful, loginFailed };
