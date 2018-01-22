// @flow

import config from 'react-global-configuration';

jest.mock('../../../http');

const mockHttp = require('../../../http');

const resetPasswordApi = require('./resetPasswordApi').default;

describe('reset password api', () => {
  const email = 'test@example.com';
  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('reset password', done => {
    mockHttp.post = jest.fn((url, params) => {
      expect(params.email).toBe(email);
      expect(params.type).toBe('RESET_PASSWORD');
      done();
    });

    return resetPasswordApi.resetPassword(email);
  });
});
