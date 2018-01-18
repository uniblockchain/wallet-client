// @flow
import { shallow } from 'enzyme';
import React from 'react';
import CurrencyTabs from './currencyTabs';
import {
  type Props,
  Wallet as WalletComponent,
  WalletActivity,
  WalletButtons,
} from './Wallet';
import { Balance } from './Balance';
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

  it('renders balance component', () => {
    expect(
      component.contains(
        <Balance wallet={wallet} currency={representationalCurrency} />,
      ),
    ).toEqual(true);
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
