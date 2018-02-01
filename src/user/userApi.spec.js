// @flow

import config from 'react-global-configuration';
import type { UserState, User } from './userState';
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
  const userState: UserState = {
    id: 1,
    email,
    error: null,
    profile,
    isUsing2Fa: false,
  };
  const existingUser: User = {
    id: 1,
    email,
    password: 'some password',
    isUsing2Fa: false,
  };
  const newUser: User = {
    id: null,
    email,
    password: 'some password',
    isUsing2Fa: false,
  };

  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('fetches user', () => {
    mockHttp.get = jest.fn(() => Promise.resolve(userState));

    return userApi
      .fetchUser()
      .then(response => expect(response).toEqual(userState));
  });

  it('creates user', done => {
    mockHttp.post = jest.fn((url, params) => {
      expect(params.email).toBe(newUser.email);
      expect(params.password).toBe(newUser.password);
      done();
    });

    return userApi.createOrUpdateUser(newUser);
  });

  it('updates user', done => {
    mockHttp.put = jest.fn((url, params) => {
      expect(params.email).toBe(existingUser.email);
      expect(params.password).toBe(existingUser.password);
      done();
    });

    return userApi.createOrUpdateUser(existingUser);
  });
});
