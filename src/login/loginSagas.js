import { call, put, takeLatest } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import loginApi from './loginApi';
import { loginRoutine } from './loginRoutines';

function* fetchToken(payload) {
  try {
    yield put(loginRoutine.request());
    const oauthToken = yield call(
      loginApi.login,
      payload.username,
      payload.password,
    );
    yield put(loginRoutine.success(oauthToken));
  } catch (error) {
    console.error(error);
    yield put(
      loginRoutine.failure(
        new SubmissionError({ _error: error.body.error_description }),
      ),
    );
  }
}

function* validate(action) {
  let { payload } = action;
  if (payload.values) {
    payload = payload.values;
  }
  yield call(fetchToken, payload);
  yield put(loginRoutine.fulfill());
}

function* loginSaga() {
  yield takeLatest(loginRoutine.TRIGGER, validate);
}

export default loginSaga;
