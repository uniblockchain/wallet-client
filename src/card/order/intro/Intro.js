// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppRouter, { routes } from '../../../router';
import { Header, Paragraph, PrimaryButton, Button, Top } from '../../../ui';
import cardOrderApi from '../cardOrderApi';
import { CARD_ORDER_PROFILE_ROUTE } from '../constants';

const StyledHeader = styled(Header)`
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
  ordered: ?boolean,
};

export class Intro extends Component<any, State> {
  state = {
    ordered: false,
  };

  componentDidMount() {
    cardOrderApi.hasOrder().then((ordered: boolean) => {
      this.setState({ ordered });
    });
  }

  render() {
    return this.state.ordered ? (
      <AppRouter walletComingSoon />
    ) : (
      <div>
        <Top>
          <StyledHeader>
            Financial regulations require us to get to know you better.
          </StyledHeader>
        </Top>

        <Paragraph alt>A few things to note:</Paragraph>
        <ul>
          <li>
            <Bulletpoint alt>
              For identification please have your ID card / passport and proof
              of address nearby.
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
          <Link to={CARD_ORDER_PROFILE_ROUTE}>
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
