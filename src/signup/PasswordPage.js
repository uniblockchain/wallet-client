// @flow
import React from 'react';
import { connect } from 'react-redux';
// import VisibilityIcon from 'material-ui-icons/Visibility';
import { Header, Label, Input, Form, FormGroup } from '../ui';
import signupActions from './signupActions';
import type { SignupPasswordUpdate } from './signupActionTypes';

type Props = {
  password: string,
  updatePassword: (string, ValidityState) => SignupPasswordUpdate,
};

export const PasswordPage = (props: Props) => {
  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    props.updatePassword(e.currentTarget.value, e.currentTarget.validity);
  };
  return (
    <div className="top">
      <Header>
        One more thing.
        <br />
        Create your password.
      </Header>
      <Form className="mt-5">
        <FormGroup>
          <Label for="password">Password</Label>
          <div className="input-group">
            <Input
              id="password"
              type="password"
              autoFocus
              className="form-control"
              value={props.password}
              placeholder="Type your password here..."
              onChange={handleChange}
            />
            {/* TODO: finish the eye password toggle */}
            {/* <span className="input-group-addon"><VisibilityIcon /></span> */}
          </div>
        </FormGroup>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({
  password: state.signup.password,
});

const mapDispatchToProps = {
  updatePassword: signupActions.signupPasswordUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordPage);
