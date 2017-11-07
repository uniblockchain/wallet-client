// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Modal } from './Modal';

describe('Modal component', () => {
  let component;

  const props = {
    title: 'Title',
    visible: true,
  };

  beforeEach(() => {
    component = shallow(<Modal {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
