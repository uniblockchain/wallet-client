// @flow

import userActionTypes, {
  type UserFetchRequest,
  type UserFetchFail,
  type UserFetchSuccess,
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

export default { userFetchRequested, userFetchSucceeded, userFetchFailed };
