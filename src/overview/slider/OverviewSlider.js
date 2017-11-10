// @flow

import React from 'react';
import { Header, PrimaryButton, Link, Paragraph } from '../../ui';

import { Slider, Slide } from '../../ui/slider';
import withWallet from '../../wallet/withWallet';
import congratzImage from './img/congratz.svg';

export type Props = {
  isNewUser: boolean,
};

const StyledParagraph = Paragraph.extend`
  color: ${props => (props.alt ? props.theme.alt : props.theme.main)};
`;

const CongratzSlide = Slide.extend`
  background-image: url(${congratzImage});
  background-repeat: no-repeat;
`;

export const OverviewSlider = ({ isNewUser }: Props) => (
  <Slider>
    {isNewUser ? (
      <div>
        <CongratzSlide>
          <Header>Congratulations</Header>
          <StyledParagraph>Your account is now ready</StyledParagraph>
        </CongratzSlide>
      </div>
    ) : (
      ''
    )}
    {!isNewUser ? (
      <div>
        <CongratzSlide>
          <Header>Welcome back!</Header>
          <StyledParagraph>Good to see you again.</StyledParagraph>
        </CongratzSlide>
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
