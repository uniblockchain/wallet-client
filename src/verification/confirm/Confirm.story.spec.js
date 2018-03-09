// @flow

import { shallow } from 'enzyme';
import React from 'react';
import {
  beforeEach,
  describe,
  it,
  specs,
  storiesOf,
} from '../../../.storybook/facade';
import verificationFlow from '../VerificationFlow';
import { Confirm } from './Confirm';
import { FormFeedback } from '../../ui/form';

storiesOf('Verification', module).add('Confirm', () => {
  specs(() =>
    describe('Confirm', () => {
      let component;

      const props = {
        confirm: jest.fn(),
        error: undefined,
      };

      beforeEach(() => {
        component = shallow(<Confirm {...props} />);
      });

      it('renders the component', () => {
        expect(component);
      });

      it('renders error if present', () => {
        component.setProps({ ...props, error: 'Some error' });
        expect(component).toContainReact(
          <FormFeedback>Some error</FormFeedback>,
        );
      });
    }),
  );

  const Component = verificationFlow(Confirm);
  return <Component />;
});
