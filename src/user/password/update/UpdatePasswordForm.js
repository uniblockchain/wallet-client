// @flow
import React from 'react';
import { connect, type MapStateToProps } from 'react-redux';
import { push } from 'react-router-redux';
import { type FormProps, reduxForm } from 'redux-form';
import {
  Bottom,
  Field,
  Form,
  FormFeedback,
  LinkButton,
  PrimaryButton,
  Top,
} from '../../../ui';
import { updatePassword } from './updatePasswordRoutines';
import withUser from '../../withUser';
import { routes } from '../../../router';
import { verificationOauthTokenLoginRoutine } from '../../../login/verification-oauth-token/verificationOauthTokenRoutines';

export const required = (value: any) =>
  value ? undefined : "Don't forget this field :)";

export const PasswordForm = (props: FormProps) => {
  const { handleSubmit, previousPage, error, pristine, submitting } = props;
  return (
    <Form onSubmit={handleSubmit(updatePassword)}>
      <Top>
        <Field
          name="password"
          type="password"
          autoFocus
          label="Password"
          placeholder="Type your password here..."
          validate={required}
        />
        {error && <FormFeedback className="mt-3">{error}</FormFeedback>}
      </Top>
      <Bottom>
        <PrimaryButton type="submit" disabled={pristine || submitting}>
          Next
        </PrimaryButton>
        <LinkButton onClick={previousPage}>Back</LinkButton>
      </Bottom>
    </Form>
  );
};

const ReduxPasswordForm = reduxForm({
  form: 'update-password',
  onSubmitSuccess: (response, dispatch, props) => {
    dispatch(verificationOauthTokenLoginRoutine(props.token));
    dispatch(push(routes.DEFAULT_ON_ENTER));
  },
})(PasswordForm);

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  initialValues: state.user.email
    ? {
        id: state.user.id,
        email: state.user.email,
      }
    : null,
  token: state.login.token.access_token,
});

export default connect(mapStateToProps)(withUser(ReduxPasswordForm));
