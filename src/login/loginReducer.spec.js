// @flow
import loginReducer, { TOKEN_STORAGE_KEY } from './loginReducer';
import { loginRoutine, logoutRoutine } from './loginRoutines';
import { verificationTokenLoginRoutine } from './verification-token';
import type { OauthToken } from './loginApi';

jest.mock('../redux/reduxStore');

describe('Login reducer', () => {
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem: key => store[key],
      setItem: (key, value) => {
        store[key] = value.toString();
      },
      clear: () => {
        store = {};
      },
      removeItem: key => delete store[key],
    };
  })();

  global.localStorage = localStorageMock;

  const inOneHour = new Date();
  inOneHour.setHours(inOneHour.getHours() + 1);
  const oneHourAgo = new Date();
  oneHourAgo.setHours(oneHourAgo.getHours() - 1);

  const fakeToken: OauthToken = {
    access_token: 'faketoken',
    token_type: 'bearer',
    expires_in: 100,
    scope: 'all',
    expirationTime: inOneHour,
  };

  const expiredToken = {
    ...fakeToken,
    expirationTime: oneHourAgo,
  };

  it('Adds token to state and local storage when login is successful', () => {
    const state = { token: null, verificationTokenLoginError: null };
    const newState = loginReducer(state, loginRoutine.success(fakeToken));
    expect(newState.token).toEqual(fakeToken);
    expect(localStorageMock.getItem(TOKEN_STORAGE_KEY)).toEqual(
      JSON.stringify(fakeToken),
    );
  });

  it('Adds token to state and local storage when verification token login is successful', () => {
    const state = { token: null, verificationTokenLoginError: null };
    const newState = loginReducer(
      state,
      verificationTokenLoginRoutine.success(fakeToken),
    );
    expect(newState.token).toEqual(fakeToken);
    expect(localStorageMock.getItem(TOKEN_STORAGE_KEY)).toEqual(
      JSON.stringify(fakeToken),
    );
  });

  it('Removes token from state and local storage when logging out', () => {
    const state = {
      token: fakeToken,
      verificationTokenLoginError: null,
    };
    const newState = loginReducer(state, logoutRoutine.trigger());
    expect(newState.token).toBeNull();
    expect(localStorageMock.getItem(TOKEN_STORAGE_KEY)).toBeUndefined();
  });

  it('Removes token from state and local storage when token expires', () => {
    const state = {
      token: expiredToken,
      verificationTokenLoginError: null,
    };
    const newState = loginReducer(state, loginRoutine.fulfill());
    expect(newState.token).toBeNull();
    expect(localStorageMock.getItem(TOKEN_STORAGE_KEY)).toBeUndefined();
  });

  it('Adds error on verification token login failure', () => {
    const state = { token: null, verificationTokenLoginError: null };
    const newState = loginReducer(
      state,
      verificationTokenLoginRoutine.failure('error'),
    );
    expect(!!newState.verificationTokenLoginError).toBeTruthy();
  });
});
