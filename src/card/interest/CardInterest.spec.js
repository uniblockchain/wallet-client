// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { CardInterest } from './CardInterest';

jest.mock('./cardInterestApi', () => ({
  registerInterest: jest.fn(),
}));
const cardInterestApi: any = require('./cardInterestApi');

describe('Card Interest component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CardInterest />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('order button registers interest and opens modal', () => {
    expect.assertions(3);
    expect(component.state().isModalVisible).toBeFalsy();
    const promise = Promise.resolve();
    cardInterestApi.registerInterest.mockReturnValueOnce(promise);
    component.find('OrderButton').simulate('click');
    return promise.then(() => {
      expect(cardInterestApi.registerInterest.mock.calls).toHaveLength(1);
      expect(component.state().isModalVisible).toBeTruthy();
    });
  });
});
