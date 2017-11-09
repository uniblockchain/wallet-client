// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { OverviewSlider } from './OverviewSlider';
import type { Props } from './OverviewSlider';
import { Header } from '../../ui';

describe('Overview Slider component', () => {
  let component;

  const props: Props = {
    isNewUser: false,
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
});
