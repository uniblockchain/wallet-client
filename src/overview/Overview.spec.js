// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Overview } from './Overview';
import type { Props } from './Overview';
import Transactions from './transactions';
import BalanceDoughnut from './balance';
import OverviewSlider from './slider';

describe('Overview component', () => {
  let component;

  const props: Props = {
    location: { pathname: '/overview', search: '', hash: '' },
  };

  beforeEach(() => {
    component = shallow(<Overview {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders the balance doughnut', () => {
    expect(component.find(BalanceDoughnut).length).toEqual(1);
  });

  it('renders the overview slider for existing users', () => {
    expect(component.contains(<OverviewSlider />)).toBe(true);
  });

  it('renders the overview slider for new users', () => {
    const slideProps: Props = {
      location: {
        pathname: '/overview',
        search: '',
        hash: '',
        state: { isNewUser: true },
      },
    };
    component = shallow(<Overview {...slideProps} />);
    expect(component.contains(<OverviewSlider isNewUser />)).toBe(true);
  });

  it('renders transactions', () => {
    expect(component.contains(<Transactions />)).toBe(true);
  });
});
