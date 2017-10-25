// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Marketplace } from './Marketplace';

describe('Marketplace component', () => {
  let component;

  const props = {};

  beforeEach(() => {
    component = shallow(<Marketplace {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
