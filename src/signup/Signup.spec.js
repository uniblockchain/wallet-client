// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from './Signup';

describe('Signup component', () => {
  let component;

  const props = {
    email: 'test@example.com',
    emailValidity: jest.fn(),
    password: 'password',
    passwordValidity: jest.fn(),
    user: {},
    openWallet: jest.fn(),
    createUser: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<Signup {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
