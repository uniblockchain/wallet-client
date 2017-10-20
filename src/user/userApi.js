// @flow

import config from 'react-global-configuration';
import { get, post } from '../http';

import type { UserState } from './userState';

function fetchUser(): Promise<UserState> {
  return get(`${config.get('apiUrl')}/v1/me`);
}

function createUser(email: string, password: string): Promise<UserState> {
  return post(`${config.get('apiUrl')}/v1/users`, {
    email,
    password,
  });
}

export default { fetchUser, createUser };
