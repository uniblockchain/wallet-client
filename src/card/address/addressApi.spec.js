// @flow

import config from 'react-global-configuration';
import type { Address } from './addressApi';

jest.mock('../../http');

const mockHttp = require('../../http');

const addressApi = require('./addressApi').default;

describe('address api', () => {
  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('gets a address', () => {
    const address: Address = {
      country: 'EE',
      city: 'Tallinn',
      addressLineOne: 'Viru väljak 1-1',
      postalCode: '10000',
    };
    mockHttp.post = jest.fn(() => Promise.resolve(address));

    return addressApi
      .createAddress(address)
      .then(response => expect(response).toEqual(address));
  });
});
