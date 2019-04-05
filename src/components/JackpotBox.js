import React from "react";
import '../common/styles/main.css';
import MainJackpot from './MainJackpot';
import OnlineJackpot from "./OnlineJackpot";
import JackpotData from '../common/containers/JackpotData.js';
import ProgressiveJackpot from "./ProgressiveJackpot";

const JackpotBox = (props) => {
    
  return (
    <div className="slider-jackpot-box">
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
