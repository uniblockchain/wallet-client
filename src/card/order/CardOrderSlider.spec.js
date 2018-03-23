// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { CardOrderSlider, type Props } from './CardOrderSlider';
import { GradientHeading } from '../../ui';

describe('CardOrderSlider component', () => {
  let component;

  const props: Props = {
    cardOrdered: false,
  };

  beforeEach(() => {
    component = shallow(<CardOrderSlider {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders slides for users who already ordered card', () => {
    const youAreInWaitingListHeading = (
      <GradientHeading>
        You are in the <br />
        waiting list
      </GradientHeading>
    );

    component.setProps({ cardOrdered: true });

    expect(component.contains(youAreInWaitingListHeading)).toBe(true);
  });

  it('renders slides for users who have not ordered card', () => {
    const payWithAnyCurrencyHeading = (
      <GradientHeading>
        Pay with any <br />
        currency
      </GradientHeading>
    );
    const acceptedAnywhereHeading = (
      <GradientHeading>
        Accepted <br />
        everywhere
      </GradientHeading>
    );

    component.setProps({ cardOrdered: false });

    expect(component.contains(payWithAnyCurrencyHeading)).toBe(true);
    expect(component.contains(acceptedAnywhereHeading)).toBe(true);
  });

  it('only renders introductory slides for users who have not ordered card', () => {
    const youAreInWaitingListHeading = (
      <GradientHeading>
        You are in the <br />
        waiting list
      </GradientHeading>
    );

    component.setProps({ cardOrdered: false });

    expect(component.contains(youAreInWaitingListHeading)).toBe(false);
  });

  it('only renders slides with success message for users who have ordered card', () => {
    const payWithAnyCurrencyHeading = (
      <GradientHeading>
        Pay with any <br />
        currency
      </GradientHeading>
    );

    component.setProps({ cardOrdered: true });

    expect(component.contains(payWithAnyCurrencyHeading)).toBe(false);
  });
});
