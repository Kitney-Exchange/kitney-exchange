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
      <div className="donorform">
        <Navbar />
        <div className="formbox">
          <div className="information-box">Welcome</div>

          <div className="form-question1" />
        </div>

        {/* <Firebase />
        <MapContainer /> */}
      </div>
    );
  }
}
export default DonorForm;
