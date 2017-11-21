// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { type FormProps } from 'redux-form';
import { renderCheckbox, Field } from '../ui';

import { PasswordPage, required } from './PasswordPage';

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

  it('renders the TOS link', () => {
    expect(
      component.contains(
        <Field
          name="tos"
          id="tos"
          component={renderCheckbox}
          validate={required}
          label={
            <span>
              I agree to the{' '}
              <a
                href="//getchange.com/betatos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </span>
          }
        />,
      ),
    ).toBe(true);
  });
});
