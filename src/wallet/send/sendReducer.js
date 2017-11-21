// @flow

import type RoutineAction from 'redux-saga-routines';
import { sendRoutine, clearRoutine } from './sendRoutines';

export type SendState = {
  +transactionStatus: ?string,
  +isLoading: boolean,
};

export const initialSendState: SendState = {
  transactionStatus: null,
  isLoading: false,
};

const sendReducer = (
  state: SendState = initialSendState,
  action: RoutineAction,
): SendState => {
  switch (action.type) {
    case sendRoutine.TRIGGER:
      return {
        ...state,
        isLoading: true,
      };

    case sendRoutine.SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case sendRoutine.FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case sendRoutine.FULFILL:
      return {
        ...state,
        isLoading: false,
      };

    case clearRoutine.TRIGGER:
      return {
        ...state,
        transactionStatus: initialSendState.transactionStatus,
      };

    default:
      return state;
  }
};

export default sendReducer;
