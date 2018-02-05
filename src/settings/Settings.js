// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import variables from '../landing/variables';
import { Header, Modal, Top, WrappedContent } from '../ui';
import { withUser } from '../user';
import type { User } from '../user/userState';
import { removeSecret } from './multiFactorAuth/multiFactorAuthActions';
import MultiFactorAuthForm from './multiFactorAuth/MultiFactorAuthForm';
import { createRoutine } from './multiFactorAuth/multiFactorAuthRoutines';

const StyledList = styled.ul`
  margin-top: 20px;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  list-style: none;
  text-transform: uppercase;
  padding: 18px 0 18px 0;
  border-bottom: 1px solid ${variables.colorNeutralLightest};
  cursor: pointer;
`;

const Item = styled.span`
  color: ${variables.colorNeutral};
`;

const Status = styled.span`
  color: #02bda5;
`;

const StyledParagraph = styled.p`
  margin: 28px 0;
`;

const ImageContainer = styled.p`
  text-align: center;
`;

export type Props = {
  user: User,
  email: string,
  fetchNewQRCode: string => void,
  removeSecretFromState: () => void,
  password: string,
  secret: string,
};

type State = {
  showConfirmationModal: boolean,
  show2FaSetupModal: boolean,
};

export class Settings extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showConfirmationModal: false,
      show2FaSetupModal: false,
    };
  }

  render() {
    const {
      fetchNewQRCode,
      user,
      password,
      email,
      secret,
      removeSecretFromState,
    } = this.props;
    const { showConfirmationModal, show2FaSetupModal } = this.state;

    const handleClick = () => {
      this.setState({
        showConfirmationModal: true,
      });
    };

    const handleClose = () => {
      removeSecretFromState();

      this.setState({
        showConfirmationModal: false,
        show2FaSetupModal: false,
      });
    };

    const handleConfirm = () => {
      fetchNewQRCode(password);

      this.setState({
        showConfirmationModal: false,
        show2FaSetupModal: true,
      });
    };

    return (
      <WrappedContent>
        <Top>
          <Header alt>My account</Header>
          <StyledList>
            <StyledListItem onClick={handleClick}>
              <Item>2-Factor Authentication</Item>
              <Status>{user.isUsing2Fa ? 'On' : 'Off'}</Status>
            </StyledListItem>
          </StyledList>
        </Top>
        {showConfirmationModal && (
          <Modal
            type="Prompt"
            title="Set up 2FA"
            description="Are you sure you wish to set up your two factor authentication?"
            onConfirm={handleConfirm}
            onCancel={handleClose}
          >
            <MultiFactorAuthForm />
          </Modal>
        )}
        {show2FaSetupModal &&
          secret && (
            <Modal title="Scan to set up" onConfirm={handleClose}>
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
      </WrappedContent>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  email: state.user.email || '',
  password: ((state.form.multiFactorAuth || {}).values || {}).password,
  secret: state.multiFactorAuth.secret,
});

const mapDispatchToProps = {
  fetchNewQRCode: createRoutine,
  removeSecretFromState: removeSecret,
};

const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(
  Settings,
);

export default withUser(ConnectedSettings);
