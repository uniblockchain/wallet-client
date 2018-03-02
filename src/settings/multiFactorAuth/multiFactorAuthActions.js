// @flow
import type RoutineAction from 'redux-saga-routines';

export const MODALS_CLOSE = '@multiFactorAuth/MODALS_CLOSE';
export const CONFIRMATION_MODAL_OPEN =
  '@multiFactorAuth/CONFIRMATION_MODAL_OPEN';
export const QR_CODE_MODAL_OPEN = '@multiFactorAuth/QR_CODE_MODAL_OPEN';

export type CloseModals = {
  type: '@multiFactorAuth/MODALS_CLOSE',
  payload?: any,
};

export type OpenConfirmationModal = {
  type: '@multiFactorAuth/CONFIRMATION_MODAL_OPEN',
  payload?: any,
};

export type OpenQRModal = {
  type: '@multiFactorAuth/QR_CODE_MODAL_OPEN',
  payload?: any,
};

export type MultiFactorAuthAction =
  | RoutineAction
  | CloseModals
  | OpenConfirmationModal
  | OpenQRModal;

export const closeAllModals = (): CloseModals => ({
  type: MODALS_CLOSE,
});

export const openConfirmationModal = (): OpenConfirmationModal => ({
  type: CONFIRMATION_MODAL_OPEN,
});

export const openQRCodeModal = (): OpenQRModal => ({
  type: QR_CODE_MODAL_OPEN,
});

export default {
  closeAllModals,
  openConfirmationModal,
  openQRCodeModal,
};
