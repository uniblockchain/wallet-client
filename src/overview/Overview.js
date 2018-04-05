// @flow

import React from 'react';

import { Card } from '../ui';
import withWallet from '../wallet/withWallet';
import { withUser } from '../user';
import VerificationButton from './verificationButton';
import { MarketPortfolioSlider } from './slider';
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import { getTotalBalance } from './balance/TotalBalance';
import type { WalletType } from '../wallet/walletState';
import { Wallet } from '../wallet/walletState';

const BalanceCard = Card.extend`
  margin-top: 46px;
`;

type Props = {
  wallets: Array<WalletType>,
  currency: string,
  isVerified: boolean,
};

const marketPortfolioSlider = (
  <BalanceCard>
    <MarketPortfolioSlider />
  </BalanceCard>
);

const verificationButton = <VerificationButton />;

export const Overview = ({ wallets, currency, isVerified }: Props) => (
  <div>
    {isVerified &&
      getTotalBalance(wallets, currency) > 0 &&
      marketPortfolioSlider}
    {!isVerified && verificationButton}
  </div>
);

const mapStateToProps: MapStateToProps<*, Props, *> = state => ({
  wallets: state.wallet
    ? state.wallet.wallets.map((wallet: WalletType) => new Wallet(wallet))
    : [],
  currency: state.wallet ? state.wallet.currency : undefined,
  isVerified: state.user.isVerified,
});

export default withUser(withWallet(connect(mapStateToProps)(Overview)));
