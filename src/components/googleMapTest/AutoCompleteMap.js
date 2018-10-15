import React, { Component } from 'react';
import MapContainer  from './MapContainer';
import { Marker } from 'google-maps-react'

class AutoCompleteMap extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      position: null
     }
     this.renderAutoComplete = this.renderAutoComplete.bind(this);
  }

  componentDidMount() {
    this.renderAutoComplete();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    // console.log('prevState', prevState);
    if (this.props !== prevProps.map) this.renderAutoComplete();
  }

  onSubmit(e) {
    e.preventDefault();
  }

  renderAutoComplete() {
    const { google, map } = this.props;

    if (!google || !map) return;

    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();

      if (!place.geometry) {
        return;
      } 

      if (place.geometry.viewport) 
        map.fitBounds(place.geometry.viewport);
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
      this.setState({ position: place.geometry.location });
    });
  }

  render() { 
    
    return ( 
        <div style={ { marginLeft: '500px', border: '1px solid red' } } >
          <div>
            <form onSubmit={ this.onSubmit }>
              <input
                placeholder="Enter a location"
                ref={ ref => (this.autocomplete = ref) }
                type="text"/>
              <input  type="submit" value="Go" />
            </form>

            <div>
              <div>Lat: { this.state.position && this.state.position.lat() }</div>
              <div>Lng: { this.state.position && this.state.position.lng() }</div>
            </div>
          </div>
        </div>
     );
  }
}
 
export default AutoCompleteMap;