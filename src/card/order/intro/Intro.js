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
`;

const Bulletpoint = styled(Paragraph)`
  font-size: 14px;
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
      <AppRouter card />
    ) : (
      <div>
        <Top>
          <StyledHeader>Your card is just a few steps away.</StyledHeader>
        </Top>

        <Paragraph alt>Few things to note:</Paragraph>
        <ul>
          <li>
            <Bulletpoint alt>
              We are currently shipping to EU only.&nbsp; If you live outside of
              the EU, please DO NOT order a card.
            </Bulletpoint>
          </li>
          <li>
            <Bulletpoint alt>
              For identification please have your id card / passport and proof
              of address nearby.
            </Bulletpoint>
          </li>
          <li>
            <Bulletpoint alt>The card ordering is free.</Bulletpoint>
          </li>
        </ul>
        <Link to={CARD_ORDER_PROFILE_ROUTE}>
          <PrimaryButton>Let’s get started</PrimaryButton>
        </Link>
        <Link to={routes.LOGOUT}>
          <Button>Log out</Button>
        </Link>
      </div>
    );
  }
}

Intro.displayName = 'Intro';

export default Intro;
