// @flow

import confirmReducer from './confirmReducer';
import confirmRoutine from './confirmRoutine';

describe('confirm reducer', () => {
  const error = 'Problem';
  const initialState = { error: null };
  const errorState = { error };

  it('adds error to state', () => {
    const action = confirmRoutine.failure(error);
    const newState = confirmReducer(initialState, action);
    expect(newState).toEqual(errorState);
  });

  it('removes error from state on success', () => {
    const action = confirmRoutine.success();
    const newState = confirmReducer(errorState, action);
    expect(newState).toEqual(initialState);
  });
});
