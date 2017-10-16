import { call, put, takeLatest, all } from 'redux-saga/effects';
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

function* createUser(action) {
  try {
    const user = yield call(userApi.createUser, action.email, action.password);
    yield put(userActions.userCreationSucceeded(user));
  } catch (e) {
    yield put(userActions.userCreationFailed(e.message));
    throw e;
  }
}

function* userFetchSaga() {
  yield takeLatest(userActionTypes.USER_FETCH_REQUESTED, fetchUser);
}

function* userCreationSaga() {
  yield takeLatest(userActionTypes.USER_CREATION_REQUESTED, createUser);
}

function* userSagas() {
  yield all([userFetchSaga(), userCreationSaga()]);
}

export default userSagas;
