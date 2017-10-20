// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

describe('Login component', () => {
  let component;

  const props = {};

  beforeEach(() => {
    component = shallow(<Login {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
