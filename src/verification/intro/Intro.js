// @flow

import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AppRouter, { routes } from '../../router';
import { Button, Heading, Link, Paragraph, PrimaryButton, Top } from '../../ui';
import withUser from '../../user/withUser';
import { VERIFICATION_PROFILE_ROUTE } from '../constants';

const StyledHeading = styled(Heading)`
  color: #2a2a2a;
  margin-bottom: 14px;
`;

const Bulletpoint = styled(Paragraph)`
  font-size: 14px;
`;

const Links = styled(Paragraph)`
  margin-top: 24px;
`;

export type Props = {
  isVerified: ?boolean,
};

export const Intro = (props: Props) =>
  props.isVerified ? (
    <AppRouter defaultOnEnter />
  ) : (
    <div>
      <Top>
        <StyledHeading>We need to get to know you better.</StyledHeading>
      </Top>
      <Paragraph alt>
        The wallet is down for maintenance. You may still get ready for launch.
      </Paragraph>
      <ul>
        <li>
          <Bulletpoint alt>
            Please have your passport copy and utility bill nearby.
          </Bulletpoint>
        </li>
        <li>
          <Bulletpoint alt>
            As a welcome to the community we are giving you a Change card for
            free.
          </Bulletpoint>
        </li>
      </ul>
      <Links>
        <Link to={VERIFICATION_PROFILE_ROUTE}>
          <PrimaryButton>Let’s get started</PrimaryButton>
        </Link>
        <Link to={routes.BASE}>
          <Button>Cancel</Button>
        </Link>
      </Links>
    </div>
  );

const mapStateToProps: MapStateToProps<*, Props, *> = state => ({
  isVerified: state.user.isVerified,
});

const ConnectedIntro = connect(mapStateToProps)(withUser(Intro));

ConnectedIntro.displayName = 'Intro';

export default ConnectedIntro;
