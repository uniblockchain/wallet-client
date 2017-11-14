import { storiesOf as storiesOfReal } from '@storybook/react';
import {
  specs as specsReal,
  describe as describeReal,
  it as itReal,
  beforeEach as beforeEachReal,
} from 'storybook-addon-specifications';
import { action as actionReal } from '@storybook/addon-actions';
import { select as selectReal, boolean as booleanReal } from '@storybook/addon-knobs';

export const storiesOf = storiesOfReal;
export const action = actionReal;
export const specs = specsReal;
export const describe = describeReal;
export const it = itReal;
export const beforeEach = beforeEachReal;
export const select = selectReal;
export const boolean = booleanReal;
