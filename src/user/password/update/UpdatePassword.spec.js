// @flow
import React from 'react';
import { shallow } from 'enzyme';

import { PasswordPage, type Props } from './UpdatePassword';
import UpdatePasswordForm from './UpdatePasswordForm';
import { Heading } from '../../../ui';

describe('PasswordPage component', () => {
  let component;

  const props: Props = {
    loginWithVerificationToken: jest.fn(),
    match: {
      params: {
        verificationToken: '123',
      },
    },
    error: null,
    isAuthenticated: false,
  };

  beforeEach(() => {
    props.loginWithVerificationToken.mockClear();
    component = shallow(<PasswordPage {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('starts verification token login', () => {
    expect(props.loginWithVerificationToken.mock.calls).toHaveLength(1);
  });

  it('renders heading', () => {
    expect(component.find(Heading).length).toBe(1);
  });

  it('renders error', () => {
    const sampleError = 'some error';
    component.setProps({
      error: sampleError,
    });
    expect(component.contains(sampleError)).toBe(true);
  });

  it('renders loading notification', () => {
    component.setProps({
      error: null,
      isAuthenticated: false,
    });
    expect(component.contains('Loading...')).toBe(true);
  });

  it('renders update password from', () => {
    component.setProps({
      error: null,
      isAuthenticated: true,
    });
    expect(component.contains(<UpdatePasswordForm />)).toBe(true);
  });
});
