// @flow
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import {
  BlueTheme,
  Button,
  GreenTheme,
  Header,
  Input,
  PrimaryButton,
  SubHeader,
} from '../ui/index';
import menu from '../menu/index';
import { Sidebar } from '../sidebar/Sidebar';
import { BottomNavigation } from '../ui/bottomNavigation/BottomNavigation';

addDecorator(withKnobs);

const options = {
  green: 'Green',
  blue: 'Blue',
};

const themes = {
  green: GreenTheme,
  blue: BlueTheme,
};

const themeDecorator = story => (
  <ThemeProvider theme={themes[select('Theme', options, 'green')]}>
    {story()}
  </ThemeProvider>
);

storiesOf('Button', module)
  .addDecorator(themeDecorator)
  .add('Normal', () => (
    <Button inline={boolean('Inline', false)} onClick={action('clicked')}>
      Normal button
    </Button>
  ))
  .add('Primary', () => (
    <PrimaryButton
      inline={boolean('Inline', false)}
      onClick={action('clicked')}
    >
      Primary button
    </PrimaryButton>
  ));

storiesOf('Structure', module)
  .addDecorator(themeDecorator)
  .add('Sidebar', () => {
    let sidebarOpen = false;
    let sidebarPath = '/test';
    const setSidebarState = (state: boolean, path: string) => {
      sidebarOpen = state;
      sidebarPath = path;
    };
    return (
      <div>
        <PrimaryButton onClick={() => setSidebarState(true, '/test')}>
          Open sidebar
        </PrimaryButton>
        <Sidebar
          menu={menu}
          open={sidebarOpen}
          path={sidebarPath}
          onNavigation={action('navigation')}
          updateState={setSidebarState}
        />
      </div>
    );
  })
  .add('Bottom Navigation', () => {
    let path = '/wallet';
    const onNavigation = (newPath: string) => {
      path = newPath;
    };
    return (
      <BottomNavigation menu={menu} onNavigation={onNavigation} value={path} />
    );
  });

storiesOf('Text', module)
  .add('Header', () => <Header>Header</Header>)
  .add('SubHeader', () => <SubHeader>SubHeader</SubHeader>);

storiesOf('Form', module).add('Input', () => <Input />);
