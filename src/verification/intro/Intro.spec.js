// @flow

import React from 'react';
import { shallow } from 'enzyme';
import AppRouter, { routes } from '../../router';
import { Intro } from './Intro';
import { Link, PrimaryButton, Button } from '../../ui';
import { VERIFICATION_PROFILE_ROUTE } from '../constants';

jest.mock('../../card/order/cardOrderApi', () => ({
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

  it('redirects to default on enter page when the user has already gone through the verification flow', () => {
    component.setState({ verified: true });
    expect(component.contains(<AppRouter defaultOnEnter />)).toBe(true);
  });
});
