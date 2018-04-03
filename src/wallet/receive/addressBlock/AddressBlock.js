// @flow

import * as React from 'react';
import type { MapStateToProps } from 'react-redux';
import styled from 'styled-components';

import copy from 'copy-to-clipboard';
import { connect } from 'react-redux';
import { Wallet } from '../../walletState';
import { CurrencyName } from '../../../currency';
import withWallet from '../../withWallet';
import { getActiveWallet } from '../../../redux/selectors';
import { PrimaryButton, Content, Notification } from '../../../ui';
import { convertLitecoinAddress } from '../../litecoin/LitecoinAddressConverter';

type Props = {
  wallet: ?Wallet,
  onCopy: string => void,
};

const StyledContent = styled(Content)`
  align-items: center;
  padding: 0 18px 0 18px;
  h1 {
    color: ${props => props.theme.alt};
    margin: 39px 0 36px 0;
    font-size: 36px;
  }
`;

const AddressBox = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AddressHeading = styled.h2`
  padding-top: 13px;
  font-size: 12px;
  text-transform: uppercase;
  color: #02bda5;
`;

AddressHeading.displayName = 'AddressHeading';

const Address = styled.h2`
  font-size: 12px;
  background-color: white;
  color: #686868;
  padding: 10px;
  border-radius: 6px;
`;

Address.displayName = 'Address';

const CopyButton = styled(PrimaryButton)`
  font-size: 14px;
  height: 30px;
  margin-top: 4px;
  margin-bottom: 16px;
  width: auto;
  display: inline-block;
`;

CopyButton.displayName = 'CopyButton';

type State = {
  showNotification: boolean,
};

export class AddressBlock extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showNotification: false,
    };
  }
  handleCopy = (address: string) => {
    this.props.onCopy(address);
    this.setState({ showNotification: true });
  };
  handleNotificationClose = () => {
    this.setState({ showNotification: false });
  };
  render() {
    const { wallet } = this.props;
    if (!wallet) {
      return null;
    }

    const currencyName: string = CurrencyName.get(wallet.currency);
    const ltcAddress =
      wallet.currency === 'LTC' &&
      convertLitecoinAddress(wallet.receiveAddress);

    return (
      <StyledContent>
        <h1>Receive {currencyName}</h1>
        <AddressBox>
          <AddressHeading>Your {currencyName} address</AddressHeading>
          <Address>Coming soon.</Address>
          <CopyButton
            onClick={() => this.handleCopy(wallet ? wallet.receiveAddress : '')}
          >
            Tap to copy
          </CopyButton>
          {ltcAddress && (
            <div className="text-center">
              <AddressHeading>{ltcAddress.type}</AddressHeading>
              <Address>Coming soon.</Address>
              <CopyButton onClick={() => this.handleCopy(ltcAddress.address)}>
                Tap to copy
              </CopyButton>
            </div>
          )}
        </AddressBox>
        <Notification
          open={this.state.showNotification}
          onClose={this.handleNotificationClose}
          message={`Copied ${currencyName} address to clipboard`}
        />
      </StyledContent>
    );
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  wallet: getActiveWallet(state),
  onCopy: copy,
});

const reduxComponent = connect(mapStateToProps);
export default withWallet(reduxComponent(AddressBlock));
