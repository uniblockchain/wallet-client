// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header, Paragraph, PrimaryButton, Button, Top } from '../../../ui';
import { CARD_ORDER_PROFILE_ROUTE } from '../constants';
import { routes } from '../../../router';

const StyledHeader = styled(Header)`
  color: #2a2a2a;
`;

const Bulletpoint = styled(Paragraph)`
  font-size: 14px;
`;

export const Intro = () => (
  <div>
    <Top>
      <StyledHeader>Your card is just a few steps away.</StyledHeader>
    </Top>

    <Paragraph alt>Few things to note:</Paragraph>
    <ul>
      <li>
        <Bulletpoint alt>
          We are currently shipping to EU only.&nbsp; If you live outside of the
          EU, please DO NOT order a card.
        </Bulletpoint>
      </li>
      <li>
        <Bulletpoint alt>
          For identification please have your id card / passport and proof of
          address nearby.
        </Bulletpoint>
      </li>
      <li>
        <Bulletpoint alt>
          The card ordering fee is 9€,&nbsp; which will be charged in the
          equivalent value of your selected cryptocurrency.
        </Bulletpoint>
      </li>
    </ul>
    <Link to={CARD_ORDER_PROFILE_ROUTE}>
      <PrimaryButton>Let’s get started</PrimaryButton>
    </Link>
    <Link to={routes.BASE}>
      <Button>Cancel</Button>
    </Link>
  </div>
);

Intro.displayName = 'Intro';

export default Intro;
