import React from "react";
import '../common/styles/main.css';
import { VectorMap } from "react-jvectormap"

class DarkMap extends React.Component {

  render() {
    return(
      <div className="vector-map">
        <div style={{width: 500, height: 500}}>
            <VectorMap map={'europe_mill'}
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
    )
  }
}

export default DarkMap;

