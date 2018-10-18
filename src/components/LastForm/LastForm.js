import React, { Component } from "react";
import Firebase from "../Firebase/Firebase";
import MapContainer from "../googleMapTest/MapContainer";
import {
  Button,
  Label,
  Input,
  Col,
  Form,
  FormGroup,
  FormText,
  Container,
  Row
} from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./LastForm.css";

class LastForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospital1: "",
      hospital2: "",
      hospital3: ""
    };
  }

  render() {
    return (
      <div className="lastform">
        <Navbar />
        <div className="formbox">
          <div className="upload-filebox">
            <p>
              Please upload medical files that can help build up your portfolio.
            </p>
            <Firebase />
          </div>
          <div className="hospital-mapbox">
            <p>Please choose 3 potential hospitals for the procedure.</p>
            <MapContainer />
          </div>
        </div>
        <div className="submit-button">
          <Link to="/Submit">
            <Button
            // onClick={e => {
            //   this.addPair();
            // }}
            >
              Submit
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default LastForm;
