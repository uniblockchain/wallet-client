// @flow

import userActionTypes, {
  type UserFetchRequest,
  type UserFetchFail,
  type UserFetchSuccess,
  type UserCreationRequest,
  type UserCreationFail,
  type UserCreationSuccess,
} from './userActionTypes';
import type { UserState } from './userState';

const userFetchRequested = (): UserFetchRequest => ({
  type: userActionTypes.USER_FETCH_REQUESTED,
});
const userFetchSucceeded = (user: UserState): UserFetchSuccess => ({
  type: userActionTypes.USER_FETCH_SUCCEEDED,
  user,
});
const userFetchFailed = (error: string): UserFetchFail => ({
  type: userActionTypes.USER_FETCH_FAILED,
  error,
});
const userCreationRequested = (
  email: string,
  password: string,
): UserCreationRequest => ({
  type: userActionTypes.USER_CREATION_REQUESTED,
  email,
  password,
});
const userCreationSucceeded = (user: UserState): UserCreationSuccess => ({
  type: userActionTypes.USER_CREATION_SUCCEEDED,
  user,
});
const userCreationFailed = (error: string): UserCreationFail => ({
  type: userActionTypes.USER_CREATION_FAILED,
  error,
});

export default {
  userFetchRequested,
  userFetchSucceeded,
  userFetchFailed,
  userCreationRequested,
  userCreationSucceeded,
  userCreationFailed,
};
