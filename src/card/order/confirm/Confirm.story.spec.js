// @flow

import React from 'react';
import jest from 'jest-mock';
import { shallow } from 'enzyme';
import { Confirm } from './Confirm';
import cardOrderFlow from '../cardOrderFlow';
import {
  beforeEach,
  describe,
  it,
  specs,
  storiesOf,
} from '../../../../.storybook/facade';
import { testWallets, testFee } from '../../../fixtures';

storiesOf('Card Ordering', module).add('Confirm', () => {
  specs(() =>
    describe('Confirm', () => {
      let component;

      const props = {
        wallet: testWallets,
        fee: testFee,
        activeWalletId: 1,
        handleSubmit: jest.fn(),
        error: undefined,
      };

      beforeEach(() => {
        component = shallow(<Confirm {...props} />);
      });

      it('renders the component', () => {
        expect(component);
      });
    }),
  );

  const Component = cardOrderFlow(Confirm);
  return <Component />;
});
