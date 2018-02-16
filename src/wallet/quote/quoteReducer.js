// @flow

import type RoutineAction from 'redux-saga-routines';
import { quoteRoutine, clearRoutine } from './quoteRoutine';
import type { MonetaryValue, MonetaryValuesMap } from '../walletState';

export type QuoteState = {
  from: ?MonetaryValuesMap,
  to: ?MonetaryValuesMap,
  fee: ?MonetaryValuesMap,
  minAmount?: MonetaryValue,
  maxAmount?: MonetaryValue,
  isLoading: boolean,
  error: ?string,
};

export const initialQuoteState: QuoteState = {
  from: null,
  to: null,
  fee: null,
  minAmount: undefined,
  maxAmount: undefined,
  isLoading: false,
  error: null,
};

const quoteReducer = (
  state: QuoteState = initialQuoteState,
  action: RoutineAction,
): QuoteState => {
  switch (action.type) {
    case quoteRoutine.TRIGGER:
      return {
        ...state,
        isLoading: true,
      };

    case quoteRoutine.SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };

    case quoteRoutine.FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case clearRoutine.TRIGGER:
      return {
        ...state,
        ...initialQuoteState,
      };

    default:
      return state;
  }
};

export default quoteReducer;
