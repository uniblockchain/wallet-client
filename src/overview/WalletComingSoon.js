// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import { Button, Header, Top, WrappedContent } from '../ui';
import { withUser } from '../user';
import AppRouter, { routes } from '../router';

export type Props = {
  verified: boolean,
};

export const WalletComingSoon = ({ verified }: Props) => {
  if (verified) {
    return <AppRouter overview />;
  }
  return (
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
};

const mapStateToProps: MapStateToProps<*, Props, *> = state => ({
  verified: state.user.isVerified,
});

export default withUser(connect(mapStateToProps)(WalletComingSoon));
