// @flow

import React from 'react';
import jest from 'jest-mock';
import expect from 'expect';
import { shallow } from 'enzyme';
import { LinearProgress } from 'material-ui';
import {
  storiesOf,
  action,
  describe,
  it,
  specs,
  beforeEach,
} from '../../../../.storybook/facade';
import { AddressBlock } from './AddressBlock';
import type { WalletType } from '../../walletState';
import { Wallet } from '../../walletState';

storiesOf('Components', module).add('Address Block', () => {
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

  specs(() =>
    describe('Address Block', () => {
      let component;

      const sampleWallet: WalletType = {
        id: 1,
        address: 'sampleAddress',
        currency: 'BTC',
        balance: [],
        receiveAddress: 'sampleReceiveAddress',
        transactions: [
          {
            id: 1,
            state: 'complete',
            date: new Date(),
            entries: [],
          },
        ],
      };

      const props = {
        wallet: new Wallet(sampleWallet),
        onCopy: jest.fn(),
      };

      beforeEach(() => {
        component = shallow(<AddressBlock {...props} />);
      });

      it('renders the component', () => {
        expect(component);
      });

      it('renders deposit hero', () => {
        expect(component).toContainReact(<h1>Receive Bitcoin</h1>);
      });

      it('renders deposit address intro', () => {
        const header = component.find('AddressHeader');
        expect(header.render().text()).toBe('Your Bitcoin address');
      });

      it('renders copying button', () => {
        expect(props.onCopy).not.toHaveBeenCalled();
        component.find('CopyButton').simulate('click');
        expect(props.onCopy).toHaveBeenCalledTimes(1);
      });

      it('renders loading when active wallet not present', () => {
        component.setProps({ wallet: null });
        expect(component.contains(<LinearProgress />)).toBe(true);
      });

      describe('renders 2 addresses for Litecoin', () => {
        const litecoinWallet: WalletType = {
          id: 1,
          address: 'sampleAddress',
          currency: 'LTC',
          balance: [],
          receiveAddress: 'QVS6ZCF7zcqqXfEDzGPtzaAvcvUaJpegV5',
          transactions: [],
        };

        const ltcProps = {
          wallet: new Wallet(litecoinWallet),
          onCopy: jest.fn(),
        };

        component = shallow(<AddressBlock {...ltcProps} />);

        const addresses = component.find('Address');
        expect(addresses.length).toBe(2);
        expect(
          addresses
            .at(0)
            .render()
            .text(),
        ).toBe('QVS6ZCF7zcqqXfEDzGPtzaAvcvUaJpegV5');
        expect(
          addresses
            .at(1)
            .render()
            .text(),
        ).toBe('2N25LSBNsyWnkPUUBNAMsusjVUY2kNzeS1T');

        const addressHeaders = component.find('AddressHeader');
        expect(addressHeaders.length).toBe(2);
        expect(
          addressHeaders
            .at(0)
            .render()
            .text(),
        ).toBe('Your Litecoin address');
        expect(
          addressHeaders
            .at(1)
            .render()
            .text(),
        ).toBe('Testnet p2sh address (deprecated)');
      });
    }),
  );

  return <AddressBlock wallet={new Wallet(wallet)} onCopy={action('copy')} />;
});
