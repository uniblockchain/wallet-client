// @flow
import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { storiesOf } from '@storybook/react';
import '../index.css';
import themeDecorator from './themeDecorator';

import { Header, SubHeader, Paragraph } from '../ui/index';

storiesOf('Text', module)
  .addDecorator(themeDecorator)
  .add('Header', () => <Header>Header</Header>)
  .add('Sub Header', () => <SubHeader>SubHeader</SubHeader>)
  .add('Paragraph', () => <Paragraph>This is just a bunch on text</Paragraph>);
