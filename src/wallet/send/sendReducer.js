// @flow

import type { SendAction } from './sendActionTypes';
import actionType from './sendActionTypes';

export type SendState = {
  +transactionStatus: ?string,
  +error: ?string,
  +isLoading: boolean,
};

export const initialSendState: SendState = {
  transactionStatus: null,
  error: null,
  isLoading: false,
};

const sendReducer = (
  state: SendState = initialSendState,
  action: SendAction,
): SendState => {
  switch (action.type) {
    case actionType.SEND_TRANSACTION_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case actionType.SEND_TRANSACTION_SUCCEEDED:
      return {
        ...state,
        ...action.response,
        isLoading: false,
      };

    case actionType.SEND_TRANSACTION_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default sendReducer;
