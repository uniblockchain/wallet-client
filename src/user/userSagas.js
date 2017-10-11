import { call, put, takeLatest } from 'redux-saga/effects';
import userApi from './userApi';
import userActions from './userActions';
import userActionTypes from './userActionTypes';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
  try {
    const user = yield call(userApi.fetchUser);
    yield put(userActions.userFetchSucceeded(user));
  } catch (e) {
    yield put(userActions.userFetchFailed(e.message));
    throw e;
  }
}

function* userFetchSaga() {
  yield takeLatest(userActionTypes.USER_FETCH_REQUESTED, fetchUser);
}

export default userFetchSaga;
