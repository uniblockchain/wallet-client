// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';
import AppRouter from './AppRouter';
import routes from './routes';

describe('app router', () => {
  let component;

  const props = {
    wallet: true,
    overview: null,
    cardOrderFlow: null,
    card: null,
  };

  beforeEach(() => {
    component = shallow(<AppRouter {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders correct redirect', () => {
    component.setProps({ wallet: true });
    expect(component.contains(<Redirect to={routes.WALLET} />)).toBe(true);
  });
});
