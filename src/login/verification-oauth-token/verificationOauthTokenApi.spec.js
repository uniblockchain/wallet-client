// @flow

import config from 'react-global-configuration';

jest.mock('../../http');

const mockHttp = require('../../http');

const verificationOauthTokenApi = require('./verificationOauthTokenApi')
  .default;

describe('user api', () => {
  const apiUrl = 'sample-api-url';
  const verificationOauthToken = 'sampleToken123';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('gets authentication token, using verification token', done => {
    mockHttp.post = jest.fn((url, params) => {
      expect(params).toBe(
        `grant_type=verification-auth-to-oauth&token=${verificationOauthToken}`,
      );
      expect(url.includes(apiUrl)).toBe(true);
      done();
      return new Promise(resolve => {
        resolve();
      });
    });

    return verificationOauthTokenApi.login(verificationOauthToken);
  });
});
