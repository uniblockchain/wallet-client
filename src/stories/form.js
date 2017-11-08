// @flow
import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import 'change-bootstrap/dist/css/bootstrap-material-design.css';
import '../index.css';
import themeDecorator from './themeDecorator';

import {
  Button,
  Input,
  Form,
  FormGroup,
  Label,
  PrimaryButton,
} from '../ui/index';

storiesOf('Form', module)
  .addDecorator(themeDecorator)
  .add('Inputs', () => (
    <Form onSubmit={action('submit')}>
      <FormGroup>
        <Label htmlFor="emailAddress">Email address</Label>
        <Input name="emailAddress" type="email" className="form-control" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" className="form-control" />
      </FormGroup>
    </Form>
  ))
  .add('Button', () => (
    <div>
      <Button inline={boolean('Inline', false)} onClick={action('clicked')}>
        Normal button
      </Button>
      <PrimaryButton
        alt={boolean('Alternative', false)}
        inline={boolean('Inline', false)}
        onClick={action('clicked')}
      >
        Primary button
      </PrimaryButton>
    </div>
  ));
