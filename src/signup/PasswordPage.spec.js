// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { type FormProps } from 'redux-form';

import { PasswordPage } from './PasswordPage';

jest.mock('../redux/reduxStore');

describe('PasswordPage component', () => {
  let component;

  const props: FormProps = {
    handleSubmit: jest.fn(),
    previousPage: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<PasswordPage {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
