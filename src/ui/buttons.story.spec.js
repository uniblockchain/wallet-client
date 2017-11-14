// @flow
import React from 'react';
import { storiesOf, action, boolean } from '../../.storybook/facade';
import { Button, PrimaryButton } from './buttons';

storiesOf('Controls', module).add('Button', () => (
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
));
