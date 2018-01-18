// @flow

import React from 'react';
import { shallow } from 'enzyme';
import type { Props } from './OverviewSlider';
import { OverviewSlider } from './OverviewSlider';
import { Header } from '../../ui';
import { testWallet } from '../../fixtures';

describe('Overview Slider component', () => {
  let component;

  const props: Props = {
    isNewUser: false,
    wallets: [testWallet],
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
