// @flow
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import { Button, Header, Input, PrimaryButton, SubHeader } from '../ui/index';
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
  .add('Header', () => <Header>Header</Header>)
  .add('SubHeader', () => <SubHeader>SubHeader</SubHeader>);

storiesOf('Form', module)
  .add('Input', () => <Input />)
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
