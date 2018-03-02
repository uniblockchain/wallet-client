// @flow
import React from 'react';
import { reduxForm } from 'redux-form';
import { Field, Form } from '../../ui/index';

export const MultiFactorAuthForm = () => (
  <Form id="multiFactorAuthForm" className="mb-5">
    <Field
      name="password"
      label="Password"
      type="password"
      placeholder="Type your password here..."
    />
  </Form>
);

export default reduxForm({ form: 'multiFactorAuth' })(MultiFactorAuthForm);
