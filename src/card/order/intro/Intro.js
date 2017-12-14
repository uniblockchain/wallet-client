// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header, Paragraph, PrimaryButton, Button, Top } from '../../../ui';
import { CARD_ORDER_PROFILE_ROUTE } from '../constants';
import { routes } from '../../../router';

const Container = styled.div`
  padding-top: 61px;
  margin-left: 34px;
  margin-right: 49px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledHeader = styled(Header)`
  color: #2a2a2a;
`;

const Bulletpoint = styled(Paragraph)`
  font-size: 14px;
`;

export const Intro = () => (
  <Container>
    <Top>
      <StyledHeader>Your card is just a few steps away.</StyledHeader>
    </Top>

    <Paragraph alt>Few things to note:</Paragraph>
    <ul>
      <li>
        <Bulletpoint alt>We are currently shipping to EU only.</Bulletpoint>
      </li>
      <li>
        <Bulletpoint alt>
          For identification please have your id card / passport and proof of
          address nearby.
        </Bulletpoint>
      </li>
      <li>
        <Bulletpoint alt>One time card order fee is €9.</Bulletpoint>
      </li>
    </ul>
    <Link to={CARD_ORDER_PROFILE_ROUTE}>
      <PrimaryButton>Let’s get started</PrimaryButton>
    </Link>
    <Link to={routes.BASE}>
      <Button>Cancel</Button>
    </Link>
  </Container>
);

Intro.displayName = 'Intro';

export default Intro;
