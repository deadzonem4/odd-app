import React from "react";
import Slider from "react-slick";
import '../common/styles/main.css';
import onlineJack from "../images/home-slider/sub-onlineJack.png";
import currencyJack from "../images/home-slider/jackpotCardsBgn.png";
import CountUp from 'react-countup';

class OnlineJackpot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      countOnline : 0,
    };
	}
	componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({ 
        countOnline: this.props.data.onlinePika/100,
      });
    }, 7000);
	}
  render() {
    var settings = {
      draggable: true,
    	arrows: false,
      slidesToShow: 1,
      slidesToScroll: 0,
      autoplay: false,
      pauseOnHover: false,
      autoplaySpeed: 8000,
      infinite: true,
      speed: 400,
      fade: true,
      cssEase: 'linear',
      dots: false
    };
		return(
    	<div className="main-jackpot-slider">
        <Slider {...settings} className="full-width-slider sub-online-slider">
          <div className="slide">
          	<div className="main-mystery-box">
	          	<div className="main-mystery-box-mega">
	          		<img className="main-mystery-box-img" src={onlineJack}  alt="winbet online"/>
	          		<div className="custom-count-online">
	          		  <CountUp
								    start={this.state.countOnline}
								    end={(this.props.data.onlinePika)/100}
								    duration={2.75}
								    decimals={2}
								    useEasing={true}
								    separator=" "
								    decimal=","
								    redraw={true}
								  />
								  <img className="main-mystery-box-currency" src={currencyJack}  alt="winbet online"/>
							  </div>
							</div>
          	</div>
          </div>
        </Slider>
      </div>
  	)
  }
}

export default OnlineJackpot;

