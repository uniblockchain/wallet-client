import { Component } from 'react';
import * as React from 'react';

export class DateDisplay extends Component<Props> {
  render() {
    const date: Date = this.props.date;

    return (
      <div>
        {date.getDate()}&nbsp;
        {date.toLocaleString('en', { month: 'long' })}&nbsp;
        {date.getFullYear()}
      </div>
    );
  }
}

export default DateDisplay;
