// @flow
import React from 'react';
import jest from 'jest-mock';
import expect from 'expect';
import { shallow } from 'enzyme';
import {
  storiesOf,
  describe,
  action,
  it,
  specs,
  beforeEach,
} from '../../../.storybook/facade';
import Notification from './Notification';

storiesOf('Components', module).add('Notification', () => {
  const props = {
    open: true,
    message: 'Test message',
  };
  specs(() =>
    describe('Notification', () => {
      let component;
      const onClose = jest.fn();
      beforeEach(() => {
        component = shallow(<Notification {...props} onClose={onClose} />);
      });

      it('renders the component', () => {
        expect(component);
      });
    }),
  );
  return <Notification {...props} onClose={action('close')} />;
});
