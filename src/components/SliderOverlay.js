import React from "react";
import '../common/styles/main.css';

const MainJackpot = (props) => {
    const imgLink = "https://win-cor.winbet-bg.com/storage/" + props.data.front_file_name;
    const styles = {};

    styles.button1 = {
      color: props.data.button_1_text_color,
      backgroundColor: props.data.button_1_color,
      borderColor: props.data.button_1_border,
    };
    styles.button2 = {
      color: props.data.button_2_text_color,
      backgroundColor: props.data.button_2_color,
      borderColor: props.data.button_2_border,
    };
    if(props.data.front_file_name === null) {
      return(
        <div className="slider-overlay">
          <div className={props.data[props.description] === null ? "overlay-content text-center" : "overlay-content"}>
            <h2>{props.data[props.title]}</h2>
            <div className="title-white-line"></div>
            <p>{props.data[props.description]} 
            </p>
            <a style={{...styles.button1}} target="_blank" rel="noopener noreferrer" href={props.data.button_1_bg_url} className={props.data[props.button1] === null ? 'slider-register-emty' : 'slider-register'}><span>{props.data[props.button1]}</span></a>
            <a style={{...styles.button2}} target="_blank" rel="noopener noreferrer" href={props.data.button_2_bg_url} className={props.data[props.button2] === null ? 'slider-log-in-emty' : 'slider-log-in'}><span>{props.data[props.button2]}</span></a>
          </div>
        </div>
      )
    }
      return(
        <div className="slider-overlay">
          <div className={props.data[props.description] === null ? "overlay-content text-center" : "overlay-content"}>
            <h2>{props.data[props.title]}</h2>
            <img className="slider-front-img" src={imgLink} alt="winbet"/>
            <div className="title-white-line"></div>
            <p>{props.data[props.description]} 
            </p>
            <a style={{...styles.button1}} target="_blank" rel="noopener noreferrer" href={props.data.button_1_bg_url} className={props.data[props.button1] === null ? 'slider-register-emty' : 'slider-register'}><span>{props.data[props.button1]}</span></a>
            <a style={{...styles.button2}} target="_blank" rel="noopener noreferrer" href={props.data.button_2_bg_url} className={props.data[props.button2] === null ? 'slider-log-in-emty' : 'slider-log-in'}><span>{props.data[props.button2]}</span></a>
          </div>
        </div>
      )
}


export default MainJackpot;
