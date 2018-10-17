import React, { Component } from "react";
import Firebase from "../Firebase/Firebase";
import MapContainer from "../googleMapTest/MapContainer";
import { Button, FormGroup, Label, Input } from "reactstrap";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

class RecipientForm extends Component {
  constructor(props) {
    super(props);
  }
  //recipient will fill information
  render() {
    return (
      <div>
        <div className="donorform">
          <Navbar />
          <div className="formbox">
            <div className="information-box">Welcome</div>

            <div className="form-question1" />
          </div>

          {/* <Firebase />
        <MapContainer /> */}
          <Link to="/DonorForm">
            <Button outline color="success">
              Next
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default RecipientForm;
