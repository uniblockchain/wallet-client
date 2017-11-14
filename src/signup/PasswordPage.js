// @flow
import React from 'react';
// import VisibilityIcon from 'material-ui-icons/Visibility';
import { reduxForm, type FormProps } from 'redux-form';
import {
  Header,
  Form,
  Field,
  WrappedContent,
  Top,
  Bottom,
  PrimaryButton,
  Button,
  FormFeedback,
} from '../ui';
import signupFormSubmitHandler from './signupFormSubmitHandler';

export const PasswordPage = (props: FormProps) => {
  const { handleSubmit, previousPage, error } = props;
  return (
    <Form onSubmit={handleSubmit(signupFormSubmitHandler)}>
      <WrappedContent>
        <Top>
          <Header alt>
            One more thing.
            <br />
            Create your password.
          </Header>
          {error && <FormFeedback>{error}</FormFeedback>}
          <Field
            name="password"
            type="password"
            autoFocus
            label="Password"
            placeholder="Type your password here..."
          />
        </Top>
        <Bottom>
          <PrimaryButton type="submit">Next</PrimaryButton>
          <Button onClick={previousPage}>Back</Button>
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
