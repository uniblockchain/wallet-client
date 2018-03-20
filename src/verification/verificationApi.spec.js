// @flow

import config from 'react-global-configuration';
import type { VerificationType } from './verificationApi';
import verificationApi from './verificationApi';

jest.mock('../http');

const mockHttp = require('../http');

describe('verification api', () => {
  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  const testVerification: VerificationType = {
    status: 'ok',
  };

  it('posts a new verification', () => {
    mockHttp.post = jest.fn(() => Promise.resolve(testVerification));

    return verificationApi
      .createVerification(1)
      .then(response => expect(response).toEqual(testVerification));
  });
});
