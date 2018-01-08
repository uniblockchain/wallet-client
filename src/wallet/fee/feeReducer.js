// @flow

import type RoutineAction from 'redux-saga-routines';
import { cardOrderFeeRoutine, sendFeeRoutine } from './feeRoutines';
import type { MonetaryValues } from '../walletState';

export type FeeState = {
  +fee: ?MonetaryValues,
  +isLoading: boolean,
};

export const initialFeeState: FeeState = {
  fee: null,
  isLoading: false,
};

const feeReducer = (
  state: FeeState = initialFeeState,
  action: RoutineAction,
): FeeState => {
  switch (action.type) {
    case cardOrderFeeRoutine.TRIGGER:
      return {
        ...state,
        isLoading: true,
      };

    case cardOrderFeeRoutine.SUCCESS:
      return {
        ...state,
        error: null,
        fee: action.payload,
        isLoading: false,
      };

    case cardOrderFeeRoutine.FAILURE:
      return {
        ...state,
        error: action.payload,
        fee: null,
        isLoading: false,
      };

    case sendFeeRoutine.TRIGGER:
      return {
        ...state,
        isLoading: true,
      };

    case sendFeeRoutine.SUCCESS:
      return {
        ...state,
        error: null,
        fee: action.payload,
        isLoading: false,
      };

    case sendFeeRoutine.FAILURE:
      return {
        ...state,
        fee: null,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default feeReducer;
