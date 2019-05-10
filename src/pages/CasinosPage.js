import React from "react";
import HomeMap from '../components/HomeMap';

const CasinosPage = (props) => {
    
    return (
      <div className="casino-page">
        <span>here</span>
        <HomeMap
				  containerElement={<div style={{ height: `360px` }} />}
				  mapElement={<div style={{ height: `100%` }} />}
				/>
      </div>
    );
}


export default CasinosPage;
