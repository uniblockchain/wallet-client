// @flow

import type { SendAction } from './sendActionTypes';
import actionType from './sendActionTypes';

export type SendState = {
  +transactionStatus: ?string,
  error: ?string,
};

export const initialSendState: SendState = {
  transactionStatus: null,
  error: null,
};

const sendReducer = (
  state: SendState = initialSendState,
  action: SendAction,
): SendState => {
  switch (action.type) {
    case actionType.SEND_TRANSACTION_REQUESTED:
      return { ...state };

    case actionType.SEND_TRANSACTION_SUCCEEDED:
      return {
        ...state,
        ...action.response,
      };

    case actionType.SEND_TRANSACTION_FAILED:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default sendReducer;
