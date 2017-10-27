// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Send from './Send';
import sendActions from './sendActions';

describe('Send component', () => {
  let component;

  const props = {
    walletId: 1,
    sendTransaction: sendActions.sendTransactionRequested,
  };

  beforeEach(() => {
    component = shallow(<Send {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
