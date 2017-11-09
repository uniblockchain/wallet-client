/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-router';
import 'change-bootstrap/dist/css/bootstrap-material-design.css';
import '../index.css';
import menu from '../menu/index';
import { Sidebar } from '../sidebar/Sidebar';
import { BottomNavigation } from '../ui/bottomNavigation/BottomNavigation';
import { Slide, Slider } from '../ui/slider';
import { Header, PrimaryButton, Content, Paragraph, Tabs, Tab } from '../ui';
import { Modal } from '../ui/modal/Modal';
import themeDecorator from './themeDecorator';

storiesOf('Structure', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator)
  .add('Sidebar', () => (
    <Sidebar
      menu={menu}
      open
      path="/wallet"
      onNavigation={action('navigation')}
      updateState={action('state updated')}
    />
  ))
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
            <Header>First slide</Header>
            <Paragraph>This is a test text on first slide</Paragraph>
            <PrimaryButton>Action</PrimaryButton>
          </Slide>
        </div>
        <div>
          <Slide alt>
            <Header alt>Second slide</Header>
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
  })
  .add('Modal', () => {
    const options = {
      Confirmation: 'Confirmation',
      Prompt: 'Prompt',
    };
    return (
      <Modal
        title="Primary Wallet"
        visible
        description="Set the cryptocurrency you want to use when making card payments"
        type={select('Type', options)}
        onConfirm={action('confirm')}
        onCancel={action('cancel')}
      >
        Some content here
      </Modal>
    );
  });
