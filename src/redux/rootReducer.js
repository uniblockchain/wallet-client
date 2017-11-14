// @flow
import { type Reducer } from 'redux';
import type RoutineAction from 'redux-saga-routines';
import { logoutRoutine } from '../login';

const rootReducer = (appReducer: Reducer<any, RoutineAction>) => (
  state: *,
  action: RoutineAction,
) => {
  let newState = state;
  if (action.type === logoutRoutine.TRIGGER) {
    newState = undefined;
  }
  return appReducer(newState, action);
};

export default rootReducer;
