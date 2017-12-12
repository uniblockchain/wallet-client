// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from './Profile';
import { Field, PrimaryButton } from '../../../ui';

describe('Card ordering flow Profile', () => {
  let component;
  const props = {
    setField: jest.fn(),
    onSuggest: jest.fn(),
    handleSubmit: jest.fn(),
    error: undefined,
  };

  beforeEach(() => {
    component = shallow(<Profile {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders first name field', () => {
    expect(component.find(Field).find('[name="firstName"]').length).toBe(1);
  });

  it('renders last name field', () => {
    expect(component.find(Field).find('[name="lastName"]').length).toBe(1);
  });

  it('renders phone fields', () => {
    expect(
      component.find(Field).find('[name="internationalCallingCode"]').length,
    ).toBe(1);
    expect(component.find(Field).find('[name="phoneNumber"]').length).toBe(1);
  });

  it('renders date of birth name fields', () => {
    expect(component.find(Field).find('[name="day"]').length).toBe(1);
    expect(component.find(Field).find('[name="month"]').length).toBe(1);
    expect(component.find(Field).find('[name="year"]').length).toBe(1);
  });

  it('renders submit button', () => {
    expect(component.find(PrimaryButton).find('[type="submit"]').length).toBe(
      1,
    );
  });
});
