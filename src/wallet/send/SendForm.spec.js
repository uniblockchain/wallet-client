// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { SendForm } from './SendForm';
import { Modal } from '../../ui';
import { testQuote, testWallet } from '../../fixtures';

describe('Send Form component', () => {
  let component;

  const props = {
    fiatCurrencyCode: 'EUR',
    quote: testQuote,
    amountInFiat: 100.2,
    getNewQuote: jest.fn(),
    handleSubmit: jest.fn(),
    clearQuote: jest.fn(),
    error: undefined,
    initialValues: { activeWallet: testWallet },
  };

  beforeEach(() => {
    component = shallow(<SendForm {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('Displays errors when they are present', () => {
    const error = 'some error';
    expect(component.find(Modal).length).toBe(0);
    component = shallow(<SendForm {...props} error={error} />);
    expect(component.find(Modal).length).toBe(1);
    expect(component.find(Modal).prop('description')).toEqual(error);
  });
});
