import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import AutoCompleteMap from './AutoCompleteMap';

const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY
console.log(GOOGLE_MAP_KEY);
class MapContainer extends Component {
  constructor(props){
    super(props)
      this.state = { 
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
       }
    this.handleOnMarkerClick = this.handleOnMarkerClick.bind(this);
  }

  handleOnMarkerClick(props, marker, e) {
    console.log('props', props)
    console.log('marker', marker)
    console.log('e', e)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  handleOnMapClicked(props) {
    // console.log('props', props)
    if(this.state.showingInfoWindow) {
      console.log('this.state.showingInfoWindow', this.state.showingInfoWindow) 
      this.setState({ showingInfoWindow: false, activeMarker: null })
    }
  }

  render() { 
    const style = {
      width: '50%',
      height: '50%'
    }
    
    return ( 
      <div>
        <p>Map 1 this will show location and marker tootip hospital info </p>
        
        <Map google={ this.props.google } 
             onClick={ () => this.handleOnMapClicked() }
             zoom={ 14 }
             style={style}
             initialCenter={ { lat: 32.7773293, lng: -96.7963455 } }   // <- INTI START POINT OF MAP LOCATION VIEW
        >   
          <Marker
            onClick={ this.handleOnMarkerClick }
            title={'The marker`s title will appear as a tooltip.'}
            name={'Dallas Area1'}
            position={ { lat: 32.7773293, lng: -96.7963455 } } />
            
          <Marker
            onClick={ this.handleOnMarkerClick }
            title={'The marker`s title will appear as a tooltip.'}
            name={'Dallas Area2'}
            position={ { lat: 32.5773293, lng: -96.7963455 } } />
          
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
          
          <AutoCompleteMap/>
        </Map>
      </div>
     );
  }
}
 
export default GoogleApiWrapper( { apiKey: `${GOOGLE_MAP_KEY}` } )(MapContainer);