import { call, put, all, take, fork } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import userApi from './userApi';
import { loginRoutine } from '../login';
import { fetchRoutine, creationRoutine } from './userRoutines';
import tracker from '../tracker';

function* fetchUser() {
  try {
    const user = yield call(userApi.fetchUser);
    tracker.setUser(user);
    yield put(fetchRoutine.success(user));
  } catch (error) {
    console.error(error);
    yield put(
      fetchRoutine.failure(
        new SubmissionError({ _error: (error.body || {}).message }),
      ),
    );
  }
}

function* createUser(action) {
  try {
    const { email, password } = action.payload.values;
    const user = yield call(userApi.createUser, email, password);
    yield put(creationRoutine.success(user));
    tracker.signup(user.id);
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
        new SubmissionError({ _error: (error.body || {}).message }),
      ),
    );
  }
}

function* takeFirst(pattern, saga, ...args) {
  return yield fork(function*() {
    while (true) {
      const action = yield take(pattern);
      yield call(saga, ...args.concat(action));
    }
  });
}

function* userFetchSaga() {
  yield takeFirst(fetchRoutine.TRIGGER, fetchUser);
}

function* userCreationSaga() {
  yield takeFirst(creationRoutine.TRIGGER, createUser);
}

function* userSagas() {
  yield all([userFetchSaga(), userCreationSaga()]);
}

export default userSagas;
