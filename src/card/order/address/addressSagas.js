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
    streetAddress: address.streetAddress,
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
    console.error(error);
    yield put(
      addressRoutine.failure(
        new SubmissionError({
          _error:
            error.body.message ||
            'Oops! Something went wrong, please try again later.',
        }),
      ),
    );
  }
}

const allowedCountries = [
  'AT',
  'BE',
  'BG',
  'CY',
  'CZ',
  'DE',
  'DK',
  'EE',
  'ES',
  'FI',
  'FR',
  'GB',
  'GR',
  'HR',
  'HU',
  'IE',
  'IT',
  'LT',
  'LU',
  'LV',
  'MT',
  'NL',
  'PL',
  'PT',
  'RO',
  'SE',
  'SI',
  'SK',
];

function getFormErrors(values: Address) {
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
  } else if (allowedCountries.indexOf(countryCode) === -1) {
    errors.country = 'Country must be in European Union';
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
