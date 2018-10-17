import React, { Component } from "react";
import Firebase from "../Firebase/Firebase";
import MapContainer from "../googleMapTest/MapContainer";
import { Button, FormGroup, Label, Input } from "reactstrap";
import Navbar from "../Navbar/Navbar";

class DonorForm extends Component {
  constructor(props) {
    super(props);
  }
  //donor will fill information
  render() {
    return (
      <div>
        <Navbar />
        <Firebase />
        <MapContainer />
      </div>
    );
  }
}
export default DonorForm;
