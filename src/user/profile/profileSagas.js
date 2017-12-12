// @flow

import { call, put, takeLatest, type IOEffect } from 'redux-saga/effects';
import type RoutineAction from 'redux-saga-routines';
import { SubmissionError } from 'redux-form';
import { creationRoutine, fetchRoutine } from './profileRoutines';
import profileApi from './profileApi';
import type { Profile } from './profileState';

function formValuesToProfile(values: *): Profile {
  return {
    id: null,
    firstName: values.firstName,
    lastName: values.lastName,
    dateOfBirth: new Date(`${values.year}-${values.month}-${values.day}`),
    mobileNumber: values.internationalCallingCode + values.phoneNumber,
  };
}

export function* createProfile(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  try {
    const profile = yield call(
      profileApi.createProfile,
      formValuesToProfile(action.payload.values),
    );
    yield put(creationRoutine.success(profile));
  } catch (error) {
    yield put(
      creationRoutine.failure(
        new SubmissionError({
          _error:
            error.body.message ||
            'Oops! Something went wrong, please try again later.',
        }),
      ),
    );
  }
}

export function* fetchProfile(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  try {
    const profile = yield call(profileApi.fetchProfile);
    yield put(creationRoutine.success(profile));
  } catch (error) {
    yield put(
      creationRoutine.failure(
        new Error(
          error.body.message ||
            'Oops! Something went wrong, please try again later.',
        ),
      ),
    );
    console.error(error);
  }
}

function getFormErrors(values: *) {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First name is empty!';
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is empty!';
  }

  if (!values.day) {
    errors.day = 'Day is empty!';
  }

  if (!values.month) {
    errors.month = 'Month is empty!';
  }

  if (!values.year) {
    errors.year = 'Year is empty!';
  }

  if (!values.internationalCallingCode) {
    errors.internationalCallingCode = 'Area code is empty!';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Number is empty!';
  }

  return errors;
}

function* validateProfile(action: RoutineAction): Generator<IOEffect, void, *> {
  const errors = getFormErrors(action.payload.values);
  if (Object.keys(errors).length) {
    yield put(creationRoutine.failure(new SubmissionError(errors)));
  } else {
    yield call(createProfile, action);
  }
  yield put(creationRoutine.fulfill());
}

function* callFetchProfile(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  yield call(fetchProfile, action);
  yield put(fetchRoutine.fulfill());
}

function* createProfileSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(creationRoutine.TRIGGER, validateProfile);
}

function* fetchProfileSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(fetchRoutine.TRIGGER, callFetchProfile);
}

export default [fetchProfileSaga, createProfileSaga];
