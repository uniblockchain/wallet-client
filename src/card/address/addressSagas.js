// @flow
import { call, put, takeLatest, type IOEffect } from 'redux-saga/effects';
import type RoutineAction from 'redux-saga-routines';
import { SubmissionError } from 'redux-form';
import countries from 'alpha2-countries';
import addressRoutine from './addressRoutine';
import addressApi from './addressApi';
import type { Address } from './addressApi';

function countryToCountryCode(address: Address): any {
  return {
    addressLineOne: address.addressLineOne,
    city: address.city,
    postalCode: address.postalCode,
    countryCode: countries.resolveCode(address.country),
  };
}

export function* createAddress(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  try {
    const addressWithCountryCode = countryToCountryCode(action.payload.values);
    const address = yield call(
      addressApi.createAddress,
      addressWithCountryCode,
    );
    yield put(addressRoutine.success(address));
  } catch (error) {
    yield put(
      addressRoutine.failure(
        new SubmissionError({
          _error:
            error.body.message ||
            'Oops! Something went wrong, please try again later.',
        }),
      ),
    );
    console.error(error);
  }
}

function getFormErrors(values: Address) {
  const errors = {};
  if (!values.addressLineOne) {
    errors.addressLineOne = 'Address line is empty!';
  }

  if (!values.postalCode) {
    errors.postalCode = 'Postal code is empty!';
  }

  if (!values.city) {
    errors.city = 'City is empty!';
  }

  if (!values.country) {
    errors.country = 'Country is empty!';
  } else if (!countries.resolveCode(values.country)) {
    errors.country = 'Unknown country!';
  }

  return errors;
}

function* validateAddress(action: RoutineAction): Generator<IOEffect, void, *> {
  const address = action.payload.values;
  const errors = getFormErrors(address);
  if (Object.keys(errors).length) {
    yield put(addressRoutine.failure(new SubmissionError(errors)));
  } else {
    yield call(createAddress, action);
  }
  yield put(addressRoutine.fulfill());
}

function* createAddressSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(addressRoutine.TRIGGER, validateAddress);
}

export default createAddressSaga;
