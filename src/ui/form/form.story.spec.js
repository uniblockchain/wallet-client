// @flow
import React from 'react';
import { shallow } from 'enzyme';
import {
  storiesOf,
  action,
  specs,
  describe,
  beforeEach,
  it,
} from '../../../.storybook/facade';
import { PrimaryButton, Button } from '../buttons';
import { Form, FormGroup, FormFeedback, Input, Label } from './form';
import { WrappedContent } from '../layout';

storiesOf('Form', module).add('Example form', () => {
  specs(() =>
    describe('Form', () => {
      let component;

      beforeEach(() => {
        component = shallow(<Form />);
      });
      it('renders component', () => {
        expect(component);
      });
    }),
  );

  return (
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
          <Input
            name="invalid"
            type="text"
            className="form-control is-invalid"
          />
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
  );
});
