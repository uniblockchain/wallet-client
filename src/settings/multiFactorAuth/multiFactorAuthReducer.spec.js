// @flow

import {
  closeAllModals,
  openConfirmationModal,
  openQRCodeModal,
} from './multiFactorAuthActions';
import multiFactorAuthReducer, {
  initialMultiFactorAuthState,
  type MultiFactorAuthState,
} from './multiFactorAuthReducer';
import { createSecretRoutine } from './multiFactorAuthRoutines';

describe('multi factor auth reducer', () => {
  const multiFactorAuthState: MultiFactorAuthState = {
    secret: 'someSecret',
    error: null,
    showConfirmationModal: false,
    show2FaSetupModal: false,
  };
  const error = 'whoops';

  describe('handles multi factor auth secret creation', () => {
    it('succeeds', () => {
      const action = createSecretRoutine.success(multiFactorAuthState);

      const newState = multiFactorAuthReducer(
        initialMultiFactorAuthState,
        action,
      );

      expect(newState.secret).toEqual(multiFactorAuthState.secret);
    });

    it('fails', () => {
      const action = createSecretRoutine.failure(error);
      const newState = multiFactorAuthReducer(
        initialMultiFactorAuthState,
        action,
      );
      expect(newState.error).toEqual(error);
    });
  });

  describe('handles modals', () => {
    it('handles confirmation modal open', () => {
      const action = openConfirmationModal();

      const newState = multiFactorAuthReducer(
        initialMultiFactorAuthState,
        action,
      );

      expect(newState.showConfirmationModal).toEqual(true);
      expect(newState.show2FaSetupModal).toEqual(false);
      expect(newState.error).toEqual(null);
    });

    it('handles multi factor setup (QR code) modal open', () => {
      const action = openQRCodeModal();

      const newState = multiFactorAuthReducer(
        initialMultiFactorAuthState,
        action,
      );

      expect(newState.showConfirmationModal).toEqual(false);
      expect(newState.show2FaSetupModal).toEqual(true);
      expect(newState.error).toEqual(null);
    });

    it('handles modal close', () => {
      const action = closeAllModals();

      const newState = multiFactorAuthReducer(
        initialMultiFactorAuthState,
        action,
      );

      expect(newState.showConfirmationModal).toEqual(false);
      expect(newState.show2FaSetupModal).toEqual(false);
      expect(newState.error).toEqual(null);
      expect(newState.secret).toEqual(null);
    });
  });
});
