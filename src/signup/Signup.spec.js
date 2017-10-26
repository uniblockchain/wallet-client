// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from './Signup';
import type { Props } from './Signup';

describe('Signup component', () => {
  let component;

  const mockFn: any = jest.fn();

  const props: Props = {
    email: 'test@example.com',
    emailValidity: mockFn,
    password: 'password',
    passwordValidity: mockFn,
    authenticated: false,
    createUser: mockFn,
  };

  beforeEach(() => {
    component = shallow(<Signup {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
