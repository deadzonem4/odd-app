import React from 'react';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import '../common/styles/main.css';

const animation = {};

animation.fill = {
  background: '#23345c',
  boxShadow: '0px 2px 11px 1px rgba(0, 0, 0, 0.31)',
  borderBottom: 'solid 1px #98a3b7'
};


class Test extends React.Component {
  render() {
    var settings = {
      centerMode: true,
      draggable:true,
      slidesToShow:1,
      infinite:true,
      slidesToScrol1: 1,
      autoplay: true,
      autoplaySpeed: 3500, 
      arrows:false,
      speed:1200,
      easing:'linear',
      variableWidth:true,
      pauseOnHover:false,
      slide: '.slider .group',
      swipeToSlide:true,
    };
    return (
      <div className="test">
      <div className="red-box">
      <p>
        Последни<br/>топ печалби
      </p>
      </div>
      <div className="main-slider">
        <Slider {...settings} className="full-width-slider">
          <div className="slide">
            <div className="promo">
              <span>12.04.2018</span>
              <h4>12 000BGN</h4>
              <p>winbet sofia, maldost</p>
            </div>
          </div>
          <div className="slide">
            <span>14.04.2018</span>
            <h4>15 000BGN</h4>
            <p>winbet sofia, maldost</p>
          </div>
          <div className="slide">
            <span>10.04.2018</span>
            <h4>10 000BGN</h4>
            <p>winbet sofia, maldost</p>
          </div>
          <div className="slide">
            <span>19.04.2018</span>
            <h4>18 000BGN</h4>
            <p>winbet sofia, maldost</p>
          </div>
          <div className="slide">
            <span>29.04.2018</span>
            <h4>29 000BGN</h4>
            <p>winbet sofia, maldost</p>
          </div>
          <div className="slide">
            <span>09.04.2018</span>
            <h4>40 000BGN</h4>
            <p>winbet sofia, maldost</p>
          </div>
          <div className="slide">
            <span>01.04.2018</span>
            <h4>28 000BGN</h4>
            <p>winbet sofia, maldost</p>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}

export default Test;
