// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { SendForm } from './SendForm';
import { Modal } from '../../ui';
import { testQuote, testWallet } from '../../fixtures';

describe('Send Form component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      fiatCurrencyCode: 'EUR',
      quote: testQuote,
      amountInFiat: 100.2,
      getNewQuote: jest.fn(),
      handleSubmit: jest.fn(),
      clearQuote: jest.fn(),
      error: undefined,
      initialValues: { activeWallet: testWallet },
    };
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

  it('clears quote and fetches new one when amount changes', () => {
    const amountInCrypto = component.findWhere(
      c => c.prop('name') === 'amountInCrypto',
    );
    amountInCrypto.simulate('change', {}, 200);
    expect(props.clearQuote).toBeCalled();
    expect(props.getNewQuote).toBeCalled();
  });

  it('does nothing when amount changes but is sub dust amount', () => {
    const amountInCrypto = component.findWhere(
      c => c.prop('name') === 'amountInCrypto',
    );
    amountInCrypto.simulate('change', {}, 0.000001);
    expect(props.clearQuote).not.toBeCalled();
    expect(props.getNewQuote).not.toBeCalled();
  });
});
