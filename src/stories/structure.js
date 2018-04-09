/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-router';
import menu from '../menu';
import { BottomNavigation } from '../ui/bottomNavigation/BottomNavigation';
import { Slide, Slider } from '../ui/slider';
import { Heading, PrimaryButton, Content, Paragraph, Tabs, Tab } from '../ui';

storiesOf('Structure', module)
  .addDecorator(StoryRouter())
  .add('Bottom Navigation', () => {
    const options = menu.reduce((obj, i) => {
      const result = obj;
      result[i.link] = i.name;
      return obj;
    }, {});
    return (
      <BottomNavigation
        menu={menu}
        onNavigation={action('navigation')}
        value={select('Active', options, '/wallet')}
      />
    );
  })
  .add('Slider', () => (
    <Content>
      <Slider>
        <div>
          <Slide>
            <Heading>First slide</Heading>
            <Paragraph>This is a test text on first slide</Paragraph>
            <PrimaryButton>Action</PrimaryButton>
          </Slide>
        </div>
        <div>
          <Slide alt>
            <Heading alt>Second slide</Heading>
            <Paragraph alt>This is a test text on second slide</Paragraph>
            <PrimaryButton alt>Action</PrimaryButton>
          </Slide>
        </div>
      </Slider>
    </Content>
  ))
  .add('Tabs', () => {
    const options = {
      btc: 'Bitcoin',
      eth: 'Ether',
      ltc: 'Litecoin',
    };
    return (
      <Tabs value={select('Value', options, 'eth')} onSelect={action('select')}>
        <Tab value="btc">Bitcoin</Tab>
        <Tab value="eth">Ether</Tab>
        <Tab value="ltc">Litecoin</Tab>
      </Tabs>
    );
  });
