// @flow
import { shallow } from 'enzyme';
import React from 'react';
import CurrencyTabs from './currencyTabs';
import {
  Balance,
  BalanceTitle,
  FiatBalance,
  type Props,
  Wallet as WalletComponent,
  WalletActivity,
  WalletButtons,
} from './Wallet';
import { Wallet } from './walletState';

describe('Wallet component', () => {
  let component;

  const representationalCurrency = 'EUR';

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
        currency: representationalCurrency,
      },
    ],
  });

  let props: Props;

  beforeEach(() => {
    props = {
      representationalCurrency,
      wallet,
    };
    component = shallow(<WalletComponent {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('returns null when there is no wallet', () => {
    props = {
      representationalCurrency,
      wallet: null,
    };
    expect(WalletComponent(props)).toEqual(null);
  });

  it('renders currency tabs', () => {
    expect(component.contains(<CurrencyTabs />)).toEqual(true);
  });

  it('renders a balance title', () => {
    expect(component.contains(<BalanceTitle>Balance</BalanceTitle>)).toEqual(
      true,
    );
  });

  it('renders a correctly formatted crypto balance', () => {
    expect(component.contains(<Balance>0.198900</Balance>)).toEqual(true);
  });

  it('renders a correctly fiat balance', () => {
    expect(component.contains(<FiatBalance>~ €1,257.71</FiatBalance>)).toEqual(
      true,
    );
  });

  it('renders wallet send & receive buttons', () => {
    expect(component.contains(<WalletButtons wallet={wallet} />)).toEqual(true);
  });

  it('renders wallet transactions', () => {
    expect(component.contains(<WalletActivity wallet={wallet} />)).toEqual(
      true,
    );
  });
});
