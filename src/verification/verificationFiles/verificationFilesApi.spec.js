// @flow

import config from 'react-global-configuration';
import type {
  VerificationFile,
  VerificationFileBase64,
} from './verificationFilesApi';

jest.mock('../../http');

const mockHttp = require('../../http');

const verificationApi = require('./verificationFilesApi').default;

describe('verification file api', () => {
  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('uploads a verification file', () => {
    const file: VerificationFile = {
      type: 'id',
      file: 'is file',
    };
    mockHttp.post = jest.fn(() => Promise.resolve(file));

    return verificationApi
      .uploadFile(file)
      .then(response => expect(response).toEqual(file));
  });

  it('posts a verification file', () => {
    const file: VerificationFileBase64 = {
      type: 'id',
      base64Data: 'base64lolwat',
    };
    mockHttp.post = jest.fn(() => Promise.resolve(file));

    return verificationApi
      .postFile(file)
      .then(response => expect(response).toEqual(file));
  });
});
