// @flow
import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { Header, SubHeader, Paragraph } from '../ui/index';

storiesOf('Text', module)
  .add('Header', () => (
    <Header alt={boolean('Alternative', false)}>Header</Header>
  ))
  .add('Sub Header', () => (
    <SubHeader alt={boolean('Alternative', false)}>SubHeader</SubHeader>
  ))
  .add('Paragraph', () => (
    <Paragraph alt={boolean('Alternative', false)}>
      This is just a bunch on text
    </Paragraph>
  ));
