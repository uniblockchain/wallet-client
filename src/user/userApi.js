// @flow

import config from 'react-global-configuration';
import { get, post, put } from '../http';

import type { User, UserState } from './userState';

function fetchUser(): Promise<UserState> {
  return get(`${config.get('apiUrl')}/v1/me`);
}

function createOrUpdateUser(user: User): Promise<UserState> {
  if (user.id) {
    return put(`${config.get('apiUrl')}/v1/users`, user);
  }
  return post(`${config.get('apiUrl')}/v1/users`, user);
}

export default { fetchUser, createOrUpdateUser };
