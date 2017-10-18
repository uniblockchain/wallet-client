// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { PasswordPage } from './PasswordPage';

describe('PasswordPage component', () => {
  let component;

  const props = {
    password: 'password',
    updatePassword: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<PasswordPage {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('contains password value', () => {
    expect(component.find('#password').prop('value')).toBe(props.password);
  });

  it('updates password value', () => {
    const newPassword = 'newpass';
    const password = component.find('#password');
    password.simulate('change', { currentTarget: { value: newPassword } });
    expect(props.updatePassword).toBeCalledWith(newPassword, undefined);
  });
});
