// @flow
import styled from 'styled-components';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export default styled(SlickSlider).attrs(settings)`
  .slick-dots {
    bottom: 20px;
    li {
      margin: 0;
      width: auto;
      height: auto;
      button {
        width: auto;
        height: auto;
      }
    }
  }
`;
