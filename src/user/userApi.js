// @flow

import config from 'react-global-configuration';
import { get } from '../http';

import type { UserState } from './userState';

function fetchUser(): Promise<UserState> {
  return get(`${config.get('apiUrl')}/me`);
}

export default { fetchUser };
