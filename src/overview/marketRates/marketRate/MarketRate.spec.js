// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { MarketRate, type Props } from './MarketRate';

jest.mock('./marketRateApi', () => ({
  getMarketRate: jest.fn(() =>
    Promise.resolve({
      fromCurrency: 'BTC',
      toCurrency: 'EUR',
      exchangeRate: 6450.71,
    }),
  ),
}));

describe('MarketRate component', () => {
  let component;

  const props: Props = {
    fromCurrency: 'BTC',
    toCurrency: 'EUR',
  };

  beforeEach(() => {
    component = shallow(<MarketRate {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders currency name with exchange rate', () => {
    const rendered = <div>€6,450.71</div>;
    component.update();
    expect(component.contains(rendered)).toBe(true);
  });
});
