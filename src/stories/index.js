// @flow
import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import '../index.css';
import themeDecorator from './themeDecorator';

import {
  Button,
  Header,
  Input,
  Form,
  FormGroup,
  Label,
  PrimaryButton,
  SubHeader,
} from '../ui/index';
import menu from '../menu/index';
import { Sidebar } from '../sidebar/Sidebar';
import { BottomNavigation } from '../ui/bottomNavigation/BottomNavigation';

storiesOf('Structure', module)
  .add('Sidebar', () => (
    <Sidebar
      menu={menu}
      open
      path="/wallet"
      onNavigation={action('navigation')}
      updateState={action('state updated')}
    />
  ))
  .add('Bottom Navigation', () => (
    <BottomNavigation
      menu={menu}
      onNavigation={action('navigation')}
      value="/wallet"
    />
  ));

storiesOf('Text', module)
  .addDecorator(themeDecorator)
  .add('Header', () => <Header>Header</Header>)
  .add('SubHeader', () => <SubHeader>SubHeader</SubHeader>);

storiesOf('Form', module)
  .addDecorator(themeDecorator)
  .add('Inputs', () => (
    <Form onSubmit={action('submit')}>
      <FormGroup>
        <Label htmlFor="emailAddress">Email address</Label>
        <Input name="emailAddress" type="email" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" />
      </FormGroup>
    </Form>
  ))
  .add('Button', () => (
    <div>
      <Button inline={boolean('Inline', false)} onClick={action('clicked')}>
        Normal button
      </Button>
      <PrimaryButton
        inline={boolean('Inline', false)}
        onClick={action('clicked')}
      >
        Primary button
      </PrimaryButton>
    </div>
  ));
