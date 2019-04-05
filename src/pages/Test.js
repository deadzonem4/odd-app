import React from 'react';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import '../common/styles/main.css';
import {Helmet} from "react-helmet";


class Test extends React.Component {
  // componentWillMount(){
  //   console.log("The language is: " + userLang);
  // }

  // componentDidMount() {
  //   window.addEventListener("resize", this.resize.bind(this));

  // }

  // resize() {
  //   if (window.innerWidth <= 760) {
  //     document.location = 'https://affiliate.winbet-bg.com/#/'
  //   }
  // }
  render() {
    // const userLang = navigator.language || navigator.userLanguage; 

const one = "12 000BGN";
const two = "15 000BGN";
const three = "18 000BGN";
const four = "22 000BGN";
const five = "28 000BGN";
const six = "50 000BGN";
const seven = "54 000BGN";

var values = [];
var newVals = [];
values.push(one, two, three, four, five, six, seven)

for( var i=0; i<values.length;i++){
  values[i] = parseInt(values[i], 10);
  newVals.push(values[i]);
}
    var settings = {
      centerMode: true,
      draggable:true,
      slidesToShow:1,
      infinite:true,
      slidesToScrol1: 1,
      autoplay: true,
      autoplaySpeed: 3000, 
      arrows:false,
      speed:1200,
      easing:'linear',
      variableWidth:true,
      pauseOnHover:false,
      swipeToSlide:true,
    };
    return (
      <div className="test">
      <Helmet>
        <title>Test Page</title>
        <meta name="description" content="Test page description" />
      </Helmet>
      <div className="red-box">
      <p>
        Последни<br/>топ печалби
      </p>
      </div>
      <div className="main-slider2">
        <Slider {...settings} className="full-width-slider">
          <div className="slide">
            <div className="">
              <span>12.04.2018</span>
              <h4>{one}</h4>
              <p>winbet sofia, maldost</p>
            </div>
          </div>
          <div className="slide">
            <div className="promo">
              <span>12.04.2018</span>
              <h4>{two}</h4>
              <p>winbet sofia, maldost</p>
            </div>
          </div>
           <div className="slide">
            <div className="">
              <span>12.04.2018</span>
              <h4>{three}</h4>
              <p>winbet sofia, maldost</p>
            </div>
          </div>
            <div className="slide">
            <div className="">
              <span>12.04.2018</span>
              <h4>{one}</h4>
              <p>winbet sofia, maldost</p>
            </div>
          </div>
          <div className="slide">
            <div className="">
              <span>12.04.2018</span>
              <h4>{one}</h4>
              <p>winbet sofia, maldost</p>
            </div>
          </div>
          <div className="slide">
            <div className="">
              <span>12.04.2018</span>
              <h4>{one}</h4>
              <p>winbet sofia, maldost</p>
            </div>
          </div>
          <div className="slide">
            <div className="">
              <span>12.04.2018</span>
              <h4>{one}</h4>
              <p>winbet sofia, maldost</p>
            </div>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}

export default Test;
