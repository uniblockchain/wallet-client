// @flow

import userActionTypes, {
  type UserFetchRequest,
  type UserFetchFail,
  type UserFetchSuccess,
} from './userActionTypes';

const userFetchRequested = (): UserFetchRequest => ({
  type: userActionTypes.USER_FETCH_REQUESTED,
});
const userFetchSucceeded = (): UserFetchSuccess => ({
  type: userActionTypes.USER_FETCH_SUCCEEDED,
});
const userFetchFailed = (): UserFetchFail => ({
  type: userActionTypes.USER_FETCH_FAILED,
});

export default { userFetchRequested, userFetchSucceeded, userFetchFailed };
