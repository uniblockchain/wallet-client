// @flow

import React from 'react';
import { Header, PrimaryButton, Link, Paragraph } from '../../ui';

import { Slider, Slide } from '../../ui/slider';
import withWallet from '../../wallet/withWallet';

export type Props = {
  isNewUser: boolean,
};

export const OverviewSlider = ({ isNewUser }: Props) => (
  <Slider>
    {isNewUser ? (
      <div>
        <Slide>
          <Header>Congratulations</Header>
          <Paragraph>Your account is now ready</Paragraph>
        </Slide>
      </div>
    ) : (
      ''
    )}
    {!isNewUser ? (
      <div>
        <Slide>
          <Header>Welcome back!</Header>
          <Paragraph>Good to see you again.</Paragraph>
        </Slide>
      </div>
    ) : (
      ''
    )}
    <div>
      <Slide>
        <Header>Order your card</Header>
        <Paragraph>
          Make everyday purchases with Bitcoin and other cryptocurrencies
        </Paragraph>
        <PrimaryButton>
          <Link to="/card">Order here</Link>
        </PrimaryButton>
      </Slide>
    </div>
    <div>
      <Slide alt>
        <Header alt>Deposit funds</Header>
        <Paragraph alt>Start by depositing Bitcoin to your account</Paragraph>
        <PrimaryButton alt>
          <Link to="/receive">Learn more</Link>
        </PrimaryButton>
      </Slide>
    </div>
  </Slider>
);

export default withWallet(OverviewSlider);
