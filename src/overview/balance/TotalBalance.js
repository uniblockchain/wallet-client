// @flow

import React, { Component } from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import variables from '../../ui/variables';

import withWallet from '../../wallet/withWallet';
import { withUser } from '../../user';
import type { WalletType } from '../../wallet/walletState';
import { Wallet } from '../../wallet/walletState';

const BrightGreenText = styled.p`
  font-family: ${variables.fontPrimaryBold};
  font-size: ${variables.fontSizeTiny};
  color: ${variables.colorGreenBright};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 14px;
`;

const StyledBalanceText = styled.p`
  font-family: ${variables.fontPrimaryBold};
  font-size: ${variables.fontSizeLargest};
  text-align: center;
  margin-top: 0;
  line-height: 1;
`;

type Props = {
  wallets: Array<WalletType>,
  currency: string,
  isVerified: boolean,
};

type State = {
  totalBalance: number,
};

export class TotalBalance extends Component<Props, State> {
  getTotalBalance(wallets: Array<WalletType>, currency: string) {
    const walletBalances = this.getBalances(wallets, currency);
    return walletBalances
      .reduce((balance1, balance2) => balance1 + balance2, 0)
      .toFixed(2);
  }

  getBalances(wallets: Array<WalletType>, currency: string) {
    return wallets.map((wallet: WalletType) =>
      new Wallet(wallet).getRepresentationalBalance(currency),
    );
  }

  render() {
    return (
      <div>
        {this.props.isVerified && (
          <div>
            <BrightGreenText>My Balance</BrightGreenText>
            <StyledBalanceText>
              {this.getTotalBalance(this.props.wallets, this.props.currency)}
            </StyledBalanceText>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<*, Props, *> = state => ({
  wallets: state.wallet
    ? state.wallet.wallets.map((wallet: WalletType) => new Wallet(wallet))
    : [],
  currency: state.wallet ? state.wallet.currency : undefined,
  isVerified: state.user.isVerified,
});

export default withUser(withWallet(connect(mapStateToProps)(TotalBalance)));
