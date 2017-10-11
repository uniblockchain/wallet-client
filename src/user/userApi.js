// @flow

import type { UserState } from './userState';

async function fetchUser(): Promise<UserState> {
  return { id: 1, email: 'erko@risthein.ee' }; // TODO: fetch from wallet-service API
}

export default { fetchUser };
