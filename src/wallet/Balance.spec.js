// @flow
import { shallow } from 'enzyme';
import React from 'react';
import { Wallet } from './walletState';
import {
  Balance,
  BalanceDiv,
  BalanceTitle,
  FiatBalance,
  type Props,
} from './Balance';

describe('Balance component', () => {
  let component;

  const currency = 'EUR';

  const wallet = new Wallet({
    id: 1,
    currency: 'BTC',
    address: '',
    transactions: [],
    receiveAddress: '2MvpyDrvrV3PNRTD8cBX9Hy97s7NtBSGfEN',
    balance: [
      {
        value: 0.19890018,
        currency: 'BTC',
      },
      {
        value: 1257.71,
        currency,
      },
    ],
  });

  let props: Props;

  beforeEach(() => {
    props = {
      currency,
      wallet,
    };
    component = shallow(<Balance {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders a balance title', () => {
    expect(component.contains(<BalanceTitle>Balance</BalanceTitle>)).toEqual(
      true,
    );
  });

  it('renders a correctly formatted crypto balance', () => {
    expect(component.contains(<BalanceDiv>0.198900</BalanceDiv>)).toEqual(true);
  });

  it('renders a correctly fiat balance', () => {
    expect(component.contains(<FiatBalance>~ €1,257.71</FiatBalance>)).toEqual(
      true,
    );
  });
});
