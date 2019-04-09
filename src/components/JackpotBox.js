import React from "react";
import '../common/styles/main.css';
import MainJackpot from './MainJackpot';
import OnlineJackpot from "./OnlineJackpot";
import JackpotData from '../common/containers/JackpotData.js';
import ProgressiveJackpot from "./ProgressiveJackpot";

const JackpotBox = (props) => {
  const jackpotBox = {};
  const color = props.data.jackpot_background_color;
  const boxColor = 'linear-gradient(to top, ' + color + ', rgba(23,7,57,0))'
  jackpotBox.back = {
    backgroundImage: boxColor
  };
  return (
    <div className="slider-jackpot-box" style={{...jackpotBox.back}}>
		  <JackpotData dataLink="https://win-cor.winbet-bg.com/api/home-sliders/prepared-data">
		  	<MainJackpot/>
		  	<ProgressiveJackpot/>
		  	<OnlineJackpot/>
		  </JackpotData>
    </div>
  );
}


export default JackpotBox;
