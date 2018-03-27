// @flow

import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import AppRouter, { routes } from '../router';
import { Link, Bottom, Button, Heading, Top, WrappedContent } from '../ui';
import { withUser } from '../user';

export type Props = {
  verified: boolean,
};

export const WalletComingSoon = ({ verified }: Props) => {
  if (verified) {
    return <AppRouter overview />;
  }
  return (
    <WrappedContent>
      <Top>
        <Heading alt>You’re all set!</Heading>
        <br />
        <div>
          The wallet will be available soon and you’ll be the first to know.
        </div>
      </Top>
      <Bottom>
        <Link to={routes.LOGOUT}>
          <Button>Log out</Button>
        </Link>
      </Bottom>
    </WrappedContent>
  );
};

const mapStateToProps: MapStateToProps<*, Props, *> = state => ({
  verified: state.user.isVerified,
});

export default withUser(connect(mapStateToProps)(WalletComingSoon));
