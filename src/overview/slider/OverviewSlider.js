// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header, PrimaryButton, BlueTheme } from '../../ui';

import { Slider, Slide } from '../../ui/slider';
import withWallet from '../../wallet/withWallet';

export const OverviewSlider = () => (
  <Slider>
    <div>
      <Slide>
        <Header>Congratulations</Header>
        <p>Your account is now ready</p>
        <PrimaryButton>Cool, what next</PrimaryButton>
      </Slide>
    </div>
    <div>
      <ThemeProvider theme={BlueTheme}>
        <Slide>
          <Header>Order your card</Header>
          <p>Make everyday purchases with Bitcoin and other cryptocurrencies</p>
          <PrimaryButton>Order here</PrimaryButton>
        </Slide>
      </ThemeProvider>
    </div>
    <div>
      <Slide>
        <Header>Deposit funds</Header>
        <p>Start by depositing Bitcoin to your account</p>
        <PrimaryButton>Learn more</PrimaryButton>
      </Slide>
    </div>
  </Slider>
);

export default withWallet(OverviewSlider);
