// @flow

import React from 'react';
import { push } from 'react-router-redux';
import { reduxForm, type FormProps } from 'redux-form';
import { resetPasswordFormSubmitHandler } from './resetPasswordRoutines';
import {
  WrappedContent,
  Top,
  Bottom,
  Header,
  LinkButton,
  Link,
  PrimaryButton,
  Form,
  Field,
  FormFeedback,
} from '../../../ui';
import { routes } from '../../../router';

export const ResetPassword = (props: FormProps) => {
  const { handleSubmit, error } = props;
  return (
    <WrappedContent>
      <Top>
        <Header alt>
          Forgot password?
          <br />
          Send reset link to your email.
        </Header>
        <Form
          id="resetPasswordForm"
          onSubmit={handleSubmit(resetPasswordFormSubmitHandler)}
          className="mt-5"
        >
          {error && <FormFeedback>{error}</FormFeedback>}
          <Field
            name="email"
            label="Email address"
            type="email"
            placeholder="Type your email here..."
          />
        </Form>
      </Top>
      <Bottom>
        <PrimaryButton type="submit" form="resetPasswordForm">
          Reset my password
        </PrimaryButton>
        <Link to={routes.BASE}>
          <LinkButton>Cancel</LinkButton>
        </Link>
      </Bottom>
    </WrappedContent>
  );
};

export default reduxForm({
  form: 'reset-password',
  onSubmitSuccess: (response, dispatch) => {
    dispatch(push(routes.RESET_PASSWORD_DONE));
  },
})(ResetPassword);
