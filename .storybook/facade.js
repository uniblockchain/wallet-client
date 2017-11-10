import {
  storiesOf as storiesOfReal,
  action as actionReal,
} from '@storybook/react';
import {
  specs as specsReal,
  describe as describeReal,
  it as itReal,
  beforeEach as beforeEachReal,
} from 'storybook-addon-specifications';

export const storiesOf = storiesOfReal;
export const action = actionReal;
export const specs = specsReal;
export const describe = describeReal;
export const it = itReal;
export const beforeEach = beforeEachReal;
