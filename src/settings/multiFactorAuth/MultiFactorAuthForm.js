// @flow
import React from 'react';
import { type FormProps, reduxForm } from 'redux-form';
import { Field, Form, FormFeedback } from '../../ui/index';

export const MultiFactorAuthForm = (props: FormProps) => {
  const { error } = props;
  return (
    <Form id="multiFactorAuthForm" className="mb-5">
      {error && <FormFeedback>{error}</FormFeedback>}
      <Field
        name="password"
        label="Password"
        type="password"
        placeholder="Type your password here..."
      />
    </Form>
  );
};

export default reduxForm({ form: 'multiFactorAuth' })(MultiFactorAuthForm);
