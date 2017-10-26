import { call, put, takeLatest, all } from 'redux-saga/effects';
import userApi from './userApi';
import userActions from './userActions';
import userActionTypes from './userActionTypes';
import loginActions from '../login/loginActions';

function* fetchUser() {
  try {
    const user = yield call(userApi.fetchUser);
    yield put(userActions.userFetchSucceeded(user));
  } catch (error) {
    yield put(userActions.userFetchFailed(error.message));
    console.error(error);
  }
}

function* createUser(action) {
  try {
    const user = yield call(userApi.createUser, action.email, action.password);
    yield put(userActions.userCreationSucceeded(user));
    yield put(loginActions.login(action.email, action.password));
  } catch (error) {
    yield put(userActions.userCreationFailed(error.message));
    console.log(error);
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
