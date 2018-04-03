// @flow

import React from 'react';
import jest from 'jest-mock';
import expect from 'expect';
import { shallow } from 'enzyme';
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
import { testWallet } from '../../../fixtures';

storiesOf('Components', module).add('Address Block', () => {
  specs(() =>
    describe('Address Block', () => {
      let component;

      const props = {
        wallet: testWallet,
        onCopy: jest.fn(),
      };

      beforeEach(() => {
        component = shallow(<AddressBlock {...props} />);
      });

      it('renders the component', () => {
        expect(component);
      });

      it('renders deposit hero', () => {
        expect(component).toContainReact(<h1>Receive Ether</h1>);
      });

      it('renders deposit address intro', () => {
        const heading = component.find('AddressHeading');
        expect(heading.render().text()).toBe('Your Ether address');
      });

      it('renders copying button', () => {
        expect(props.onCopy).not.toHaveBeenCalled();
        component.find('CopyButton').simulate('click');
        expect(props.onCopy).toHaveBeenCalledTimes(1);
      });

      it('does not render when active wallet not present', () => {
        component.setProps({ wallet: null });
        expect(component.text()).toBeFalsy();
      });

      it('shows notification when copy button is clicked', () => {
        expect(component.find('Notification').length).toEqual(1);
        expect(component.state('showNotification')).toBeFalsy();
        component.find('CopyButton').simulate('click');
        expect(component.state('showNotification')).toBeTruthy();
      });

      describe('renders 2 addresses for Litecoin', () => {
        const litecoinWallet: WalletType = {
          id: 1,
          address: 'sampleAddress',
          currency: 'LTC',
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
        ).toBe('Coming soon.');
        expect(
          addresses
            .at(1)
            .render()
            .text(),
        ).toBe('Coming soon.');

        const addressHeadings = component.find('AddressHeading');
        expect(addressHeadings.length).toBe(2);
        expect(
          addressHeadings
            .at(0)
            .render()
            .text(),
        ).toBe('Your Litecoin address');
        expect(
          addressHeadings
            .at(1)
            .render()
            .text(),
        ).toBe('Testnet p2sh address (deprecated)');

        const copyButtons = component.find('CopyButton');
        expect(copyButtons.length).toBe(2);
      });
    }),
  );

  return <AddressBlock wallet={testWallet} onCopy={action('copy')} />;
});
