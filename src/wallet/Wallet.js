// @flow
import * as React from 'react';
import type { MapStateToProps } from 'react-redux';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Wallet as WalletType } from './walletState';
import { Card, PrimaryButton, Link, Paragraph, Divider } from '../ui';
import CurrencyTabs from './currencyTabs';
import CurrencyName from './CurrencyName';
import withWallet from './withWallet';
import { getActiveWallet } from '../redux/selectors';
import address from './img/address.png';
import { Transactions } from '../overview/transactions/Transactions';

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

const Balance = styled.h1`
  font-size: 36px;
  text-align: center;
  color: #00346b;
  margin-bottom: 10px;
`;

const FiatBalance = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #a1a1a1;
`;

const BalanceTitle = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  color: #a1a1a1;
  margin-bottom: 6px;
`;

const ButtonWithMargin = PrimaryButton.extend`
  margin-right: 6px;
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

type Props = {
  wallet: WalletType,
  representationalCurrency: string,
};

type WalletButtonsProps = {
  wallet: WalletType,
};

const WalletButtons = ({ wallet }: WalletButtonsProps) => {
  if (wallet.hasBalance()) {
    return (
      <Buttons>
        <ButtonWithMargin>
          <Link to="/receive">Receive</Link>
        </ButtonWithMargin>
        <ButtonWithMargin>
          <Link to="/send">Send</Link>
        </ButtonWithMargin>
      </Buttons>
    );
  }
  return (
    <Buttons>
      <PrimaryButton>
        <Link to="/receive">{`Get ${CurrencyName.get(wallet.currency)}`}</Link>
      </PrimaryButton>
    </Buttons>
  );
};

const WalletActivity = ({ wallet }: WalletButtonsProps) => {
  if (wallet.hasBalance()) {
    return <Transactions wallets={[wallet]} />;
  }
  return (
    <div>
      <Divider small />
      <PaddedParagraph>
        Start by depositing {CurrencyName.get(wallet.currency)} to your account
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

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  wallet: getActiveWallet(state),
  representationalCurrency: state.wallet.currency,
});

const reduxComponent = connect(mapStateToProps);
export default withWallet(reduxComponent(Wallet));
