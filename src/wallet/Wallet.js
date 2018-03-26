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
import { TransactionList } from '../overview/transactions/TransactionList';
import type { State } from '../redux/rootReducer';
import { Balance } from './Balance';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const LinkWithMargin = Link.extend`
  margin-right: 6px;
  width: 100%;
`;

const Image = styled.img`
  width: 80%;
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
    return <TransactionList transactions={wallet.transactions} />;
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
          <Balance wallet={wallet} currency={representationalCurrency} />
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
