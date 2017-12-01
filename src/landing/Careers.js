// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import JobOffersList from './JobOffersList';

import background from './img/background-careers.jpg';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background: ${variables.colorWhite};
`;

const InnerContainer = styled.div`
  padding: 96px 0 0;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    padding: 0;
  `};
`;

const Intro = styled.div`
  padding: 0 24px;
  margin: 24px 0 48px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 960px;
    margin: 0 auto;
    padding: 244px 0 192px;
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

export const Careers = () => (
  <Container>
    <InnerContainer>
      <Intro>
        <IntroHeading>
          Join us and help us create the financial institution of the future.
        </IntroHeading>
        <IntroBody>
          <p>
            Change is a leading proposition in the digital banking sphere, using
            blockchain technology to reinvent banking and offer a all-in-one
            proposition for finance. Not only disruptive in the fintech sphere,
            Change is set to create a revolution in the entire financial sector.
          </p>
          <p>
            Change has thousands of supporters, and is backed by DHL’s ex-CEO
            Roger Crook, alongside several other big names.
          </p>
        </IntroBody>
        <Background>
          <BackgroundImage src={background} alt="" />
        </Background>
      </Intro>
      <JobOffersList
        items={[
          {
            title: 'Compliance Officer',
            location: 'Tallinn, Estonia',
            description:
              'As a Compliance Officer, you will take on the responsibility of ensuring Change meets rigorous regulatory compliance standards. You will be defining and applying the best in class know your customer (KYC), anti-money laundering (AML), and regulatory change control frameworks and processes.',
            responsibilities: [
              'Ensuring that the business has effective systems, procedures and controls for AML and KYC compliance with requirements and standards under the regulatory system',
              'Identifying gaps in compliance and address those by implementing systems, procedures and controls and working with business systems to implement them',
              'Assisting with the compliance risk assessment process ensuring that the regulatory risks are appropriately identified and assessed',
              'Providing internal training on AML and KYC',
              'Monitoring the performance of the AML, KYC, and Compliance Programme and related activities on a continuing basis, taking appropriate steps to improve its effectiveness & providing reports on a regular basis',
              'Implementing a culture of compliance and effective company systems and controls to ensure regulatory compliance',
            ],
            qualifications: [
              '3+ years of AML and KYC compliance experience at a financial services/credit lending/market trading organisations',
              'Excellent communication skills and previous experience of working with financial regulators',
              'Knowledge of the EU and Estonian financial services regulations and a global mind-set',
              'Strong decision making and problem solving ability',
              'Financial markets risk management is a plus',
            ],
          },
          {
            title: 'Designer',
            location: 'Tallinn, Estonia',
            description:
              'As a designer, you will be working with our product and marketing teams, shaping how the world sees, understands, and engages with Change. You will work in a fast-paced environment where several qualitative and quantitative tests are done in a daily basis, together with top of the class developers and designers.',
            responsibilities: [
              'Working with Change branding and image',
              'Design the Change experience across web and mobile',
              'Working with a green-field product and on-boarding experience',
              'Taking ownership and driving the vision of how the end-users interact with the product',
              'Generate concepts from sketches to prototypes, and define the look and feel of the product',
              'Make data-driven decisions informed by user testing and other research',
              'Work with product team to iterate, polish and ship',
            ],
            qualifications: [
              'Extensive UI/UX knowledge and track record',
              'Lean and iteratively work methodology, learning from end-users’ feedback and shipping fast, testing concepts and throwing them away if they don’t perform',
              'Willingness to research and understand real human needs and behaviour patterns',
              'Data driven approach to decision-making',
            ],
          },
        ]}
      />
    </InnerContainer>
  </Container>
);

export default Careers;
