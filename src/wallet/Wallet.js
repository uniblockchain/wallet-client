// @flow
import * as React from 'react';
import type { MapStateToProps } from 'react-redux';
import styled from 'styled-components';
import { connect } from 'react-redux';
import type { Wallet as WalletType } from './walletState';
import { Card, PrimaryButton, Link } from '../ui';
import CurrencyTabs from './currencyTabs';
import withWallet from './withWallet';
import { getActiveWallet } from '../redux/selectors';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90vw;
`;

const Balance = styled.p`
  font-size: 40px;
  font-weight: bold;
  line-height: 0.83;
  letter-spacing: -1.3px;
  text-align: center;
  color: #00346b;
`;

const FiatBalance = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #a1a1a1;
`;

const BalanceTitle = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  color: #a1a1a1;
`;

const ButtonWithMargin = PrimaryButton.extend`
  margin-right: 6px;
`;

type Props = {
  wallet: WalletType,
  representationalCurrency: string,
};

export const Wallet = ({ wallet, representationalCurrency }: Props) => {
  const getBalance = () =>
    wallet.balance
      .filter(it => it.currency === wallet.currency)
      .map(it => it.value)[0];

  const getRepresentationalBalance = () =>
    wallet.balance
      .filter(it => it.currency === representationalCurrency)
      .map(it => it.value)[0];

  if (!wallet) {
    return null;
  }
  return (
    <div>
      <CurrencyTabs />
      <Card>
        <MainContent>
          <BalanceTitle>Balance</BalanceTitle>
          <Balance>{getBalance()}</Balance>
          <FiatBalance>~ {getRepresentationalBalance()}</FiatBalance>
          <Buttons>
            <ButtonWithMargin>
              <Link to="/receive">Receive</Link>
            </ButtonWithMargin>
            <ButtonWithMargin>
              <Link to="/send">Send</Link>
            </ButtonWithMargin>
          </Buttons>
        </MainContent>
      </Card>
    </div>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  wallet: getActiveWallet(state),
  representationalCurrency: state.wallet.currency,
});

const reduxComponent = connect(mapStateToProps);
export default withWallet(reduxComponent(Wallet));
