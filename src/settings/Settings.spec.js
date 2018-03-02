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
    openMultiFactorAuthModal: jest.fn(),
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
});
