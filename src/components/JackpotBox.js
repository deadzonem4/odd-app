import React from "react";
import '../common/styles/main.css';
import MainJackpot from './MainJackpot';
import OnlineJackpot from "./OnlineJackpot";
import JackpotData from '../common/containers/JackpotData.js';
import ProgressiveJackpot from "./ProgressiveJackpot";

const JackpotBox = (props) => {
  const sldierStyles = {};
  const test = props.data.jackpot_background_color;
  const test1 = 'linear-gradient(to top, ' + test + ', rgba(23,7,57,0))'
  console.log(test1);
  sldierStyles.back = {
    backgroundImage: test1
  };
  return (
    <div className="slider-jackpot-box" style={{...sldierStyles.back}}>
		  <JackpotData dataLink="https://win-cor.winbet-bg.com/api/home-sliders/prepared-data">
		  	<MainJackpot/>
		  </JackpotData>
		  <JackpotData dataLink="https://win-cor.winbet-bg.com/api/home-sliders/prepared-data">
		  	<ProgressiveJackpot/>
		  </JackpotData>
		  <JackpotData dataLink="https://win-cor.winbet-bg.com/api/home-sliders/prepared-data">
		  	<OnlineJackpot/>
		  </JackpotData>
    </div>
  );
}


export default JackpotBox;
