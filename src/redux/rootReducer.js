// @flow
import { type Reducer } from 'redux';
import { loginActionTypes } from '../login';
import type LoginAction from '../login';

const rootReducer = (appReducer: Reducer<any, LoginAction>) => (
  state: *,
  action: LoginAction,
) => {
  let newState = state;
  if (action.type === loginActionTypes.LOGOUT) {
    newState = undefined;
  }
  return appReducer(newState, action);
};

export default rootReducer;
