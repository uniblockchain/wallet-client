// @flow

import config from 'react-global-configuration';

jest.mock('../../http');

const mockHttp = require('../../http');

const verificationTokenApi = require('./verificationTokenApi').default;

describe('user api', () => {
  const apiUrl = 'sample-api-url';
  const verificationToken = 'sampleToken123';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('gets authentication token, using verification token', done => {
    mockHttp.post = jest.fn((url, params) => {
      expect(params).toBe(
        `grant_type=verification-token&token=${verificationToken}`,
      );
      expect(url.includes(apiUrl)).toBe(true);
      done();
      return new Promise(resolve => {
        resolve();
      });
    });

    return verificationTokenApi.login(verificationToken);
  });
});
