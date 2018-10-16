import React, { Component } from "react";
import Firebase from "../Firebase/Firebase";
import MapContainer from "../googleMapTest/MapContainer";

class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Firebase />
        <MapContainer />
      </div>
    );
  }
}

export default Register;
