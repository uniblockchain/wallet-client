// @flow

import confirmReducer from './confirmReducer';
import confirmRoutine from './confirmRoutine';

describe('confirm reducer', () => {
  const initialState = { error: undefined };

  it('adds error to state', () => {
    const action = confirmRoutine.failure('Problem');
    const newState = confirmReducer(initialState, action);
    expect(newState.error).toBe('Problem');
  });
});
