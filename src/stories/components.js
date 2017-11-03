// @flow
import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import '../index.css';
import { AddressBlock } from '../wallet/receive/addressBlock/AddressBlock';
import type { Wallet } from '../wallet/walletState';
import themeDecorator from './themeDecorator';

storiesOf('Components', module)
  .addDecorator(themeDecorator)
  .add('Address Block', () => {
    const wallets: Array<Wallet> = [
      {
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
      },
    ];
    return (
      <AddressBlock
        wallets={wallets}
        activeWalletId={1}
        onCopy={action('copy')}
      />
    );
  });
