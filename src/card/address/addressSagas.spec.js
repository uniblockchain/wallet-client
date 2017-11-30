// @flow

import { call, put } from 'redux-saga/effects';
import addressRoutine from './addressRoutine';
import addressApi, { type Address } from './addressApi';
import { createAddress } from './addressSagas';

describe('address sagas', () => {
  it('works', () => {
    const address: Address = {
      country: 'Estonia',
      city: 'Tallinn',
      addressLineOne: 'Viru väljak 1-1',
      postalCode: '10000',
    };

    const generator = createAddress(addressRoutine({ values: address }));

    expect(generator.next().value).toEqual(
      call(addressApi.createAddress, {
        addressLineOne: address.addressLineOne,
        city: address.city,
        postalCode: address.postalCode,
        countryCode: 'EE',
      }),
    );
    expect(generator.next(address).value).toEqual(
      put(addressRoutine.success(address)),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
