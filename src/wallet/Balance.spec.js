// @flow
import { shallow } from 'enzyme';
import React from 'react';
import {
  Balance,
  BalanceDiv,
  BalanceTitle,
  FiatBalance,
  type Props,
} from './Balance';
import { testWallet } from '../fixtures';

describe('Balance component', () => {
  let component;

  const currency = 'EUR';

  let props: Props;

  beforeEach(() => {
    props = {
      currency,
      wallet: testWallet,
    };
    component = shallow(<Balance {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders a balance title', () => {
    expect(component).toContainReact(<BalanceTitle>Balance</BalanceTitle>);
  });

  it('renders a correctly formatted crypto balance', () => {
    expect(component).toContainReact(<BalanceDiv>1.800000</BalanceDiv>);
  });

  it('renders a correctly fiat balance', () => {
    expect(component).toContainReact(<FiatBalance>~ €455.88</FiatBalance>);
  });
});
