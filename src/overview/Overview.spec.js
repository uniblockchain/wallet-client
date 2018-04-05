// @flow

import { shallow } from 'enzyme';
import React from 'react';
import { Overview } from './Overview';
import BalanceDoughnut from './balance/doughnut';
import BalanceTable from './balance/table';
import VerificationButton from './verificationButton';

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

  it('renders the balance table', () => {
    expect(component.find(BalanceTable).length).toEqual(1);
  });

  it('renders the verification button table', () => {
    expect(component.find(VerificationButton).length).toEqual(1);
  });
});
