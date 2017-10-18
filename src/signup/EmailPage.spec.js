// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { EmailPage } from './EmailPage';

describe('EmailPage component', () => {
  let component;

  const props = {
    email: 'test@example.com',
    updateEmail: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<EmailPage {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('contains email value', () => {
    expect(component.find('#emailAddress').prop('value')).toBe(props.email);
  });

  it('updates email value', () => {
    const newEmailAddress = 'new@email.ee';
    const emailAddress = component.find('#emailAddress');
    emailAddress.simulate('change', {
      currentTarget: { value: newEmailAddress },
    });
    expect(props.updateEmail).toBeCalledWith(newEmailAddress, undefined);
  });
});
