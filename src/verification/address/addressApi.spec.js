// @flow

import config from 'react-global-configuration';
import { type Address } from './addressState';

jest.mock('../../http');

const mockHttp = require('../../http');

const addressApi = require('./addressApi').default;

describe('address api', () => {
  const apiUrl = 'sample-api-url';

  const address: Address = {
    id: null,
    countryCode: 'EE',
    city: 'Tallinn',
    streetAddress: 'Viru väljak 1-1',
    postalCode: '10000',
  };

  const persistedAddress: Address = {
    id: 1,
    countryCode: 'EE',
    city: 'Tallinn',
    streetAddress: 'Viru väljak 1-1',
    postalCode: '10000',
  };

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('creates an address', () => {
    mockHttp.post = jest.fn(() => Promise.resolve(address));

    return addressApi
      .createOrUpdateAddress(address)
      .then(response => expect(response).toEqual(address));
  });

  it('update an address', () => {
    mockHttp.put = jest.fn(() => Promise.resolve(persistedAddress));

    return addressApi
      .createOrUpdateAddress(persistedAddress)
      .then(response => expect(response).toEqual(persistedAddress));
  });

  it('gets an address', () => {
    mockHttp.get = jest.fn(() => Promise.resolve(address));

    return addressApi
      .getAddress(address)
      .then(response => expect(response).toEqual(address));
  });
});
