// @flow
import React from 'react';
import { Button, Col, Form, FormGroup, Label, Row } from 'reactstrap';
import { Field, reduxForm, type FormProps } from 'redux-form';
import './Login.css';

export const Login = (props: FormProps) => {
  const { handleSubmit } = props;
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col className="login col-lg-4">
          <div className="top">
            <h1>Good day.</h1>
            <h1>Login to you account.</h1>
            <Form id="loginForm" onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="emailAddress">Email address</Label>
                <Field
                  name="emailAddress"
                  className="form-control"
                  component="input"
                  type="text"
                  placeholder="Type your email here..."
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Field
                  name="password"
                  className="form-control"
                  component="input"
                  type="password"
                  placeholder="Type your password here..."
                />
              </FormGroup>
            </Form>
          </div>
          <div className="bottom">
            <Button
              color="primary"
              type="submit"
              form="loginForm"
              block
              size="lg"
            >
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const handleSubmit = values => {
  console.log(values.password);
};

export default reduxForm({ form: 'login', onSubmit: handleSubmit })(Login);
