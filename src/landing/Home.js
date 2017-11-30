// @flow
import React from 'react';
import styled from 'styled-components';

import variables from './variables';

import LogoStrip from './LogoStrip';

import Hero from './Hero';
import Wallet from './Wallet';
import Card from './Card';
import Marketplace from './Marketplace';
import Vision from './Vision';

import logoABC from './img/press/abc.png';
import logoAripaev from './img/press/aripaev.png';
import logoBBC from './img/press/BBC.png';
import logoBusinessInsider from './img/press/business-insider.png';
import logoCNA from './img/press/CNA.png';
import logoCNBC from './img/press/cnbc.png';
import logoCoinTelegraph from './img/press/coin-telegraph.png';
import logoEPL from './img/press/epl.png';
import logoFintechSingapore from './img/press/fintech-singapore.png';
import logoFoxNews from './img/press/fox-news.png';
import logoMarketWatch from './img/press/market-watch.png';
import logoYahooFinance from './img/press/yahoo-finance.png';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  background: ${variables.colorWhite};
`;

export const Home = () => (
  <Container>
    <Hero />
    <Wallet />
    <Card />
    <Marketplace />
    <Vision />
    <LogoStrip
      title="As featured in"
      items={[
        {
          name: 'Fintech Singapore',
          image: logoFintechSingapore,
          link:
            'http://fintechnews.sg/1483/roboadvisor/smartly-sg-announces-robo-advisor-targeted-southeast-asian-millennials/',
        },
        {
          name: 'Yahoo! Finance',
          image: logoYahooFinance,
          link:
            'https://finance.yahoo.com/news/change-first-decentralised-crypto-bank-130000109.html',
        },
        {
          name: 'CNBC',
          image: logoCNBC,
          link:
            'https://www.cnbc.com/video/2017/08/13/smartly-wants-millennials-to-start-investing-.html',
        },
        {
          name: 'Business Insider',
          image: logoBusinessInsider,
          link:
            'http://markets.businessinsider.com/news/stocks/Change-the-first-decentralised-crypto-bank-for-e-residents-1002305938',
        },
        {
          name: 'BBC',
          image: logoBBC,
          link:
            'https://medium.com/@changebank/change-banks-ceo-on-bbc-world-news-2be5cc831744',
        },
        { name: 'ABC', image: logoABC },
        {
          name: 'Eesti Päevaleht',
          image: logoEPL,
          link:
            'http://digileht.epl.delfi.ee/arileht/eestlased-muudavad-singapuris-panganduse-tulevikku?id=76768158',
        },
        {
          name: 'Fox News',
          image: logoFoxNews,
          link:
            'http://www.wflx.com/story/36284232/change-the-first-decentralised-crypto-bank-for-e-residents',
        },
        {
          name: 'MarketWatch',
          image: logoMarketWatch,
          link:
            'http://www.marketwatch.com/story/change---the-first-decentralised-crypto-bank-for-e-residents-2017-09-04',
        },
        {
          name: 'Channel NewsAsia',
          image: logoCNA,
          link: 'https://youtu.be/xtU7AOC77JY',
          modal: true,
          videoId: 'xtU7AOC77JY',
        },
        {
          name: 'Äripäev',
          image: logoAripaev,
          link:
            'http://www.aripaev.ee/uudised/2016/09/26/eesti-maffia-istutab-idusid-kagu-aasias',
        },
        {
          name: 'Cointelegraph',
          image: logoCoinTelegraph,
          link:
            'https://cointelegraph.com/news/fintech-companies-disrupting-finance-creating-bank-of-tomorrow',
        },
      ]}
    />
  </Container>
);

export default Home;
