// @flow

import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import { Wallet } from '../../wallet/walletState';
import type { WalletType } from '../../wallet/walletState';
import { Header, Link, Paragraph, PrimaryButton } from '../../ui';

import { Slide, Slider } from '../../ui/slider';
import withWallet from '../../wallet/withWallet';
import congratzImage from './img/congratz.svg';

export type Props = {
  isNewUser: boolean,
  wallets: Array<WalletType>,
};

const StyledParagraph = Paragraph.extend`
  color: ${props => (props.alt ? props.theme.alt : props.theme.main)};
`;

const CongratzSlide = Slide.extend`
  background-image: url(${congratzImage});
  background-repeat: no-repeat;
`;

const hasAnyBalance = (walletState: Array<WalletType>): boolean =>
  !!walletState.map(w => new Wallet(w)).find(w => w.hasBalance());

export const OverviewSlider = ({ isNewUser, wallets }: Props) => (
  <Slider>
    {isNewUser ? (
      <div>
        <CongratzSlide>
          <Header>Congratulations</Header>
          <StyledParagraph>Your account is now ready</StyledParagraph>
        </CongratzSlide>
      </div>
    ) : (
      <div>
        <CongratzSlide>
          <Header>Welcome back!</Header>
          <StyledParagraph>Good to see you again.</StyledParagraph>
        </CongratzSlide>
      </div>
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
    {!hasAnyBalance(wallets) && (
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
    )}
  </Slider>
);

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
});

const reduxComponent = connect(mapStateToProps);
export default withWallet(reduxComponent(OverviewSlider));
