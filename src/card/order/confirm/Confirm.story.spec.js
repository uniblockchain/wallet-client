// @flow

import { shallow } from 'enzyme';
import React from 'react';
import {
  beforeEach,
  describe,
  it,
  specs,
  storiesOf,
} from '../../../../.storybook/facade';
import cardOrderFlow from '../cardOrderFlow';
import { Confirm } from './Confirm';

storiesOf('Card Ordering', module).add('Confirm', () => {
  specs(() =>
    describe('Confirm', () => {
      let component;

      const props = {
        activeWalletId: 1,
        confirm: jest.fn(),
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
