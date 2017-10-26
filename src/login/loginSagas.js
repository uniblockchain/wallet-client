import { call, put, takeLatest } from 'redux-saga/effects';
import loginApi from './loginApi';
import loginActions from './loginActions';
import loginActionTypes from './loginActionTypes';

function* fetchToken(action) {
  try {
    const oauthToken = yield call(
      loginApi.login,
      action.username,
      action.password,
    );
    yield put(loginActions.loginSuccessful(oauthToken));
  } catch (error) {
    yield put(loginActions.loginFailed(error.message));
    console.error(error);
  }
}

function* loginSaga() {
  yield takeLatest(loginActionTypes.LOGIN_INITIATED, fetchToken);
}

export default loginSaga;
