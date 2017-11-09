// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { FiatValue } from './FiatValue';

describe('Fiat value component', () => {
  let component;

  const props = {
    value: 123.33233223,
    currency: 'USD',
    classes: {},
  };

  beforeEach(() => {
    component = shallow(<FiatValue {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders fiat value', () => {
    expect(component.contains('$123.33')).toBe(true);
  });

  it('renders negative fiat value', () => {
    props.value = -12.3;
    component = shallow(<FiatValue {...props} />);
    expect(component.contains('-$12.30')).toBe(true);
  });
});
