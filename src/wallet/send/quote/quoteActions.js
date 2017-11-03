// @flow

import sendActionTypes, {
  type GetQuoteFail,
  type GetQuoteRequest,
  type GetQuoteSuccess,
} from './quoteActionTypes';
import type { Quote } from './quoteApi';

const getQuoteRequested = (quote: Quote): GetQuoteRequest => ({
  type: sendActionTypes.GET_QUOTE_REQUESTED,
  quote,
});

const getQuoteSucceeded = (quote: Quote): GetQuoteSuccess => ({
  type: sendActionTypes.GET_QUOTE_SUCCEEDED,
  quote,
});

const getQuoteFailed = (error: string): GetQuoteFail => ({
  type: sendActionTypes.GET_QUOTE_FAILED,
  error,
});

export default {
  getQuoteRequested,
  getQuoteSucceeded,
  getQuoteFailed,
};
