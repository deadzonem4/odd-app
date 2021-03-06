import React from "react";
import Slider from "react-slick";
import '../common/styles/main.css';
import JackpotBox from "./JackpotBox";
import SliderOverlay from "./SliderOverlay";
import SliderBackground from "./SliderBackground";

class MainSlider extends React.Component {
  render() {
    const slides = this.props.SliderBg.map((data, index) =>{
      if (data.is_deleted === 0) {
        const sldierStyles = {};
        sldierStyles.border = {
          backgroundColor: data.border_color_slider
        };
        if(data.has_mystery === 0) {
          return(
            <div className="slide" key={index}>
              <div className="slider-border" style={{...sldierStyles.border}}></div>
              <SliderBackground  data={data}/>
              <SliderOverlay data={data} title="front_file_title" description="front_file_description" button1="button_1_text" button2="button_2_text"/>
            </div>
          )
        }
        return(
          <div className="slide" key={index}>
            <div className="slider-border" style={{...sldierStyles.border}}></div>
            <SliderBackground  data={data}/>
            <SliderOverlay data={data} title="front_file_title" description="front_file_description" button1="button_1_text" button2="button_2_text"/>
            <JackpotBox data={data}/>
          </div>
        )
      }
      return(
        null
      )
    });

    var settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      pauseOnHover: false,
      autoplaySpeed: 11600,
      infinite: true,
      speed: 400,
      fade: true,
      cssEase: 'linear',
      dots: true
    };

    return (
      <div className="main-slider">
        <Slider {...settings} className="full-width-slider">
          {slides}
        </Slider>
      </div>
    );
  }
}

export default MainSlider;

