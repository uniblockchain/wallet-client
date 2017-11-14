// @flow
import React from 'react';
import { shallow } from 'enzyme';
import {
  storiesOf,
  action,
  boolean,
  specs,
  describe,
  beforeEach,
  it,
} from '../../.storybook/facade';
import { Button, PrimaryButton } from './buttons';

storiesOf('Controls', module).add('Button', () => {
  specs(() =>
    describe('Button', () => {
      let component;

      beforeEach(() => {
        component = shallow(<Button />);
      });
      it('renders button component', () => {
        expect(component);
      });
      it('renders primary button component', () => {
        const primaryButton = shallow(<PrimaryButton />);
        expect(primaryButton);
      });
    }),
  );

  return (
    <div>
      <Button inline={boolean('Inline', false)} onClick={action('clicked')}>
        Normal button
      </Button>
      <PrimaryButton
        alt={boolean('Alternative', false)}
        inline={boolean('Inline', false)}
        onClick={action('clicked')}
      >
        Primary button
      </PrimaryButton>
    </div>
  );
});
