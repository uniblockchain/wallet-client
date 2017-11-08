// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Overview } from './Overview';
import Transactions from './transactions';
import BalanceDoughnut from './balance';
import OverviewSlider from './slider';

describe('Overview component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Overview />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders the balance doughnut', () => {
    expect(component.find(BalanceDoughnut).length).toEqual(1);
  });

  it('renders the overview slider', () => {
    expect(component.find(OverviewSlider).length).toEqual(1);
  });

  it('renders transactions', () => {
    expect(component.contains(<Transactions />)).toBe(true);
  });
});
