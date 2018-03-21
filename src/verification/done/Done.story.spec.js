// @flow

import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Done } from './Done';
import verificationFlow from '../VerificationFlow';
import {
  beforeEach,
  describe,
  it,
  specs,
  storiesOf,
} from '../../../.storybook/facade';
import PlasticCard from '../../landing/PlasticCard';

storiesOf('Verification', module).add('Done', () => {
  specs(() =>
    describe('Done', () => {
      let component;

      const initialAddress = {
        id: null,
        countryCode: null,
        city: null,
        streetAddress: null,
        apartment: null,
        postalCode: null,
      };

      const props = {
        address: initialAddress,
      };

      beforeEach(() => {
        component = shallow(<Done {...props} />);
      });

      it('renders the component', () => {
        expect(component);
      });

      it('displays card visual', () => {
        expect(component.find(PlasticCard).length).toBe(1);
      });
    }),
  );

  const Component = verificationFlow(Done);
  return <Component />;
});
