// @flow

import type RoutineAction from 'redux-saga-routines';
import confirmRoutine from './confirmRoutine';

export type ConfirmState = {
  +error: ?string,
};

const confirmReducer = (
  state: ConfirmState = { error: null },
  action: RoutineAction,
): ConfirmState => {
  switch (action.type) {
    case confirmRoutine.SUCCESS:
      return {
        ...state,
        error: null,
      };
    case confirmRoutine.FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default confirmReducer;
