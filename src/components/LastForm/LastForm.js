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
import { connect } from "react-redux";
import { getHospitals, getProfiles } from "../../dux/reducer";

class LastForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospital1: "",
      hospital2: "",
      hospital3: "",
      pair_id: ""
    };
  }

  componentDidMount() {
    this.props.getHospitals();
    this.props.getProfiles();
    setTimeout(this.stateSetter, 2000);
  }

  stateSetter = () => {
    const { profile } = this.props;
    if (profile) {
      this.setState({ pair_id: profile[profile.length - 1].pair_id });
    }
  };

  hospitalDisplay = () => {
    const {hospital1, hospital2, hospital3} = this.state;
    if (hospital3) {
      return (<div>
      <div>Choice 1: {hospital1.hospital_name}</div>
      <div>Choice 2: {hospital2.hospital_name}</div>
      <div>Choice 3: {hospital3.hospital_name}</div>
      </div>)}
    else if (hospital2) {
      return <div>
        <div>Choice 1: {hospital1.hospital_name}</div>
    <div>Choice 2: {hospital2.hospital_name}</div> 
        </div>}
    else if (hospital1) {
      return <div>
        <div>Choice 1: {hospital1.hospital_name}</div>
      </div>
    }
    else return null;
    }

  saveHospital = () => {
    
  }


  render() {
    console.log(this.state);
    return (
      <div className="register-page">
        <Navbar />
        <div className="formbox">
          <div className="lastform-information-box">
            <p>
              Please upload medical files that can help build up your portfolio.
            </p>
            <div className="firebase-box">
              <Firebase pair_id={this.state.pair_id} />
            </div>
            <div className="hospital-mapbox">
              <p>Please choose 3 potential hospitals for the procedure.</p>
              <MapContainer />
            </div>
            <div className="submit-button">
              <Link to="/Submit">
                <Button id="bootstrap-button" outline color="secondary">
                  Submit
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <footer>
          <ul>
            <li>Kitney Exchange</li>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Admin</li>
          </ul>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};
export default connect(
  mapStateToProps,
  { getHospitals, getProfiles }
)(LastForm);
