// @flow
import React from 'react';
// import VisibilityIcon from 'material-ui-icons/Visibility';
import { type FormProps, reduxForm } from 'redux-form';
import {
  Bottom,
  Field,
  Form,
  FormFeedback,
  Header,
  LinkButton,
  PrimaryButton,
  renderCheckbox,
  Top,
  WrappedContent,
} from '../ui';
import signupFormSubmitHandler from './signupFormSubmitHandler';

const required = value => (value ? undefined : "Don't forget this field :)");

export const PasswordPage = (props: FormProps) => {
  const { handleSubmit, previousPage, error, pristine, submitting } = props;
  return (
    <Form onSubmit={handleSubmit(signupFormSubmitHandler)}>
      <WrappedContent>
        <Top>
          <Header alt>
            One more thing.
            <br />
            Create your password.
          </Header>
          <Field
            name="password"
            type="password"
            autoFocus
            label="Password"
            placeholder="Type your password here..."
            validate={required}
          />
          <Field
            name="tos"
            id="tos"
            component={renderCheckbox}
            validate={required}
            label={
              <span>
                I agree to the <a href="#">Terms of Service</a>
              </span>
            }
          />
          {error && <FormFeedback className="mt-3">{error}</FormFeedback>}
        </Top>
        <Bottom>
          <PrimaryButton type="submit" disabled={pristine || submitting}>
            Next
          </PrimaryButton>
          <LinkButton onClick={previousPage}>Back</LinkButton>
        </Bottom>
      </WrappedContent>
    </Form>
  );
};

export default reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(PasswordPage);
