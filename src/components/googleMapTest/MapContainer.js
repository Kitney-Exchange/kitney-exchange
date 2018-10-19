import React, { Component } from "react";
import { connect } from "react-redux";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import AutoCompleteMap from "./AutoCompleteMap";
import { getHospitals } from "../../dux/reducer";
import './MapContainer.css';


const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;



class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      hospitalChoice: [],
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
      return <Marker
          key={e.hospital_id}
          value={e.hospital_id}
          onClick= {this.handleOnMarkerClick}
          title= {e.hospital_name}
          name= {e.hospital_name}
          position={{ lat: e.lat, lng: e.long }} />}
      )
      
  }

  addButton =(hospital) => {
    console.log('I fired')
    const newFav = [...this.state.hospitalChoice]
    newFav.push(hospital);
    this.setState({hospitalChoice: newFav})
  }

  deleteButton = (hospital) => {    
    const newArr = [...this.state.hospitalChoice]
    const {hospitalChoice} = this.state
    console.log('hospital: ', newArr)
    for (let i = 0; i < hospitalChoice.length; i++){
      console.log(newArr)
      if (hospitalChoice[i] === hospital){
        newArr.splice([i], 1)
        return this.setState({hospitalChoice: newArr})
      }
    }
  }

  displayChosenHospital = (place, addButton, deleteButton) => {
    const {hospitals} = this.props
    for (let i = 0; i < hospitals.length; i++){
      if (place.name === hospitals[i].hospital_name){
        console.log(place)
        return <span><h1>{hospitals[i].hospital_name}</h1><br/>
        {hospitals[i].hospital_address}<br/>
        {hospitals[i].hospital_phone}<br/>
        <div>
          <button onClick={()=> addButton(hospitals[i].hospital_id)}>Add</button><br/>
          </div>
        <div>
          <button onClick={()=> deleteButton(hospitals[i].hospital_id)}>Delete</button>
          </div>
          </span>
  }
}
  }

  // addFavHospital = (hospital) => {

  // }
  
  

  findMyStats = (place) => {
    const {hospitals} = this.props
    for (let i = 0; i < hospitals.length; i++){
      if (place === hospitals[i].hospital_name){
        return <span>{hospitals[i].hospital_address}<br/>
        {hospitals[i].hospital_phone}</span>
      }
  }
}
  // </Jordan> //

  handleOnMapClicked(props) {
    // console.log('props', props)
    if (this.state.showingInfoWindow) {
      this.setState({ showingInfoWindow: false, activeMarker: null });
    }
  }

  render() {
    console.log(this.state.hospitalChoice)
    return (
      <div className="mapDisplay">
        {/* <p>Map 1 this will show location and marker tootip hospital info </p> */}

        <Map
        className="thegooglemap"
          google={this.props.google}
          onClick={() => this.handleOnMapClicked()}
          zoom={10}
          style={this.state.style}
          initialCenter={{ lat: 32.7773293, lng: -96.7963455 }} // <- INTI START POINT OF MAP LOCATION VIEW
        >
          {this.markerMap()}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h2>{this.state.selectedPlace.name}</h2>
              {this.findMyStats(this.state.selectedPlace.name)}
            </div>
          </InfoWindow>
          <AutoCompleteMap /><br/>
          <div>
          {this.displayChosenHospital(this.state.selectedPlace, this.addButton, this.deleteButton)}
          </div>
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
