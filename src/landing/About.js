// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from './variables';

import VisionMission from './VisionMission';
import AboutIntro from './AboutIntro';
import AboutFacts from './AboutFacts';
import Residency from './eResidency';
import LogoStrip from './LogoStrip';
import Timeline from './Timeline';
import Team from './Team';
import Token from './Token';

import logoeResidency from './img/partners/e-residency.png';
import logoKRToken from './img/partners/kr-token.png';
import logoBlockchainAssets from './img/partners/blockchain-assets.png';
import logoICOBank from './img/partners/ico-bank.png';
import logoMothership from './img/partners/mothership.png';
import logoNextMoney from './img/partners/next-money.png';
import logoTSH from './img/partners/TSH.png';
import logoZilla from './img/partners/zilla.png';
import logoKuCoin from './img/exchanges/kucoin.png';
import logoYoBit from './img/exchanges/yobit.png';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 96px 0 0;
  background: ${variables.colorWhite};
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    padding: 0;
  `};
`;

export const About = () => (
  <Container>
    <AboutIntro />
    <VisionMission />
    <AboutFacts />
    <LogoStrip
      title="Partners"
      items={[
        {
          name: 'e-Residency',
          image: logoeResidency,
          link:
            'http://fintechnews.sg/1483/roboadvisor/smartly-sg-announces-robo-advisor-targeted-southeast-asian-millennials/',
        },
        {
          name: 'Mothership',
          image: logoMothership,
          link: 'https://mothership.cx/',
        },
        {
          name: 'KR Token',
          image: logoKRToken,
          link: 'http://www.krtoken.com/',
        },
        {
          name: 'Next Money',
          image: logoNextMoney,
          link: 'https://nextmoney.org/',
        },
        {
          name: 'Blockchain Assets',
          image: logoBlockchainAssets,
          link: 'http://bca.fund/',
        },
        {
          name: 'ICO Bank',
          image: logoICOBank,
          link: 'https://www.ico-bank.io/',
        },
        {
          name: 'TSH Development',
          image: logoTSH,
          link: 'http://www.tsh-d.co.jp/',
        },
        { name: 'Zilla', image: logoZilla, link: 'https://zla.io/' },
      ]}
    />
    <Residency />
    <Timeline
      milestones={[
        { title: 'Q1 2016', body: 'Change is founded in Singapore' },
        { title: 'Q3 2017', body: '$17.5 million raised from 5600 people' },
        {
          title: 'Q4 2017',
          body: 'Change Wallet, Change Card',
          highlighted: true,
        },
        { title: 'Q1 2018', body: 'Change Marketplace', highlighted: true },
        {
          title: 'Q4 2018',
          body: 'Traditional currencies such as USD, EUR, GBP',
          highlighted: true,
        },
        { title: '2020', body: 'Banking license', highlighted: true },
      ]}
    />
    <Team
      title="Team"
      body=""
      people={[
        { name: 'Kristjan Kangro', title: 'CEO' },
        { name: 'Francisco Bernardo', title: 'Marketing' },
        { name: 'Gustav Liblik', title: 'Product' },
        { name: 'Dragos Giugula', title: 'Partnerships' },
      ]}
    />
    <Team
      title="Advisors"
      body=""
      people={[
        { name: 'Roger Crook', title: 'Ex-CEO of DHL' },
        { name: 'Lesly Goh', title: 'Financial services lead at Microsoft' },
        {
          name: 'Miguel Soriano',
          title: 'Professor at the National University of Singapore',
        },
        { name: 'Andras Kristof', title: 'Blockchain Expert' },
      ]}
    />
    <Token />
    <LogoStrip
      title="Start trading at"
      items={[
        { name: 'KuCoin', image: logoKuCoin, link: 'https://kucoin.com/' },
        { name: 'YoBit', image: logoYoBit, link: 'https://yobit.net/en/' },
      ]}
    />
  </Container>
);

export default About;
