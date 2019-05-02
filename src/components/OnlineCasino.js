import React from "react";
import '../common/styles/main.css';
import register from "../images/home-page/register-logo.png";
import deposit from "../images/home-page/check-logo.png";
import bonus from "../images/home-page/play-logo.png";

const OnlineCasino = (props) => {
    
  return (
    <div>
	    <div className="online-casino-section">
		    <div className="container">
		    	<h2 className="main-title-white">{props.title}</h2>
		    	<div className="main-title-undeline-white"></div>
		    	<div className="online-casino-box-container">
		    			<a className="online-casino-box" href="https://winbet.bg/bg/register" target="blank">
		    				<img src={register} alt="register winbet"/>
		    				<p>Регистрация<br/>winbet.bg</p>
		    			</a>
		    			<a className="online-casino-box" href="https://winbet.bg/bg/home" target="blank">
		    				<img src={deposit} alt="deposit winbet"/>
		    				<p>Депозит</p>
		    			</a>
		    			<a className="online-casino-box" href="https://winbet.bg/bg/promotion/" target="blank">
		    				<img src={bonus} alt="bonus winbet"/>
		    				<p>Бонуси</p>
		    			</a>
		    	</div>
	    	</div>
			</div>
    </div>
  );
}

export default OnlineCasino;
