// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet component', () => {
  let component;

  const props = {};

  beforeEach(() => {
    component = shallow(<Wallet {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
