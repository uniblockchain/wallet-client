// @flow
import React from 'react';
import styled from 'styled-components';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  children?: any,
};

const settings = {
  dots: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const SliderWithStyles = styled(SlickSlider)`
  .slick-dots {
    bottom: 0;
  }
`;

export default ({ children }: Props) => (
  <SliderWithStyles {...settings}>{children}</SliderWithStyles>
);
