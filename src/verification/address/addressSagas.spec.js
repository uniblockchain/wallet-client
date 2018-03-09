// @flow

import { call, put } from 'redux-saga/effects';
import {
  createOrUpdateAddressRoutine,
  fetchAddressRoutine,
} from './addressRoutine';
import addressApi from './addressApi';
import { createOrUpdateAddress, fetchAddress } from './addressSagas';
import { type AddressForm, type Address } from './addressState';

describe('address sagas', () => {
  it('works', () => {
    const address: AddressForm = {
      id: null,
      country: 'Estonia',
      city: 'Tallinn',
      streetAddress: 'Viru väljak 1-1',
      postalCode: '10000',
    };

    const generator = createOrUpdateAddress(
      createOrUpdateAddressRoutine({ values: address }),
    );

    expect(generator.next().value).toEqual(
      call(addressApi.createOrUpdateAddress, {
        id: null,
        streetAddress: address.streetAddress,
        city: address.city,
        postalCode: address.postalCode,
        countryCode: 'EE',
      }),
    );
    expect(generator.next(address).value).toEqual(
      put(createOrUpdateAddressRoutine.success(address)),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('can fetch address', () => {
    const address: Address = {
      id: 1,
      countryCode: 'EE',
      city: 'Tallinn',
      streetAddress: 'Viru väljak 1-1',
      postalCode: '10000',
    };

    const generator = fetchAddress(fetchAddressRoutine());

    expect(generator.next().value).toEqual(call(addressApi.getAddress));
    expect(generator.next(address).value).toEqual(
      put(fetchAddressRoutine.success(address)),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
