import React from "react";
import '../common/styles/main.css';
import OnlineJackpot from "./OnlineJackpot";

const SubJackpot = (props) => {
    
  return (
    <div className="sub-jackpot-container">
    	<OnlineJackpot  data={props.data}/>
    </div>
  );
}


export default SubJackpot;
