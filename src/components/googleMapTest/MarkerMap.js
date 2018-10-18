import React, {Component} from 'react';
import {Marker} from "google-maps-react";

export default class MarkerMap extends Component {

    handleOnMarkerClick(props, marker, e) {
        // console.log("props", props);
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
      }

    render() {
    // console.log(this.props)
    return (
    this.props.hospitals.map((e, i) => {console.log(); return <Marker
        onClick={this.props.handleOnMarkerClick}
        title={e.hospital_name}
        name={e.hospital_name}
        position={{ lat: `${e.lat}`, lng: `${e.long}` }}
    />})
    )
}
}