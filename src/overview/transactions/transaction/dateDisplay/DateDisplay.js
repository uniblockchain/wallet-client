import * as React from 'react';

export class DateDisplay extends React.Component<Props> {
  render() {
    const { date } = this.props;

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
