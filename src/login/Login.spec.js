// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';
import type { Props } from './Login';

describe('Login component', () => {
  let component;

  const props: Props = {
    authenticated: false,
    login: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<Login {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
