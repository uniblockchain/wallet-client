// @flow
import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { Heading, SubHeading, Paragraph } from '../ui';

storiesOf('Text', module)
  .add('Heading', () => (
    <Heading alt={boolean('Alternative', false)}>Heading</Heading>
  ))
  .add('Sub Heading', () => (
    <SubHeading alt={boolean('Alternative', false)}>SubHeading</SubHeading>
  ))
  .add('Paragraph', () => (
    <Paragraph alt={boolean('Alternative', false)}>
      This is just a bunch on text
    </Paragraph>
  ));
