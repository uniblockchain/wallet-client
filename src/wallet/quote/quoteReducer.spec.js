// @flow
import { quoteRoutine, clearRoutine } from './quoteRoutine';
import quoteReducer, { initialQuoteState } from './quoteReducer';
import { testQuote, testQuoteCommand } from '../../fixtures';

describe('quote reducer', () => {
  it('handles request', () => {
    const action = quoteRoutine.trigger({ quote: testQuoteCommand });
    const newState = quoteReducer(initialQuoteState, action);
    expect(newState).toEqual({ ...initialQuoteState, isLoading: true });
  });

  it('handles success', () => {
    const action = quoteRoutine.success(testQuote);
    const newState = quoteReducer(initialQuoteState, action);
    expect(newState.fee).toEqual(testQuote.fee);
    expect(newState.from).toEqual(testQuote.from);
    expect(newState.to).toEqual(testQuote.to);
    expect(newState.isLoading).toEqual(false);
  });

  it('handles fail', () => {
    const error = 'Error';
    const action = quoteRoutine.failure(error);
    const newState = quoteReducer(initialQuoteState, action);
    expect(newState.isLoading).toEqual(false);
    expect(newState.error).toEqual(error);
  });

  it('clears quote', () => {
    const action = clearRoutine.trigger();
    const newState = quoteReducer({ ...initialQuoteState }, action);
    expect(newState).toEqual(initialQuoteState);
  });
});
