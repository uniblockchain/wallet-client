// @flow

import config from 'react-global-configuration';
import type { SecretHolder } from './multiFactorAuthApi';

jest.mock('../../http');

const mockHttp = require('../../http');

const multiFactorAuthApi = require('./multiFactorAuthApi').default;

describe('multi factor auth api', () => {
  const apiUrl = 'sample-api-url';

  const secretHolder: SecretHolder = { secret: 'someSecret' };

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('creates a new secret', () => {
    mockHttp.put = jest.fn(() => Promise.resolve(secretHolder));

    return multiFactorAuthApi
      .createNewSecret('password')
      .then(response => expect(response).toEqual(secretHolder));
  });
});
