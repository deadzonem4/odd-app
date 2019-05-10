import React from "react";
import '../common/styles/main.css';
import SocialLinks from './SocialLinks.js'
import SocialIcons from './SocialIcons.js'

const VectorMap = (props) => {

  return (
    <div className="vector-map">
        <div style={{width: 500, height: 500}}>
            <VectorMap map={'us_aea'}
              backgroundColor="#3b96ce"
              ref="map"
              containerStyle={{
                 width: '100%',
                 height: '100%'
              }}
              containerClassName="map"
            />
        </div>
		</div>
  );
}


export default VectorMap;