// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';
import type { Props } from './Login';
import loginActionTypes from './loginActions';

describe('Login component', () => {
  let component;

  const props: Props = {
    authenticated: false,
    login: (username, password) => loginActionTypes.login(username, password),
  };

  beforeEach(() => {
    component = shallow(<Login {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
