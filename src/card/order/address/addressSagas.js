// @flow
import { call, put, takeLatest, type IOEffect } from 'redux-saga/effects';
import type RoutineAction from 'redux-saga-routines';
import { SubmissionError } from 'redux-form';
import countries from 'alpha2-countries';
import {
  createOrUpdateAddressRoutine,
  fetchAddressRoutine,
} from './addressRoutine';
import addressApi from './addressApi';
import { type Address, type AddressForm } from './addressState';

function countryToCountryCode(address: AddressForm): Address {
  return {
    id: address.id,
    streetAddress: address.streetAddress,
    city: address.city,
    postalCode: address.postalCode,
    countryCode: countries.resolveCode(address.country),
  };
}

export function* createOrUpdateAddress(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  try {
    const addressWithCountryCode = countryToCountryCode(action.payload.values);
    const address = yield call(
      addressApi.createOrUpdateAddress,
      addressWithCountryCode,
    );
    yield put(createOrUpdateAddressRoutine.success(address));
  } catch (error) {
    console.error(error);
    yield put(
      createOrUpdateAddressRoutine.failure(
        new SubmissionError({
          _error:
            error.body.message ||
            'Oops! Something went wrong, please try again later.',
        }),
      ),
    );
  }
}

function getFormErrors(values: AddressForm) {
  const errors = {};
  if (!values.streetAddress) {
    errors.streetAddress = 'Address line is empty!';
  }

  if (!values.postalCode) {
    errors.postalCode = 'Postal code is empty!';
  }

  if (!values.city) {
    errors.city = 'City is empty!';
  }

  const countryCode = countries.resolveCode(values.country);

  if (!values.country) {
    errors.country = 'Country is empty!';
  } else if (!countryCode) {
    errors.country = 'Unknown country!';
  }

  return errors;
}

function* validateAddress(action: RoutineAction): Generator<IOEffect, void, *> {
  const address = action.payload.values;
  const errors = getFormErrors(address);
  if (Object.keys(errors).length) {
    yield put(
      createOrUpdateAddressRoutine.failure(new SubmissionError(errors)),
    );
  } else {
    yield call(createOrUpdateAddress, action);
  }
  yield put(createOrUpdateAddressRoutine.fulfill());
}

export function* fetchAddress(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  try {
    const address = yield call(addressApi.getAddress);
    yield put(fetchAddressRoutine.success(address));
  } catch (error) {
    if (error.status !== 404) {
      console.error(error);
      yield put(
        fetchAddressRoutine.failure(
          new Error(
            error.body.message ||
              'Oops! Something went wrong, please try again later.',
          ),
        ),
      );
    }
  }
}

function* callFetchAddress(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  yield call(fetchAddress, action);
  yield put(fetchAddressRoutine.fulfill());
}

function* createOrUpdateAddressSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(createOrUpdateAddressRoutine.TRIGGER, validateAddress);
}

function* fetchAddressSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(fetchAddressRoutine.TRIGGER, callFetchAddress);
}

export default [fetchAddressSaga, createOrUpdateAddressSaga];
