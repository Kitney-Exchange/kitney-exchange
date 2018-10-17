import React, { Component } from "react";
import { connect } from "react-redux";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import AutoCompleteMap from "./AutoCompleteMap";
import { getHospitals } from "../../dux/reducer";

const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      hospitalName: [],
      positionLat: [],
      positionLong: [],
      style: { width: "40%", height: "40%" }
    };
    this.handleOnMarkerClick = this.handleOnMarkerClick.bind(this);
  }

  componentDidMount() {
    this.props.getHospitals();
    this.gimmeName();
  }

  handleOnMarkerClick(props, marker, e) {
    // console.log("props", props);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  handleOnMapClicked(props) {
    // console.log('props', props)
    if (this.state.showingInfoWindow) {
      this.setState({ showingInfoWindow: false, activeMarker: null });
    }
  }

  // LOOP THROUGH HOSPITAL DATA AND STORE LOCAL STATE TO DISPLAY INFO
  gimmeName = () => {
    setTimeout( () => {
      // console.log('this.props.hospitals', this.props.hospitals)
      let positionLat = []
      if (this.props.hospitals) {
        this.props.hospitals.map((value, index) => {
          // console.log('VALUE: ', value)
          this.state.hospitalName.push(value.hospital_name) 
          positionLat.push(value.lat) 
          this.state.positionLong.push(value.long)
        })
        this.setState({ positionLat: positionLat })
      }
    }, 1000);
  }

  render() {
    let { positionLat, positionLong } = this.state

    return (
      <div>
        <p>Map 1 this will show location and marker tootip hospital info </p>

        <Map
          google={ this.props.google }
          onClick={ () => this.handleOnMapClicked() }
          zoom={ 10 }
          style={ this.state.style }
          initialCenter={ { lat: 32.7773293, lng: -96.7963455 } } // <- INTI START POINT OF MAP LOCATION VIEW
        >
          <Marker
            onClick={ this.handleOnMarkerClick }
            title={ this.state.hospitalName[0] }
            name={ this.state.hospitalName[0] }
            position={ {lat: `${ positionLat[0] }`, lng: `${ positionLong[0] }`} }
          />

          <Marker
            onClick={ this.handleOnMarkerClick }
            title={ this.state.hospitalName[1] }
            name={ this.state.hospitalName[1] }
            position={ { lat:`${ positionLat[1] }`,  lng: `${ positionLong[1] }` } }
          />

          <Marker
            onClick={ this.handleOnMarkerClick }
            title={ this.state.hospitalName[2] }
            name={ this.state.hospitalName[2] }
            position={ { lat: `${ positionLat[2] }`, lng: `${ positionLong[2] }` } }
          />

          <InfoWindow
            marker={ this.state.activeMarker }
            visible={ this.state.showingInfoWindow }
          >
            <div>
              <h1>{ this.state.selectedPlace.name }</h1>
            </div>
          </InfoWindow>

          <AutoCompleteMap />
        </Map>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(
  mapStateToProps,
  { getHospitals }
)(GoogleApiWrapper({ apiKey: `${GOOGLE_MAP_KEY}` })(MapContainer));
