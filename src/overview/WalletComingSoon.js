// @flow

import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppRouter, { routes } from '../router';
import { Button, Header, Top, WrappedContent } from '../ui';
import { withUser } from '../user';

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
            You’re all set!
            <br />
          </Header>
          <div>
            The wallet will be available soon and you’ll be the first to know.
          </div>
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
