import { call, put, takeLatest, all } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import userApi from './userApi';
import { loginRoutine } from '../login';
import { fetchRoutine, creationRoutine } from './userRoutines';

function* fetchUser() {
  try {
    const user = yield call(userApi.fetchUser);
    yield put(fetchRoutine.success(user));
  } catch (error) {
    console.error(error);
    yield put(
      fetchRoutine.failure(new SubmissionError({ _error: error.body.message })),
    );
  }
}

function* createUser(action) {
  try {
    const { email, password } = action.payload.values;
    const user = yield call(userApi.createUser, email, password);
    yield put(creationRoutine.success(user));
    yield put(
      loginRoutine.trigger({
        username: email,
        password,
      }),
    );
  } catch (error) {
    console.error(error);
    yield put(
      creationRoutine.failure(
        new SubmissionError({ _error: error.body.message }),
      ),
    );
  }
}

function* userFetchSaga() {
  yield takeLatest(fetchRoutine.TRIGGER, fetchUser);
}

function* userCreationSaga() {
  yield takeLatest(creationRoutine.TRIGGER, createUser);
}

function* userSagas() {
  yield all([userFetchSaga(), userCreationSaga()]);
}

export default userSagas;
