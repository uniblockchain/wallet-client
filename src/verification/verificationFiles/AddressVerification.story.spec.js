// @flow
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import jest from 'jest-mock';
import {
  storiesOf,
  specs,
  action,
  describe,
  beforeEach,
  it,
} from '../../../.storybook/facade';
import { AddressVerification } from './AddressVerification';

storiesOf('Page', module).add('Address Verification', () => {
  specs(() =>
    describe('Address Verification', () => {
      let component;

      const props = {
        onChoose: jest.fn(),
        redirectToNextStep: jest.fn(),
      };

      beforeEach(() => {
        component = shallow(<AddressVerification {...props} />);
      });
      it('renders address verification component', () => {
        expect(component);
      });
    }),
  );

  return (
    <AddressVerification
      onChoose={action('file chosen')}
      redirectToNextStep={action('redirecting to next step')}
    />
  );
});
