import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { select } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { GreenTheme, BlueTheme } from '../ui';

const options = {
  green: 'Green',
  blue: 'Blue',
};

const themes = {
  green: GreenTheme,
  blue: BlueTheme,
};

export default story => (
  <ThemeProvider theme={themes[select('Theme', options, 'green')]}>
    {story()}
  </ThemeProvider>
);
