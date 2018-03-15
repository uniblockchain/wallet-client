// @flow

import { shallow } from 'enzyme';
import expect from 'expect';
import jest from 'jest-mock';
import React from 'react';
import {
  action,
  beforeEach,
  describe,
  it,
  specs,
  storiesOf,
} from '../../../../.storybook/facade';
import { SelfieVerification } from './SelfieVerification';

storiesOf('Page', module).add('Selfie Verification', () => {
  specs(() =>
    describe('Selfie Verification', () => {
      let component;

      const props = {
        postVerification: jest.fn(),
        redirectToNextStep: jest.fn(),
      };

      beforeEach(() => {
        component = shallow(<SelfieVerification {...props} />);
      });
      it('renders selfie verification component', () => {
        expect(component);
      });
    }),
  );

  return (
    <SelfieVerification
      postVerification={action('posting verification')}
      redirectToNextStep={action('redirecting to next step')}
    />
  );
});
