// @flow
import type RoutineAction from 'redux-saga-routines';
import { SECRET_REMOVE } from './multiFactorAuthActions';
import { createRoutine } from './multiFactorAuthRoutines';

export type MultiFactorAuthState = {|
  +secret: ?string,
  +error: ?string,
|};

export const initialMultiFactorAuthState: MultiFactorAuthState = {
  secret: null,
  error: null,
};

const multiFactorAuthReducer = (
  state: MultiFactorAuthState = initialMultiFactorAuthState,
  action: RoutineAction,
): any => {
  switch (action.type) {
    case createRoutine.TRIGGER:
      return {
        ...state,
      };

    case createRoutine.SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case createRoutine.FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case SECRET_REMOVE:
      return {
        ...state,
        secret: null,
      };

    default:
      return state;
  }
};

export default multiFactorAuthReducer;
