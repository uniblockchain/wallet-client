import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';
import backgrounds from '@storybook/addon-backgrounds';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Change',
  url: 'http://change.producement.com',
  downPanelInRight: true,
});

addDecorator(withKnobs);
addDecorator(centered);

addDecorator(
  backgrounds([
    { name: 'White', value: '#ffffff', default: true },
    { name: 'Green', value: '#e5f9f3' },
    { name: 'Blue', value: '#083b70' },
    { name: 'Gradient', value: 'linear-gradient(151deg, #19c3ed, #8bf2d3)' },
  ]),
);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
