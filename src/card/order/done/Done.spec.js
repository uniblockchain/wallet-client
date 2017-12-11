// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { Done } from './Done';
import { PrimaryButton, Button } from '../../../ui';
import { CARD_ORDER_ADDRES_ROUTE } from '../constants';
import { routes } from '../../../router';
import PlasticCard from '../../../landing/PlasticCard';

describe('Card ordering flow Done', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Done />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('displays card visual', () => {
    expect(component.find(PlasticCard).length).toBe(1);
  });
});
