// @flow

import { call, put, takeLatest, type IOEffect } from 'redux-saga/effects';
import moment from 'moment-es6';
import type RoutineAction from 'redux-saga-routines';
import { SubmissionError } from 'redux-form';
import { creationRoutine, fetchRoutine } from './profileRoutines';
import profileApi from './profileApi';
import type { Profile } from './profileState';

function formValuesToProfile(values: *): Profile {
  const date = moment()
    .year(values.year)
    .month(values.month - 1)
    .date(values.day)
    .utc()
    .startOf('day');
  return {
    id: values.id,
    firstName: values.firstName,
    lastName: values.lastName,
    dateOfBirth: date,
    mobileNumber: values.phoneNumber,
    address: null,
  };
}

export function* createProfile(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  try {
    const profile = yield call(
      profileApi.createOrUpdateProfile,
      formValuesToProfile(action.payload.values),
    );
    const profileWithDate = { ...profile };
    if (profile.dateOfBirth) {
      profileWithDate.dateOfBirth = moment.utc(profile.dateOfBirth);
    }
    yield put(creationRoutine.success(profileWithDate));
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
    const profileWithDate = { ...profile };
    if (profile.dateOfBirth) {
      profileWithDate.dateOfBirth = moment.utc(profile.dateOfBirth);
    }

    yield put(fetchRoutine.success(profileWithDate));
  } catch (error) {
    if (error.status !== 404) {
      yield put(
        fetchRoutine.failure(
          new Error(
            error.body.message ||
              'Oops! Something went wrong, please try again later.',
          ),
        ),
      );
      console.error(error);
    }
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
