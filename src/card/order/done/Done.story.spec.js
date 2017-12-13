// @flow

import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Done } from './Done';
import cardOrderFlow from '../cardOrderFlow';
import {
  beforeEach,
  describe,
  it,
  specs,
  storiesOf,
} from '../../../../.storybook/facade';
import PlasticCard from '../../../landing/PlasticCard';

storiesOf('Card Ordering', module).add('Done', () => {
  specs(() =>
    describe('Done', () => {
      let component;

      beforeEach(() => {
        component = shallow(<Done />);
      });

      it('renders the component', () => {
        expect(component);
      });

      it('displays card visual', () => {
        expect(component.find(PlasticCard).length).toBe(1);
      });
    }),
  );

  const Component = cardOrderFlow(Done);
  return <Component />;
});
