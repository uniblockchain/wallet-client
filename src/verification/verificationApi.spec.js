// @flow

import config from 'react-global-configuration';
import type { VerificationType } from './verificationApi';

jest.mock('../http');

const mockHttp = require('../http');

const verificationApi = require('./verificationApi');

describe('verification api', () => {
  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  const testVerification: VerificationType = {
    status: 'SUCCESS',
  };

  it('gets a list of successful verifications', () => {
    mockHttp.get = jest.fn(() => Promise.resolve(testVerification));

    return verificationApi
      .getSuccessfulVerifications(1)
      .then(response => expect(response).toEqual(testVerification));
  });

  it('posts a new verification', () => {
    mockHttp.post = jest.fn(() => Promise.resolve(testVerification));

    return verificationApi
      .createVerification(1)
      .then(response => expect(response).toEqual(testVerification));
  });
});
