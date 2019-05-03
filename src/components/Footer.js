import React from "react";
import SocialBox from './SocialBox'
import FooterPartners from './FooterPartners'
import FooterData from '../common/containers/FooterData'

const Footer = (props) => {
    
  return (
  	<div>
	  	<SocialBox/>
	  	<FooterData dataLink="https://dev.winbet-bg.com/api/partners-logo">
				<FooterPartners/>
	    </FooterData>
		</div>
  );
}


export default Footer;
