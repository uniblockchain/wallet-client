// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Settings, type Props } from './Settings';

jest.mock('../user', () => ({
  withUser: () => {},
}));

describe('Settings component', () => {
  let component;

  const props: Props = {
    user: {
      id: 1,
      email: 'erko@risthein.ee',
      password: 'pass',
      isUsing2Fa: false,
      isVerified: false,
    },
    open2FaAuthModal: jest.fn(),
    goTo: jest.fn(),
    noop: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<Settings {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders the 2fa setting', () => {
    expect(component.contains('2-Factor Authentication')).toBe(true);
  });

  it('renders the verification status', () => {
    expect(component.contains('Verification Status')).toBe(true);
  });

  it('should show user as not verified', () => {
    expect(component.contains('Not Verified')).toBe(true);
  });

  it('should show user as not verified', () => {
    component.setProps({ user: { isVerified: true } });
    expect(component.contains('Verified')).toBe(true);
  });

  it('should show log out link', () => {
    expect(component.contains('Log Out')).toBe(true);
  });
});
