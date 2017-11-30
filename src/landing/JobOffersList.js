// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import JobOffer from './JobOffer';

const Container = styled.div`
  padding: 96px 0 0;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    padding: 0;
  `};
`;

const InnerContainer = styled.div`
  padding: 0 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 960px;
    margin: 0 auto;
    padding: 0;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
    width: 1152px;
  `};
`;

const Grid = styled.div`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: flex;
    justify-content: space-between;
  `};
`;

const GridItem = styled.div`
  margin-bottom: 72px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    flex: 0 0 calc(50% - 48px);
  `};
`;

type Props = {
  items: Array<Object>,
};

export const JobOffersList = (props: Props) => (
  <Container>
    <InnerContainer>
      <Grid>
        {props.items.map((item, i) => (
          <GridItem key={i}>
            <JobOffer
              title={item.title}
              location={item.location}
              description={item.description}
              responsibilities={item.responsibilities}
              qualifications={item.qualifications}
            />
          </GridItem>
        ))}
      </Grid>
    </InnerContainer>
  </Container>
);

export default JobOffersList;
