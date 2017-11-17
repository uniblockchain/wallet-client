// @flow

import React from 'react';
import { shallow } from 'enzyme';
import type { Props } from './OverviewSlider';
import { OverviewSlider } from './OverviewSlider';
import { Header } from '../../ui';
import type { WalletType } from '../../wallet/walletState';

describe('Overview Slider component', () => {
  let component;

  const wallet: WalletType = {
    id: 1,
    currency: 'BTC',
    address: '',
    transactions: [],
    receiveAddress: '2MvpyDrvrV3PNRTD8cBX9Hy97s7NtBSGfEN',
    balance: [
      {
        value: 0.19890018,
        currency: 'BTC',
      },
      {
        value: 1257.71,
        currency: 'EUR',
      },
    ],
  };

  const props: Props = {
    isNewUser: false,
    wallets: [wallet],
  };

  beforeEach(() => {
    component = shallow(<OverviewSlider {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders the signup congratz message for new users', () => {
    props.isNewUser = true;
    expect(component.contains(<Header>Welcome back!</Header>)).toBe(true);
  });

  it('renders the login welcome message for existing users', () => {
    props.isNewUser = false;
    expect(component.contains(<Header>Congratulations</Header>)).toBe(true);
  });

  it('does not render deposit slide when any wallet has deposit', () => {
    props.isNewUser = false;
    expect(component.contains(<Header alt>Deposit funds</Header>)).toBe(false);
  });
});
