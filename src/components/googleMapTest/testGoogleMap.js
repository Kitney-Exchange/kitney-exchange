import React, { Component } from 'react';
import Geosuggest,{ Suggest } from 'react-geosuggest';

/*global google*/        // <- THIS IS NEEDED TO WORK WITH GOOGLE MAP

class TestGoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fixtures: [
        { label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576} },
        { label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838} },
        { label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135} }
      ]
     }
     
  }
  onSuggestSelect(suggest) {
    console.log(suggest);
  }
  

  render() { 

    return ( 
      <div>
        <p>TestGoogleMap Component</p>


        <Geosuggest
          placeholder="Start typing!"
          initialValue="Hamburg"
          fixtures={this.state.fixtures}
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(53.558572, 9.9278215)}
          radius="20" />


        <button onClick={ ()=> this._geoSuggest.focus() }>Focus</button>
        <button onClick={ ()=> this._geoSuggest.update('New Zealand') }>Update</button>
        <button onClick={ ()=> this._geoSuggest.clear() }>Clear</button>
        <button onClick={ ()=> this._geoSuggest.selectSuggest() }>Search</button>

      </div>
     );
  }
}
 
export default TestGoogleMap;