import React from "react";
import Slider from "react-slick";
import '../common/styles/main.css';
import raJack from "../images/home-slider/sub-jackpot-ra.png";
import versaiJack from "../images/home-slider/sub-jackpot-versai.png";
import burningJack from "../images/home-slider/sub-jackpot-burning.png";
import currencyJack from "../images/home-slider/jackpotCardsBgn.png";
import CountUp from 'react-countup';

class ProgressiveJackpot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      countOnline : 0,
    };
	}
	componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({ 
        countOnline: this.props.data[1].mega,
      });
    }, 9000);
	}
  render() {
    var settings = {
      draggable: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 400,
      fade: false,
      cssEase: 'linear',
      dots: false,
      vertical: true,
      verticalSwiping: true
    };
		return(
    	<div className="main-jackpot-slider">
        <Slider {...settings} className="full-width-slider sub-progressive-slider">
          <div className="slide">
          	<div className="main-mystery-box">
	          	<div className="main-mystery-box-mega">
	          		<img className="main-mystery-box-img" src={raJack}  alt="winbet rise of ra"/>
	          		<div className="custom-count-ra">
	          		  <CountUp
								    start={parseInt(this.state.countOnline, 10)}
								    end={parseInt(this.props.data[1].mega, 10)}
								    duration={2.75}
								    decimals={2}
								    useEasing={true}
								    separator=" "
								    decimal=","
								    redraw={true}
								  />
								  <img className="main-mystery-box-currency" src={currencyJack}  alt="winbet rise of ra"/>
							  </div>
							</div>
          	</div>
          </div>
          <div className="slide">
            <div className="main-mystery-box">
              <div className="main-mystery-box-mega">
                <img className="main-mystery-box-img" src={versaiJack}  alt="winbet versai gold"/>
                <div className="custom-count-versai">
                  <CountUp
                    start={parseInt(this.state.countOnline, 10)}
                    end={parseInt(this.props.data[1].mega, 10)}
                    duration={2.75}
                    decimals={2}
                    useEasing={true}
                    separator=" "
                    decimal=","
                    redraw={true}
                  />
                  <img className="main-mystery-box-currency" src={currencyJack}  alt="winbet versai gold"/>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="main-mystery-box">
              <div className="main-mystery-box-mega">
                <img className="main-mystery-box-img" src={burningJack}  alt="winbet burning hot"/>
                <div className="custom-count-burning">
                  <CountUp
                    start={parseInt(this.state.countOnline, 10)}
                    end={parseInt(this.props.data[1].mega, 10)}
                    duration={2.75}
                    decimals={2}
                    useEasing={true}
                    separator=" "
                    decimal=","
                    redraw={true}
                  />
                  <img className="main-mystery-box-currency" src={currencyJack}  alt="winbet burning hot"/>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
  	)
  }
}

export default ProgressiveJackpot;

