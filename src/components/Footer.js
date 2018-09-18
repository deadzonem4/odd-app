import React from "react";

const Footer = (props) => {
    
  return (
  	<div>
	    <footer id="footer">
	      <p className="all-rights">{props.text}</p>
	    </footer>
    </div>
  );
}


export default Footer;
