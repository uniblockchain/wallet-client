// @flow

const USER_FETCH_REQUESTED = '@user/USER_FETCH_REQUESTED';
const USER_FETCH_SUCCEEDED = '@user/USER_FETCH_SUCCEEDED';
const USER_FETCH_FAILED = '@user/USER_FETCH_FAILED';

export type UserFetchRequest = { +type: '@user/USER_FETCH_REQUESTED' };
export type UserFetchSuccess = { +type: '@user/USER_FETCH_SUCCEEDED' };
export type UserFetchFail = { +type: '@user/USER_FETCH_FAILED' };

export type UserAction = UserFetchRequest | UserFetchSuccess | UserFetchFail;

export default {
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEEDED,
  USER_FETCH_FAILED,
};
