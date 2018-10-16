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
      style: { width: "50%", height: "50%" }
    };
    this.handleOnMarkerClick = this.handleOnMarkerClick.bind(this);
  }

  componentDidMount() {
    this.props.getHospitals();
    this.gimmeName();
  }

  handleOnMarkerClick(props, marker, e) {
    // console.log("props", props);
    // console.log("marker", marker);
    // console.log("e", e);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  handleOnMapClicked(props) {
    // console.log('props', props)
    if (this.state.showingInfoWindow) {
      console.log("this.state.showingInfoWindow", this.state.showingInfoWindow);
      this.setState({ showingInfoWindow: false, activeMarker: null });
    }
  }

  gimmeName = () => {
    // let { hospitalName, positionLat, positionLong } = this.state;
    setTimeout( () => {
      console.log('this.props.hospitals', this.props.hospitals)
      if (this.props.hospitals) {
        this.props.hospitals.map((value, index) => {
          console.log('VALUE: ', value)
          this.state.hospitalName.push(value.hospital_name) 
          this.state.positionLat.push(value.lat)
          this.state.positionLong.push(value.long)
        })
      }
    }, 1000);
  }

  render() {
    console.log('position', this.state.hospitalName[0])


    return (
      <div>
        <p>Map 1 this will show location and marker tootip hospital info </p>
      
        <Map
          google={ this.props.google }
          onClick={ () => this.handleOnMapClicked() }
          zoom={ 14 }
          style={ this.state.style }
          initialCenter={ { lat: 32.7773293, lng: -96.7963455 } } // <- INTI START POINT OF MAP LOCATION VIEW
        >
          <Marker
            onClick={ this.handleOnMarkerClick }
            title={ this.state.hospitalName[0] }
            name={ this.state.hospitalName[0] }
            position={ {lat: `${this.state.positionLat[0]}`, lng: `${this.state.positionLong[0]}`} }
          />

          <Marker
            onClick={ this.handleOnMarkerClick }
            title={ this.state.hospitalName[1] }
            name={ this.state.hospitalName[1] }
            position={ { lat: 32.8131059,  lng: -96.7963455 } }
          />

          <Marker
            onClick={ this.handleOnMarkerClick }
            title={ this.state.hospitalName[2] }
            name={ this.state.hospitalName[2] }
            position={ { lat: 32.81255950000001, lng: -96.83564209999997 } }
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
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
