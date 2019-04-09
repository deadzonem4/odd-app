import React from "react";
import '../common/styles/main.css';

const SliderBackground = (props) => {
	const extension = props.data.background_file_name.substr(props.data.background_file_name.length - 3)
  if(extension === "mp4") {
    return(
    	<video width="100%" autoPlay muted loop>
  			<source src={"https://win-cor.winbet-bg.com/storage/" + props.data.background_file_name} type="video/mp4"/>
			</video>
    )
  }
    return(
			<img src={"https://win-cor.winbet-bg.com/storage/" + props.data.background_file_name} alt='winbet'/>
    )
}


export default SliderBackground;
