// @flow

import { removeSecret } from './multiFactorAuthActions';
import multiFactorAuthReducer, {
  type MultiFactorAuthState,
  initialMultiFactorAuthState,
} from './multiFactorAuthReducer';
import { createRoutine } from './multiFactorAuthRoutines';

describe('multi factor auth reducer', () => {
  const multiFactorAuth: MultiFactorAuthState = {
    secret: 'someSecret',
    error: null,
  };
  const error = 'whoops';

  describe('handles multi factor auth secret creation', () => {
    it('triggers', () => {
      const password = 'test';
      const action = createRoutine.trigger(password);
      const newState = multiFactorAuthReducer(
        initialMultiFactorAuthState,
        action,
      );
      expect(newState).toEqual(initialMultiFactorAuthState);
    });

    it('succeeds', () => {
      const action = createRoutine.success(multiFactorAuth);
      const newState = multiFactorAuthReducer(
        initialMultiFactorAuthState,
        action,
      );
      expect(newState.secret).toEqual(multiFactorAuth.secret);
    });

    it('fails', () => {
      const action = createRoutine.failure(error);
      const newState = multiFactorAuthReducer(
        initialMultiFactorAuthState,
        action,
      );
      expect(newState.error).toEqual(error);
    });
  });

  it('handles multi factor auth secret removal', () => {
    const action = removeSecret();
    const newState = multiFactorAuthReducer(multiFactorAuth, action);
    expect(newState).toEqual(initialMultiFactorAuthState);
  });
});
