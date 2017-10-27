
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';
import backgrounds from '@storybook/addon-backgrounds';
import { select } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { GreenTheme, BlueTheme } from '../src/ui';

addDecorator(withKnobs);
addDecorator(centered);

addDecorator(
  backgrounds([
    { name: 'main', value: '#ffffff', default: true },
    { name: 'green', value: '#e5f9f3' },
    { name: 'blue', value: '#083b70' },
    { name: 'gradient', value: 'linear-gradient(151deg, #19c3ed, #8bf2d3)' },
  ]),
);

const options = {
  green: 'Green',
  blue: 'Blue',
};

const themes = {
  green: GreenTheme,
  blue: BlueTheme,
};

addDecorator(story => (
  <ThemeProvider theme={themes[select('Theme', options, 'green')]}>
    {story()}
  </ThemeProvider>
));

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
