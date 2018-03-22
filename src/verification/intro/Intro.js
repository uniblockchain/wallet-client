// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppRouter, { routes } from '../../router';
import { Button, Heading, Paragraph, PrimaryButton, Top } from '../../ui';
import cardOrderApi from '../../card/order/cardOrderApi';
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

type State = {
  verified: ?boolean,
};

export class Intro extends Component<any, State> {
  state = {
    verified: false,
  };

  componentDidMount() {
    cardOrderApi.hasOrder().then((ordered: boolean) => {
      this.setState({ verified: ordered });
    });
  }

  render() {
    return this.state.verified ? (
      <AppRouter walletComingSoon />
    ) : (
      <div>
        <Top>
          <StyledHeading>We need to get to know you better.</StyledHeading>
        </Top>
        <Paragraph alt>
          The wallet is down for maintenance. You may still get ready for
          launch.
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
          <Link to={routes.LOGOUT}>
            <Button>Log out</Button>
          </Link>
        </Links>
      </div>
    );
  }
}

Intro.displayName = 'Intro';

export default Intro;
