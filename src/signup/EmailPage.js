// @flow
import React from 'react';
import { reduxForm, type FormProps } from 'redux-form';
import {
  Header,
  Form,
  Field,
  WrappedContent,
  Top,
  Bottom,
  PrimaryButton,
  LinkButton,
  Link,
  FormFeedback,
} from '../ui';
import { routes } from '../router';

export const EmailPage = (props: FormProps) => {
  const { handleSubmit, error } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <WrappedContent>
        <Top>
          <Header alt>
            Good day.
            <br />
            Let&apos;s set up your account.
          </Header>
          {error && <FormFeedback>{error}</FormFeedback>}
          <Field
            type="email"
            name="email"
            label="Email address"
            placeholder="Type your email here..."
          />
        </Top>
        <Bottom>
          <PrimaryButton type="submit">Next</PrimaryButton>
          <Link to={routes.BASE}>
            <LinkButton>Cancel</LinkButton>
          </Link>
        </Bottom>
      </WrappedContent>
    </Form>
  );
};

export default reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(EmailPage);
