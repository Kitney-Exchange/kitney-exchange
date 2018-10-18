import React, { Component } from "react";
import { connect } from "react-redux";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import AutoCompleteMap from "./AutoCompleteMap";
import { getHospitals } from "../../dux/reducer";
// import MarkerMap from './MarkerMap';

const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      style: { width: "40%", height: "40%" }
    };
    this.handleOnMarkerClick = this.handleOnMarkerClick.bind(this);
  }

  componentDidMount() {
    this.props.getHospitals();
  }

  handleOnMarkerClick(props, marker, e) {
    console.log("props", props);
    console.log("e:", e)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  // <Jordan> Creates Markers for the Google Maps display //
  markerMap = () => {
    return this.props.hospitals.map((e, i) => {
      setTimeout(()=> localStorage.setItem('hospital_id', this.props.hospitals[i].hospital_id), 2000)
      return <Marker
          value={e.hospital_id}
          onClick= {this.handleOnMarkerClick}
          title= {e.hospital_name}
          name= {e.hospital_name}
          position={{ lat: e.lat, lng: e.long }} />}
      )
      
  }
  // </Jordan> //

  handleOnMapClicked(props) {
    // console.log('props', props)
    if (this.state.showingInfoWindow) {
      this.setState({ showingInfoWindow: false, activeMarker: null });
    }
  }

  render() {
    return (
      <div>
        {/* <p>Map 1 this will show location and marker tootip hospital info </p> */}

        <Map
          google={this.props.google}
          onClick={() => this.handleOnMapClicked()}
          zoom={10}
          style={this.state.style}
          initialCenter={{ lat: 32.7773293, lng: -96.7963455 }} // <- INTI START POINT OF MAP LOCATION VIEW
        >
          {this.markerMap()}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              {/* <span>{this.props.hospital[0].hospital_address}</span> */}
              <button>Is this real life?</button>
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
