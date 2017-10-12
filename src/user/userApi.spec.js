// @flow

import config from 'react-global-configuration';

const mockHttp = jest.genMockFromModule('../http');
jest.mock('../http', () => mockHttp);

const userApi = require('./userApi').default;

describe('user api', () => {
  const currentState: UserState = { id: 0, email: '' };
  const user: UserState = { id: 1, email: 'test@example.com' };
  const error = 'whoops';

  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('fetches user', () => {
    mockHttp.get = jest.fn(() => Promise.resolve(user));

    return userApi.fetchUser().then(response => {
      expect(response).toEqual(user);
    });
  });
});
