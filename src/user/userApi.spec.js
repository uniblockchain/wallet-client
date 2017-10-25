// @flow

import config from 'react-global-configuration';

jest.mock('../http');

const mockHttp = require('../http');

const userApi = require('./userApi').default;

describe('user api', () => {
  const email = 'test@example.com';
  const currentState: UserState = { id: 0, email: '' };
  const user: UserState = { id: 1, email };
  const error = 'whoops';

  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('fetches user', () => {
    mockHttp.get = jest.fn(() => Promise.resolve(user));

    return userApi.fetchUser().then(response => expect(response).toEqual(user));
  });

  it('creates user', done => {
    const password = '';
    mockHttp.post = jest.fn((url, params) => {
      expect(params.email).toBe(email);
      expect(params.password).toBe(password);
      done();
    });

    return userApi.createUser(email, password);
  });
});
