// @flow

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { MarketRateTable } from '../marketRates';
import { BalanceTable, TotalBalance } from '../balance';
import variables from '../../ui/variables';

/* Hack -> could not style Slider directly for some unknown reason */
const StyledSliderWrapper = styled.div`
  .slick-dots {
    li {
      margin: 0;
      width: auto;
      height: auto;
      button {
        font-size: 30px;
      }
      button:before {
        font-size: 10.1px;
        opacity: 1;
        color: ${variables.colorNeutralLight};
      }
    }
  }

  .slick-dots li.slick-active button:before {
    color: ${variables.colorBlue};
  }
`;

const TableDiv = styled.div`
  margin-top: 41px;
`;

export default class AsNavFor extends React.Component<> {
  state = {
    asNavForFirst: undefined,
    asNavForSecond: undefined,
  };

  componentDidMount() {
    this.setState({
      asNavForFirst: this.firstSlider,
      asNavForSecond: this.secondSlider,
    });
  }

  render() {
    return (
      <div>
        <StyledSliderWrapper>
          <Slider
            asNavFor={this.state.asNavForSecond}
            ref={slider => (this.firstSlider = slider)}
            fade
            dots
          >
            <div>
              <TotalBalance />
            </div>
            <div>
              <TotalBalance />
            </div>
          </Slider>
        </StyledSliderWrapper>
        <Slider
          asNavFor={this.state.asNavForFirst}
          ref={slider => (this.secondSlider = slider)}
          draggable={false}
        >
          <TableDiv>
            <MarketRateTable />
          </TableDiv>
          <TableDiv>
            <BalanceTable />
          </TableDiv>
        </Slider>
      </div>
    );
  }
}
