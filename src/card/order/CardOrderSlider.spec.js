// @flow
import React from 'react';
import { shallow } from 'enzyme';
import {
  CardOrderSlider,
  type Props,
  StyledGradientHeading,
  StyledWiderGradientHeading,
} from './CardOrderSlider';

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
      <StyledWiderGradientHeading>
        You are in the <br />
        waiting list
      </StyledWiderGradientHeading>
    );

    component.setProps({ cardOrdered: true });

    expect(component.contains(youAreInWaitingListHeading)).toBe(true);
  });

  it('renders slides for users who have not ordered card', () => {
    const payWithAnyCurrencyHeading = (
      <StyledGradientHeading>
        Pay with any <br />
        currency
      </StyledGradientHeading>
    );
    const acceptedAnywhereHeading = (
      <StyledGradientHeading>
        Accepted <br />
        everywhere
      </StyledGradientHeading>
    );

    component.setProps({ cardOrdered: false });

    expect(component.contains(payWithAnyCurrencyHeading)).toBe(true);
    expect(component.contains(acceptedAnywhereHeading)).toBe(true);
  });

  it('only renders introductory slides for users who have not ordered card', () => {
    const youAreInWaitingListHeading = (
      <StyledWiderGradientHeading>
        You are in the <br />
        waiting list
      </StyledWiderGradientHeading>
    );

    component.setProps({ cardOrdered: false });

    expect(component.contains(youAreInWaitingListHeading)).toBe(false);
  });

  it('only renders slides with success message for users who have ordered card', () => {
    const payWithAnyCurrencyHeading = (
      <StyledGradientHeading>
        Pay with any <br />
        currency
      </StyledGradientHeading>
    );

    component.setProps({ cardOrdered: true });

    expect(component.contains(payWithAnyCurrencyHeading)).toBe(false);
  });
});
