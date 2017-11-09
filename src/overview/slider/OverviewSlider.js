// @flow

import React from 'react';
import { Header, PrimaryButton, Link, Paragraph } from '../../ui';

import { Slider, Slide } from '../../ui/slider';
import withWallet from '../../wallet/withWallet';

export type Props = {
  isNewUser: boolean,
};

const StyledParagraph = Paragraph.extend`
  color: ${props => (props.alt ? props.theme.alt : props.theme.main)};
`;

export const OverviewSlider = ({ isNewUser }: Props) => (
  <Slider>
    {isNewUser ? (
      <div>
        <Slide>
          <Header>Congratulations</Header>
          <StyledParagraph>Your account is now ready</StyledParagraph>
        </Slide>
      </div>
    ) : (
      ''
    )}
    {!isNewUser ? (
      <div>
        <Slide>
          <Header>Welcome back!</Header>
          <StyledParagraph>Good to see you again.</StyledParagraph>
        </Slide>
      </div>
    ) : (
      ''
    )}
    <div>
      <Slide>
        <Header>Order your card</Header>
        <StyledParagraph>
          Make everyday purchases with Bitcoin and other cryptocurrencies
        </StyledParagraph>
        <PrimaryButton>
          <Link to="/card">Order here</Link>
        </PrimaryButton>
      </Slide>
    </div>
    <div>
      <Slide alt>
        <Header alt>Deposit funds</Header>
        <StyledParagraph alt>
          Start by depositing Bitcoin to your account
        </StyledParagraph>
        <PrimaryButton alt>
          <Link to="/receive">Learn more</Link>
        </PrimaryButton>
      </Slide>
    </div>
  </Slider>
);

export default withWallet(OverviewSlider);
