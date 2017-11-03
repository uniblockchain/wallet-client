// @flow

import type { Quote } from './quoteApi';

const GET_QUOTE_REQUESTED = '@quote/GET_QUOTE_REQUESTED';
export type GetQuoteRequest = {|
  +type: '@quote/GET_QUOTE_REQUESTED',
  +quote: Quote,
|};

const GET_QUOTE_SUCCEEDED = '@quote/GET_QUOTE_SUCCEEDED';
export type GetQuoteSuccess = {|
  +type: '@quote/GET_QUOTE_SUCCEEDED',
  +quote: Quote,
|};

const GET_QUOTE_FAILED = '@quote/GET_QUOTE_FAILED';
export type GetQuoteFail = {|
  +type: '@quote/GET_QUOTE_FAILED',
  +error: string,
|};

export type GetQuoteAction = GetQuoteRequest | GetQuoteSuccess | GetQuoteFail;

export default {
  GET_QUOTE_REQUESTED,
  GET_QUOTE_SUCCEEDED,
  GET_QUOTE_FAILED,
};
