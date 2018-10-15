import React, { Component } from 'react';
import {withScriptjs , withGoogleMap, GoogleMap, Marker } from "react-google-maps"
/*global google*/        // <- THIS IS NEEDED TO WORK WITH GOOGLE MAP

class Map extends Component {
  state = {
 
  };
 

  render() {
    const markers = this.props.markers || [];
    
    return (
      <div>
        <GoogleMap
          defaultZoom={ this.props.zoom }
          defaultCenter={ this.props.center } >
          <Marker
            position={ { lat: -34.117, lng: 150.644 } }
          />
        </GoogleMap>
      </div>
    )
  }
}

export default (withGoogleMap)(Map);