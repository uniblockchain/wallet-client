// @flow

import * as React from 'react';

type Props = {
  date: Date,
};
export const DateDisplay = ({ date }: Props) => (
  <div>
    {date.getDate()}&nbsp;
    {date.toLocaleString('en', { month: 'long' })}&nbsp;
    {date.getFullYear()}
  </div>
);

export default DateDisplay;
