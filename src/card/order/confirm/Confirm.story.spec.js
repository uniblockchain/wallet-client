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

storiesOf('Card Ordering', module).add('Confirm', () => {
  specs(() =>
    describe('Confirm', () => {
      let component;

      const props = {
        wallets: [],
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
