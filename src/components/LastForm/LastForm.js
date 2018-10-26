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
              <Link to={{
                    pathname: "/Submit",
                    state: this.state
                  }}>
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
