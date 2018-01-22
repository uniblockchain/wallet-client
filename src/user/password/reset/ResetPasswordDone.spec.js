// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { ResetPasswordDone } from './ResetPasswordDone';
import { PrimaryButton, Header } from '../../../ui/index';

describe('Overview component', () => {
  let component;
  const props = {
    handleSubmit: jest.fn(),
    error: undefined,
  };

  beforeEach(() => {
    component = shallow(<ResetPasswordDone {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders header', () => {
    expect(component.find(Header).length).toBe(1);
  });

  it('renders back button', () => {
    expect(component.find(PrimaryButton).length).toBe(1);
  });
});
