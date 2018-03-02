// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Modal } from '../../ui';
import { closeAllModals } from './multiFactorAuthActions';
import MultiFactorAuthForm from './MultiFactorAuthForm';
import { createSecretRoutine } from './multiFactorAuthRoutines';
import { FormFeedback } from '../../ui/form';

const StyledParagraph = styled.p`
  margin: 28px 0;
`;

const ImageContainer = styled.p`
  text-align: center;
`;

export type Props = {
  fetchNewQRCode: string => void,
  password: string,
  email: string,
  secret: string,
  error: ?string,
  shouldShowConfirmationModal: boolean,
  shouldShowQRCodeModal: boolean,
  closeModal: () => void,
};

export const MultiFactorAuth = ({
  fetchNewQRCode,
  password,
  email,
  secret,
  error,
  shouldShowConfirmationModal,
  shouldShowQRCodeModal,
  closeModal,
}: Props) => (
  <div>
    {shouldShowConfirmationModal && (
      <Modal
        type="Prompt"
        title="Set up 2FA"
        description="Are you sure you wish to set up your two factor authentication?"
        onConfirm={() => fetchNewQRCode(password)}
        onCancel={closeModal}
      >
        {error && <FormFeedback>{error}</FormFeedback>}
        <MultiFactorAuthForm />
      </Modal>
    )}
    {shouldShowQRCodeModal &&
      secret && (
        <Modal title="Scan to set up" onConfirm={closeModal}>
          <StyledParagraph>
            Download an authenticator app, hit &quot;add&quot; and then scan
            this QR code.
          </StyledParagraph>
          Secret: {secret}
          <ImageContainer>
            <img
              src={`https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=otpauth://totp/getchange.com:${email}?secret=${secret}&issuer=getchange.com`}
              alt="QR Code"
            />
          </ImageContainer>
        </Modal>
      )}
  </div>
);

const mapStateToProps = state => ({
  email: state.user.email || '',
  password: ((state.form.multiFactorAuth || {}).values || {}).password,
  secret: state.multiFactorAuth.secret,
  error: state.multiFactorAuth.error,
  shouldShowConfirmationModal: state.multiFactorAuth.showConfirmationModal,
  shouldShowQRCodeModal: state.multiFactorAuth.show2FaSetupModal,
});

const mapDispatchToProps = {
  fetchNewQRCode: createSecretRoutine,
  closeModal: closeAllModals,
};

const ConnectedMultiFactorAuth = connect(mapStateToProps, mapDispatchToProps)(
  MultiFactorAuth,
);

export default ConnectedMultiFactorAuth;
