// @flow
import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'change-bootstrap/dist/css/bootstrap-material-design.css';
import '../index.css';
import { AddressBlock } from '../wallet/receive/addressBlock/AddressBlock';
import type { WalletType } from '../wallet/walletState';
import { Wallet } from '../wallet/walletState';
import themeDecorator from './themeDecorator';

storiesOf('Components', module)
  .addDecorator(themeDecorator)
  .add('Address Block', () => {
    const wallet: WalletType = {
      id: 1,
      currency: 'BTC',
      address: '',
      transactions: [],
      receiveAddress: '2MvpyDrvrV3PNRTD8cBX9Hy97s7NtBSGfEN',
      balance: [
        {
          value: 0.19890018,
          currency: 'BTC',
        },
        {
          value: 1257.71,
          currency: 'EUR',
        },
      ],
    };
    return <AddressBlock wallet={new Wallet(wallet)} onCopy={action('copy')} />;
  });
