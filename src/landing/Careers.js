// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import background from './img/background-careers.jpg';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background: ${variables.colorWhite};
`;

const InnerContainer = styled.div`
  padding: 96px 24px 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 960px;
    margin: 0 auto;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
    width: 1152px;
  `};
`;

const Intro = styled.div`
  margin: 24px 0 48px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 960px;
    margin: 0 auto;
    padding: 244px 0 36px;
    padding-right: calc(480px + 48px);
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
    width: 1152px;
    padding-right: calc(576px + 48px);
  `};
`;

const IntroHeading = styled.div`
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeLarge};
  margin-bottom: 18px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    font-size: ${variables.fontSizeLarger};
    margin-bottom: 36px;
  `};
`;

const IntroBody = styled.div`
  color: ${variables.colorNeutralDark};
  font-family: ${variables.fontSecondary};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
  `};
  p {
    margin-bottom: 12px;
    ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
      font-size: ${variables.fontSizeMedium};
    `};
  }
`;

const Background = styled.div`
  display: none;
  pointer-events: none;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: ${variables.zIndexHeroBackground};
    width: 653px;
    height: 618px;
    /* transform: translateX(-50%); */
  `};
`;

const BackgroundImage = styled.img`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 100%;
  `};
`;

export const Careers = class Careers extends React.Component<{}> {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = 'https://getchange.bamboohr.co.uk/js/jobs2.php';
    script.async = true;

    if (document.body) {
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <Container>
        <InnerContainer>
          <Intro>
            <IntroHeading>
              Join us and help us create the financial institution of the
              future.
            </IntroHeading>
            <IntroBody>
              <p>
                Change is a leading proposition in the Fintech sphere, using
                blockchain technology to reinvent banking and offer a all-in-one
                proposition for finance. Not only disruptive in the fintech
                sphere, Change is set to create a revolution in the entire
                financial sector.
              </p>
              <p>
                Change has thousands of supporters, and is backed by DHL’s
                ex-CEO Roger Crook, alongside several other big names.
              </p>
            </IntroBody>
            <Background>
              <BackgroundImage src={background} alt="" />
            </Background>
          </Intro>

          <div id="BambooHR">
            <link
              href="https://getchange.bamboohr.co.uk/css/jobs-embed.css"
              rel="stylesheet"
            />
            <div id="BambooHR-ATS" />
          </div>
        </InnerContainer>
      </Container>
    );
  }
};

export default Careers;
