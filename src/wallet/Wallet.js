// @flow
import * as React from 'react';
import type { MapStateToProps } from 'react-redux';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Wallet as WalletClass } from './walletState';
import CurrencyTabs from './currencyTabs';
import { Card, Link, Paragraph, PrimaryButton, Divider } from '../ui';
import CurrencyName from './CurrencyName';
import withWallet from './withWallet';
import { getActiveWallet } from '../redux/selectors';
import address from './img/address.png';
import { Transactions } from '../overview/transactions/Transactions';
import type { State } from '../redux/rootReducer';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90vw;
`;

export const Balance = styled.h1`
  font-size: 36px;
  text-align: center;
  color: #00346b;
  margin-bottom: 10px;
`;

export const FiatBalance = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #a1a1a1;
`;

export const BalanceTitle = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  color: #a1a1a1;
  margin-bottom: 6px;
`;

const LinkWithMargin = Link.extend`
  margin-right: 6px;
  width: 100%;
`;

const Image = styled.img`
  width: 80vw;
  display: block;
  margin: 0 auto;
`;

const PaddedParagraph = Paragraph.extend`
  padding: 65px 65px 50px 65px;
  text-align: center;
`;

export type Props = {
  wallet: ?WalletClass,
  representationalCurrency: string,
};

type WalletProps = {
  wallet: WalletClass,
};

export const WalletButtons = ({ wallet }: WalletProps) => {
  if (wallet.hasBalance()) {
    return (
      <Buttons>
        <LinkWithMargin to="/receive">
          <PrimaryButton>Receive</PrimaryButton>
        </LinkWithMargin>
        <LinkWithMargin to="/send">
          <PrimaryButton>Send</PrimaryButton>
        </LinkWithMargin>
      </Buttons>
    );
  }
  const currency = CurrencyName.get(wallet.currency);
  return (
    <Buttons>
      <Link to="/receive">
        <PrimaryButton>{`Get ${currency}`}</PrimaryButton>
      </Link>
    </Buttons>
  );
};

export const WalletActivity = ({ wallet }: WalletProps) => {
  if (wallet.hasBalance()) {
    return <Transactions transactions={wallet.transactions} />;
  }
  const currency = CurrencyName.get(wallet.currency);
  return (
    <div>
      <Divider small />
      <PaddedParagraph>
        Start by depositing {currency} to your account
      </PaddedParagraph>
      <Image src={address} alt="Address" />
      <Divider small />
    </div>
  );
};

const formatBalance = (number: number) => {
  if (!number) {
    return '0.00';
  }
  return number.toFixed(6);
};

export const TransactionsCard = styled(Card)`
  padding: 0 0 4em 0;
`;

export const Wallet = ({ wallet, representationalCurrency }: Props) => {
  if (!wallet) {
    return null;
  }
  return (
    <div>
      <CurrencyTabs />
      <Card>
        <MainContent>
          <BalanceTitle>Balance</BalanceTitle>
          <Balance>{formatBalance(wallet.getBalance())}</Balance>
          <FiatBalance>
            ~{' '}
            {wallet
              .getRepresentationalBalance(representationalCurrency)
              .toLocaleString('en-US', {
                style: 'currency',
                currency: representationalCurrency,
              })}
          </FiatBalance>
          <WalletButtons wallet={wallet} />
        </MainContent>
      </Card>
      <TransactionsCard>
        <WalletActivity wallet={wallet} />
      </TransactionsCard>
    </div>
  );
};

const mapStateToProps: MapStateToProps<State, Props, Props> = state => ({
  wallet: getActiveWallet(state),
  representationalCurrency: state.wallet.currency,
});

const reduxComponent = connect(mapStateToProps);
export default withWallet(reduxComponent(Wallet));
