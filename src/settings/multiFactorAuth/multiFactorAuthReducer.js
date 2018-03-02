// @flow
import {
  type MultiFactorAuthAction,
  MODALS_CLOSE,
  QR_CODE_MODAL_OPEN,
  CONFIRMATION_MODAL_OPEN,
} from './multiFactorAuthActions';
import { createSecretRoutine } from './multiFactorAuthRoutines';

export type MultiFactorAuthState = {|
  +secret: ?string,
  +error: ?string,
  +showConfirmationModal: boolean,
  +show2FaSetupModal: boolean,
|};

export const initialMultiFactorAuthState: MultiFactorAuthState = {
  secret: null,
  error: null,
  showConfirmationModal: false,
  show2FaSetupModal: false,
};

const multiFactorAuthReducer = (
  state: MultiFactorAuthState = initialMultiFactorAuthState,
  action: MultiFactorAuthAction,
): any => {
  switch (action.type) {
    case createSecretRoutine.SUCCESS:
      return {
        ...state,
        ...action.payload,
        showConfirmationModal: false,
        show2FaSetupModal: true,
        error: null,
      };

    case createSecretRoutine.FAILURE:
      return {
        ...state,
        error: action.payload,
        showConfirmationModal: true,
        show2FaSetupModal: false,
      };

    case MODALS_CLOSE:
      return {
        ...state,
        showConfirmationModal: false,
        show2FaSetupModal: false,
        error: null,
        secret: null,
      };

    case CONFIRMATION_MODAL_OPEN:
      return {
        ...state,
        showConfirmationModal: true,
        show2FaSetupModal: false,
      };

    case QR_CODE_MODAL_OPEN:
      return {
        ...state,
        showConfirmationModal: false,
        show2FaSetupModal: true,
      };

    default:
      return state;
  }
};

export default multiFactorAuthReducer;
