import React from "react";
import HomeMap from '../components/HomeMap';
import DarkMap from '../components/DarkMap';

const CasinosPage = (props) => {
    
    return (
      <div className="casino-page">
        <DarkMap />
        <HomeMap
				  containerElement={<div style={{ height: `360px` }} />}
				  mapElement={<div style={{ height: `100%` }} />}
				/>
      </div>
    );
}


export default CasinosPage;
