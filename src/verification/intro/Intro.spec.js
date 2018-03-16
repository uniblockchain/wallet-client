// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import AppRouter from '../../router';
import { Intro } from './Intro';
import { PrimaryButton, Button } from '../../ui';
import { VERIFICATION_PROFILE_ROUTE } from '../constants';
import { routes } from '../../router';

jest.mock('../cardOrderApi', () => ({
  hasOrder: jest.fn(() => Promise.resolve(false)),
}));

describe('Verification flow Intro', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Intro />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('can proceed to next page', () => {
    expect(
      component
        .find(Link)
        .find({ to: VERIFICATION_PROFILE_ROUTE })
        .find(PrimaryButton).length,
    ).toBe(1);
  });

  it('can exit flow', () => {
    expect(
      component
        .find(Link)
        .find({ to: routes.LOGOUT })
        .find(Button).length,
    ).toBe(1);
  });

  it('redirects to the wallet-coming-soon page when the user has already gone through the verification flow', () => {
    component.setState({ verified: true });
    expect(component.contains(<AppRouter walletComingSoon />)).toBe(true);
  });
});
