// @flow

import type { OauthToken } from './loginApi';

const LOGIN_INITIATED = '@login/LOGIN_INITATED';
const LOGIN_SUCCESSFUL = '@login/LOGIN_SUCCESSFUL';
const LOGIN_FAILED = '@login/LOGIN_FAILED';

export type LoginInitiated = {
  +type: '@login/LOGIN_INITATED',
  +username: string,
  +password: string,
};

export type LoginSuccessful = {
  +type: '@login/LOGIN_SUCCESSFUL',
  +oauthToken: OauthToken,
};

export type LoginFailed = {
  +type: '@login/LOGIN_FAILED',
  +error: string,
};

export type LoginAction = LoginInitiated | LoginSuccessful | LoginFailed;

export default { LOGIN_INITIATED, LOGIN_SUCCESSFUL, LOGIN_FAILED };
