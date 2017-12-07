// @flow

import React from 'react';
import { shallow } from 'enzyme';
import {
  storiesOf,
  specs,
  describe,
  beforeEach,
  it,
} from '../../../.storybook/facade';
import NavigationDots, { type Props, Dot } from './NavigationDots';

storiesOf('Controls', module).add('NavigationDots', () => {
  specs(() =>
    describe('NavigationDots', () => {
      let component;
      const props: Props = {
        count: 5,
        activeIndex: 3,
      };

      beforeEach(() => {
        component = shallow(<NavigationDots {...props} />);
      });
      it('renders button component', () => {
        expect(component);
      });

      it('render however many dots needed', () => {
        expect(component.find(Dot)).toHaveLength(5);
      });

      it('renders an active dot', () => {
        expect(component).toContainReact(<Dot active>&bull;</Dot>);
      });
    }),
  );

  return (
    <div>
      <NavigationDots count={5} activeIndex={2} />
    </div>
  );
});
