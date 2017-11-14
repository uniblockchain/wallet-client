// @flow
import React from 'react';
import jest from 'jest-mock';
import expect from 'expect';
import { shallow } from 'enzyme';
import {
  storiesOf,
  describe,
  action,
  boolean,
  it,
  specs,
  beforeEach,
} from '../../../.storybook/facade';
import { PrimaryButton, Button } from '../buttons';
import { Form, FormGroup, FormFeedback, Field, Input, Label } from './form';
import { WrappedContent } from '../layout';

storiesOf('Form', module).add('Inputs', () => (
  <WrappedContent>
    <Form
      onSubmit={e => {
        e.preventDefault();
        action('submit');
      }}
    >
      <FormFeedback>This is a global form error</FormFeedback>
      <FormGroup>
        <Label htmlFor="emailAddress">Email address</Label>
        <Input name="emailAddress" type="email" className="form-control" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" className="form-control" />
      </FormGroup>
      <FormGroup>
        <Label className="is-invalid" htmlFor="invalidInput">
          Invalid input
        </Label>
        <Input name="invalid" type="text" className="form-control is-invalid" />
        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
      </FormGroup>
      <PrimaryButton type="submit" onClick={action('submit')}>
        Submit
      </PrimaryButton>
      <Button type="reset" onClick={action('reset')}>
        Reset
      </Button>
    </Form>
  </WrappedContent>
));
