// @flow

import config from 'react-global-configuration';
import type { UserState } from './userState';
import type { ProfileState } from './profile/profileState';

jest.mock('../http');

const mockHttp = require('../http');

const userApi = require('./userApi').default;

describe('user api', () => {
  const email = 'test@example.com';
  const profile: ProfileState = {
    id: 1,
    firstName: 'Jordan',
    lastName: 'Valdma',
    dateOfBirth: new Date('1908-02-01'),
    mobileNumber: '+3725555555',
    error: null,
  };
  const user: UserState = { id: 1, email, error: null, profile };

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
