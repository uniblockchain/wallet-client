// @flow

import React from 'react';
import type { Location } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Card, WrappedContent, Top, Header, Button } from '../ui';
import withWallet from '../wallet/withWallet';
import { withUser } from '../user';
import { routes } from '../router';

export type Props = {
  location: Location,
};

export const TransactionsCard = styled(Card)`
  padding: 1em 0 4em 0;
  .title {
    padding-left: 20px;
  }
`;

export const WalletComingSoon = ({ location }: Props) => (
  <div>
    <WrappedContent>
      <Top>
        <Header alt>
          Hey, there!
          <br />
        </Header>
        <div>Thanks for ordering the card!</div>
        <div>Wallet will be available soon.</div>
      </Top>
      <Link to={routes.LOGOUT}>
        <Button>Log out</Button>
      </Link>
    </WrappedContent>
  </div>
);
export default withUser(withWallet(WalletComingSoon));
