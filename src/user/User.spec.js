// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { User } from './User';
import userActions from './userActions';

describe('User component', () => {
  let component;

  const props = {
    userId: 1,
    userEmail: 'erko@risthein.ee',
    fetchUser: () => userActions.userFetchRequested(),
  };

  beforeEach(() => {
    component = shallow(<User {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
