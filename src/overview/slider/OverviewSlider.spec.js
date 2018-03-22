// @flow

import React from 'react';
import { shallow } from 'enzyme';
import type { Props } from './OverviewSlider';
import { OverviewSlider } from './OverviewSlider';
import { Heading } from '../../ui';
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
    component.setProps({ isNewUser: true });

    expect(component.contains(<Heading>Congratulations</Heading>)).toBe(true);
  });

  it('renders the login welcome message for existing users', () => {
    component.setProps({ isNewUser: false });

    expect(component.contains(<Heading>Welcome back!</Heading>)).toBe(true);
  });

  it('does not render deposit slide when any wallet has deposit', () => {
    component.setProps({ isNewUser: false });

    expect(component.contains(<Heading alt>Deposit funds</Heading>)).toBe(
      false,
    );
  });
});
