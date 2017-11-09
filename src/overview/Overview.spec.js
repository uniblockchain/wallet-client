// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Overview } from './Overview';
import type { Props } from './Overview';
import Transactions from './transactions';
import BalanceDoughnut from './balance';
import OverviewSlider from './slider';
import { Divider } from '../ui';

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

  it('does not render the overview slider', () => {
    expect(component.find(OverviewSlider)).toHaveLength(0);
    expect(component.find(Divider)).toHaveLength(1);
  });

  it('renders the overview slider when location state has', () => {
    const slideProps: Props = {
      location: {
        pathname: '/overview',
        search: '',
        hash: '',
        state: { slideOpen: true },
      },
    };
    component = shallow(<Overview {...slideProps} />);
    expect(component.find(OverviewSlider)).toHaveLength(1);
    expect(component.find(Divider)).toHaveLength(0);
  });

  it('renders transactions', () => {
    expect(component.contains(<Transactions />)).toBe(true);
  });
});
