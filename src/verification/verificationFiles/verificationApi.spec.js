// @flow

import config from 'react-global-configuration';
import type { VerificationFile } from './verificationFilesApi';

jest.mock('../../http');

const mockHttp = require('../../http');

const verificationApi = require('./verificationFilesApi').default;

describe('verification file api', () => {
  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('gets a address', () => {
    const address: VerificationFile = {
      type: 'id',
      file: 'is file',
    };
    mockHttp.post = jest.fn(() => Promise.resolve(address));

    return verificationApi
      .uploadDocument(address)
      .then(response => expect(response).toEqual(address));
  });
});
