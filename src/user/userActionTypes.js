// @flow

import type { UserState } from './userState';

const USER_FETCH_REQUESTED = '@user/USER_FETCH_REQUESTED';
const USER_FETCH_SUCCEEDED = '@user/USER_FETCH_SUCCEEDED';
const USER_FETCH_FAILED = '@user/USER_FETCH_FAILED';

const USER_CREATION_REQUESTED = '@user/USER_CREATION_REQUESTED';
const USER_CREATION_SUCCEEDED = '@user/USER_CREATION_SUCCEEDED';
const USER_CREATION_FAILED = '@user/USER_CREATION_FAILED';

export type UserFetchRequest = { +type: '@user/USER_FETCH_REQUESTED' };
export type UserFetchSuccess = {
  +type: '@user/USER_FETCH_SUCCEEDED',
  +user: UserState,
};
export type UserFetchFail = {
  +type: '@user/USER_FETCH_FAILED',
  +error: string,
};

export type UserCreationRequest = {
  +type: '@user/USER_CREATION_REQUESTED',
  +email: string,
  +password: string,
};

export type UserCreationSuccess = {
  +type: '@user/USER_CREATION_SUCCEEDED',
  +user: UserState,
};

export type UserCreationFail = {
  +type: '@user/USER_CREATION_FAILED',
  +error: string,
};

export type UserAction =
  | UserFetchRequest
  | UserFetchSuccess
  | UserFetchFail
  | UserCreationRequest
  | UserCreationSuccess
  | UserCreationFail;

export default {
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEEDED,
  USER_FETCH_FAILED,
  USER_CREATION_REQUESTED,
  USER_CREATION_SUCCEEDED,
  USER_CREATION_FAILED,
};
