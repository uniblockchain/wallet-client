// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

const Container = styled.div`
  width: 288px;
  height: 768px;
  margin: 0 auto;
  background: linear-gradient(
    to bottom,
    ${variables.colorNeutralLightest},
    ${variables.colorNeutralLighter}
  );
  border-radius: 30px;
  box-shadow: ${variables.boxShadowNeutralLarge};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 360px;
    height: 768px;
    padding: 2px;
  `};
`;

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 28px;
  background: ${variables.colorWhite};
  padding: 84px 18px;
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid ${variables.colorNeutralLightest};
`;

const Image = styled.img`
  width: 100%;
`;

const Speaker = styled.div`
  position: absolute;
  top: 39px;
  left: 50%;
  width: 60px;
  height: 6px;
  background: ${variables.colorNeutralLightest};
  border-radius: 999px;
  transform: translateX(-50%);
`;

const HomeButton = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  width: 60px;
  height: 60px;
  padding: 2px;
  background: linear-gradient(
    to top,
    ${variables.colorNeutralLightest},
    ${variables.colorNeutralLighter}
  );
  border-radius: 999px;
  transform: translateX(-50%);
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 999px;
    background: ${variables.colorWhite};
  }
`;

type Props = {
  image: string,
};

export const Mobile = (props: Props) => (
  <Container>
    <InnerContainer>
      <Speaker />
      <Screen>
        <Image src={props.image} alt="" />
      </Screen>
      <HomeButton />
    </InnerContainer>
  </Container>
);

export default Mobile;
