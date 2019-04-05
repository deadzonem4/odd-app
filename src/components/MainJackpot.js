import React from "react";
import Slider from "react-slick";
import '../common/styles/main.css';
import mysteryLogo from "../images/home-slider/main-jackpot-mystery-logo.png";
import megaJack from "../images/home-slider/main-jackpot-mega.png";
import superJack from "../images/home-slider/main-jackpot-super.png";
import splashJack from "../images/home-slider/main-jackpot-splash.png";
import heartJack from "../images/home-slider/main-jackpot-heart.png";
import diamondJack from "../images/home-slider/main-jackpot-diamond.png";
import spadeJack from "../images/home-slider/main-jackpot-spade.png";
import currencyJack from "../images/home-slider/jackpotCardsBgn.png";
import megaSubJack from "../images/home-slider/sub-jackpot-mega.png";
import CountUp from 'react-countup';

class MainSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      countMega : 0,
      countSuper: 0,
      countSplash: 0,
      countHeart: 0,
      countDiamond: 0,
      countSpade: 0
    };
	}
	componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({ 
        countMega: this.props.data[1].mega,
        countSuper: this.props.data[1].super,
        countSplash: this.props.data[2].pika,
        countHeart: this.props.data[2].cupa,
        countDiamond: this.props.data[2].karo,
        countSpade: this.props.data[2].spatia,
      });
    }, 9000);
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
    	if (this.props.data[0] !== "mystery") {
    		return(
		    	<div className="main-jackpot-slider">
		        <Slider {...settings} className="full-width-slider">
		          <div className="slide">
		          	<div className="main-mystery-box">
		          		<img className="main-mystery-box-img-title" src={mysteryLogo}  alt="winbet mystery"/>
			          	<div className="main-mystery-box-mega">
			          		<img className="main-mystery-box-img" src={megaJack}  alt="winbet mystery mega"/>
			          		<div className="custom-count-mega">
			          		  <CountUp
										    start={parseInt(this.state.countMega, 10)}
										    end={parseInt(this.props.data[1].mega, 10)}
										    duration={2.75}
										    decimals={2}
										    useEasing={true}
										    separator=" "
										    decimal=","
										    redraw={true}
										  />
										  <img className="main-mystery-box-currency" src={currencyJack}  alt="winbet jackpotCards"/>
									  </div>
									</div>
									<div className="main-mystery-box-super">
										<img className="main-mystery-box-img" src={superJack}  alt="winbet mystery super"/>
										<div className="custom-count-super">
										  <CountUp
										    className=""
										    start={parseInt(this.state.countSuper, 10)}
										    end={parseInt(this.props.data[1].super, 10)}
										    duration={2.75}
										    decimals={2}
										    useEasing={true}
										    separator=" "
										    decimal=","
										    redraw={true}
										  />
										  <img className="main-mystery-box-currency" src={currencyJack}  alt="winbet jackpotCards"/>
									  </div>
									</div>
		          	</div>
		          </div>
		        </Slider>
		        <Slider {...settings} className="full-width-slider sub-jackpotCards-slider">
		          <div className="slide">
		          	<div className="main-jackpotCards-box">
		          		<div className="main-jackpotCards-box-splash">
			          		<img className="main-jackpotCards-box-img" src={splashJack}  alt="winbet jackpotCards"/>
			          		<div className="main-jackpotCards-box-content">
			          		<div className="custom-count-splash">
			          		  <CountUp
										    start={parseInt(this.state.countSplash, 10)}
										    end={parseInt(this.props.data[2].pika, 10)}
										    duration={2.75}
										    decimals={2}
										    useEasing={true}
										    separator=" "
										    decimal=","
										    redraw={true}
										  />
										  <img className="main-mystery-box-currency" src={currencyJack}  alt="winbet jackpotCards"/>
									  </div>
									  </div>
									</div>									
		          	</div>
		          </div>
		        </Slider>
		      </div>
      	)
    	};
    	return(
		    	<div className="main-jackpot-slider">
		        <Slider {...settings} className="full-width-slider">
		          <div className="slide">
		          	<div className="main-jackpotCards-box">
		          		<div className="main-jackpotCards-box-splash">
			          		<img className="main-jackpotCards-box-img" src={splashJack}  alt="winbet jackpotCards"/>
			          		<div className="main-jackpotCards-box-content">
			          		<div className="custom-count-splash">
			          		  <CountUp
										    start={parseInt(this.state.countSplash, 10)}
										    end={parseInt(this.props.data[2].pika, 10)}
										    duration={2.75}
										    decimals={2}
										    useEasing={true}
										    separator=" "
										    decimal=","
										    redraw={true}
										  />
										  <img className="main-mystery-box-currency" src={currencyJack}  alt="winbet jackpotCards"/>
									  </div>
									  </div>
									</div>
									<div className="main-jackpotCards-box-heart">
										<img className="main-jackpotCards-box-img" src={heartJack}  alt="winbet jackpotCards"/>
			          		<div className="custom-count-heart">
			          		  <CountUp
										    start={parseInt(this.state.countHeart, 10)}
										    end={parseInt(this.props.data[2].cupa, 10)}
										    duration={2.75}
										    decimals={2}
										    useEasing={true}
										    separator=" "
										    decimal=","
										    redraw={true}
										  />
										  <img className="main-mystery-box-currency" src={currencyJack}  alt="winbet jackpotCards"/>
									  </div>
									</div>
									<div className="main-jackpotCards-box-diamond">
										<img className="main-jackpotCards-box-img" src={diamondJack}  alt="winbet jackpotCards"/>
			          		<div className="custom-count-diamond">
			          		  <CountUp
										    start={parseInt(this.state.countDiamond, 10)}
										    end={parseInt(this.props.data[2].karo, 10)}
										    duration={2.75}
										    decimals={2}
										    useEasing={true}
										    separator=" "
										    decimal=","
										    redraw={true}
										  />
										  <img className="main-mystery-box-currency" src={currencyJack}  alt="winbet jackpotCards"/>
									  </div>
									</div>
									<div className="main-jackpotCards-box-spade">
										<img className="main-jackpotCards-box-img" src={spadeJack}  alt="winbet jackpotCards"/>
				          	<div className="custom-count-spade">
			          		  <CountUp
										    start={parseInt(this.state.countSpade, 10)}
										    end={parseInt(this.props.data[2].spatia, 10)}
										    duration={2.75}
										    decimals={2}
										    useEasing={true}
										    separator=" "
										    decimal=","
										    redraw={true}
										  />
										  <img className="main-mystery-box-currency" src={currencyJack}  alt="winbet jackpotCards"/>
									  </div>
									</div>									
		          	</div>
		          </div>
		        </Slider>
		        <Slider {...settings} className="full-width-slider sub-mystery-slider">
		          <div className="slide">
		          	<div className="main-mystery-box">
			          	<div className="main-mystery-box-mega">
			          		<img className="main-mystery-box-img" src={megaSubJack}  alt="winbet mystery mega"/>
			          		<div className="custom-count-mega">
			          		  <CountUp
										    start={parseInt(this.state.countMega, 10)}
										    end={parseInt(this.props.data[1].mega, 10)}
										    duration={2.75}
										    decimals={2}
										    useEasing={true}
										    separator=" "
										    decimal=","
										    redraw={true}
										  />
										  <img className="main-mystery-box-currency" src={currencyJack}  alt="winbet jackpotCards"/>
									  </div>
									</div>
		          	</div>
		          </div>
		        </Slider>
		      </div>
      );
  }
}

export default MainSlider;

