// @flow
import styled from 'styled-components';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import variables from '../variables';

const settings = {
  dots: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export const Slider = styled(SlickSlider).attrs(settings)`
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

export const GradientSlider = styled(SlickSlider).attrs(settings)`
  .slick-dots {
    top: 0px;
    li {
      margin: 0;
      width: auto;
      height: auto;
      button {
        font-size: 30px;
      }
      button:before {
        font-size: 13.5px;
      }
    }
  }

  .slick-dots li.slick-active button:before {
    color: ${variables.colorBlue};
  }
`;

export default { Slider, GradientSlider };
