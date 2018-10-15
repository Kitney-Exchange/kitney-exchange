import React, { Component } from 'react';
import Map from '../testComponent/map';
import TestGoogleMapHOC from './testGooglemapHOC';


class MainHubTest extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
       <p>MainHubTest Component</p>
       <p>Map 1 render by Map Component </p>
      <Map
            zoom={16}
            center={ { lat: 32.7773293, lng: -96.7963455  } }
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
        
        <TestGoogleMapHOC/>
      </div>
    );
   }
}
 
export default MainHubTest;