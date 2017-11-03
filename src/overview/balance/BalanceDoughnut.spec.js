// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { BalanceDoughnut } from './BalanceDoughnut';

describe('Balance Doughnut component', () => {
  let component;

  const props = {
    wallets: [],
  };

  beforeEach(() => {
    component = shallow(<BalanceDoughnut {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
