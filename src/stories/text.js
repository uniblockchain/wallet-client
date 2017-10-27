// @flow
import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { storiesOf } from '@storybook/react';
import '../index.css';
import themeDecorator from './themeDecorator';

import { Header, SubHeader } from '../ui/index';

storiesOf('Text', module)
  .addDecorator(themeDecorator)
  .add('Header', () => <Header>Header</Header>)
  .add('SubHeader', () => <SubHeader>SubHeader</SubHeader>);
