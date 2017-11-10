// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

jest.mock('./cardInterestApi');
const cardInterestApiMock = require('./cardInterestApi');

describe('Card component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Card />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('order button registers interest and opens modal', () => {
    expect.assertions(3);
    expect(component.state().isModalVisible).toBeFalsy();
    component.find('OrderButton').simulate('click');
    return cardInterestApiMock.promise.then(() => {
      expect(cardInterestApiMock.registerInterest.mock.calls).toHaveLength(1);
      expect(component.state().isModalVisible).toBeTruthy();
    });
  });
});
