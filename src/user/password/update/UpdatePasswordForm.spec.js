// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { type FormProps } from 'redux-form';
import { renderCheckbox, Field, PrimaryButton, LinkButton } from '../../../ui';

import { PasswordForm, required } from './UpdatePasswordForm';

describe('PasswordForm component', () => {
  let component;

  const props: FormProps = {
    handleSubmit: jest.fn(),
    previousPage: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<PasswordForm {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders password field', () => {
    expect(component.find(Field).find('[name="password"]').length).toBe(1);
  });

  it('renders submit button', () => {
    expect(component.find(PrimaryButton).find('[type="submit"]').length).toBe(
      1,
    );
  });

  it('renders back button', () => {
    expect(component.find(LinkButton).length).toBe(1);
  });
});
