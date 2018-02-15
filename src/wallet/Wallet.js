// @flow
import * as React from 'react';
import type { MapStateToProps } from 'react-redux';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';
import { Wallet as WalletClass } from './walletState';
import CurrencyTabs from './currencyTabs';
import { Card, Link, Paragraph, Divider } from '../ui';
import CurrencyName from './CurrencyName';
import withWallet from './withWallet';
import { getActiveWallet } from '../redux/selectors';
import address from './img/address.png';
import { Transactions } from '../overview/transactions/Transactions';
import type { State } from '../redux/rootReducer';
import { Balance } from './Balance';
import { AddIcon, SendIcon, ExchangeIcon } from '../ui/icon';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
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

const IconButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px 0px 20px;
`;

export type Props = {
  wallet: ?WalletClass,
  representationalCurrency: string,
};

type WalletProps = {
  wallet: WalletClass,
};

type IconProps = {
  item: string,
  classes: any,
};

const iconStyles = {
  root: {
    width: '30px',
    height: '30px',
  },
};

const Icon = withStyles(iconStyles)(({ item, classes }: IconProps): any => {
  switch (item) {
    case '/receive':
      return <AddIcon classes={{ root: classes.root }} />;
    case '/exchange':
      return <ExchangeIcon classes={{ root: classes.root }} />;
    case '/send':
      return <SendIcon classes={{ root: classes.root }} />;
    default:
      return null;
  }
});

export const WalletButtons = ({ wallet }: WalletProps) => {
  if (wallet.hasBalance()) {
    return (
      <Buttons>
        <LinkWithMargin to="/receive">
          <IconButton>
            <Icon item="/receive" />
            <span>Add</span>
          </IconButton>
        </LinkWithMargin>
        <LinkWithMargin to="/exchange">
          <IconButton>
            <Icon item="/exchange" />
            <span>Convert</span>
          </IconButton>
        </LinkWithMargin>
        <LinkWithMargin to="/send">
          <IconButton>
            <Icon item="/send" />
            <span>Send</span>
          </IconButton>
        </LinkWithMargin>
      </Buttons>
    );
  }
  return (
    <Buttons>
      <Link to="/receive">
        <IconButton>
          <Icon item="/receive" />
          <span>Add</span>
        </IconButton>
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
