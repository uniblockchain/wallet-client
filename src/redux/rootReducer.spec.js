// @flow
import { type Reducer } from 'redux';
import rootReducer from './rootReducer';
import { loginActions } from '../login';
import type { LoginAction } from '../login/loginActionTypes';

jest.mock('./reduxStore');

describe('Root reducer', () => {
  const state = {
    test: true,
  };
  let fakeReducer;
  let reducer: Reducer<any, LoginAction>;

  beforeEach(() => {
    fakeReducer = jest.fn();
    reducer = rootReducer(fakeReducer);
  });

  it('dispatches clear state and action to appReducer when action is logout', () => {
    const action = loginActions.logout();
    reducer(state, action);
    expect(fakeReducer.mock.calls.length).toEqual(1);
    expect(fakeReducer.mock.calls[0][0]).toBeUndefined();
    expect(fakeReducer.mock.calls[0][1]).toEqual(action);
  });

  it('dispatches state and action to appReducer when action is not logout', () => {
    const action = loginActions.login('test', 'test');
    reducer(state, action);
    expect(fakeReducer.mock.calls.length).toEqual(1);
    expect(fakeReducer.mock.calls[0][0]).toEqual(state);
    expect(fakeReducer.mock.calls[0][1]).toEqual(action);
  });
});
