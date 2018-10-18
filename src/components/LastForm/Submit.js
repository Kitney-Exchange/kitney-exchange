import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { connect } from "react-redux";
import { getProfiles } from "../../dux/reducer";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Submit.css";
import axios from "axios";

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    this.props.getProfiles();
    setTimeout(this.stateSetter, 1000);
  }

  stateSetter = () => {
    const { profile } = this.props;
    if (profile) {
      this.setState({ user: profile[profile.length - 1] });
    }
  };

  //   handleChange(e) {
  //     console.log(e.target.name);
  //     this.setState({});
  //   }
  render() {
    console.log(this.state);
    return (
      <div className="submitpage">
        <div className="submit-navbar">
          <Navbar />
        </div>
        <div className="header-box">
          <p id="info-text">
            Please review and confirm all of information submitted.
            <br />
            Once you click submit, you will have to request a change through
            email.
          </p>
        </div>

        <div className="main-inputbox">
          <p>Donor Information</p>

          <input
            id="editinput"
            type="d_name"
            placeholder={this.state.user.donor_name}
            onChange={this.handleChange}
          />
          <input
            id="editinput"
            type="d_age"
            placeholder={this.state.user.donor_age}
          />
          <input
            id="editinput"
            type="d_height"
            placeholder={this.state.user.donor_height}
          />
          <input
            id="editinput"
            type="d_weight"
            placeholder={this.state.user.donor_weight}
          />
          <input
            id="editinput"
            type="d_dob"
            placeholder={this.state.user.donor_dob}
          />
          <input
            id="editinput"
            type="d_boodtype"
            placeholder={this.state.user.donor_blood_type}
          />
          <input
            id="editinput"
            type="d_history"
            placeholder={this.state.user.donor_history}
          />
          <input
            id="editinput"
            type="d_email"
            placeholder={this.state.user.donor_email}
          />
          <p>Recipient Information</p>

          <input
            id="editinput"
            type="r_name"
            placeholder={this.state.user.recipient_name}
            onChange={this.handleChange}
          />
          <input
            id="editinput"
            type="r_age"
            placeholder={this.state.user.recipient_age}
          />
          <input
            id="editinput"
            type="r_height"
            placeholder={this.state.user.recipient_height}
          />
          <input
            id="editinput"
            type="r_weight"
            placeholder={this.state.user.recipient_weight}
          />
          <input
            id="editinput"
            type="r_dob"
            placeholder={this.state.user.recipient_dob}
          />
          <input
            id="editinput"
            type="r_boodtype"
            placeholder={this.state.user.recipient_blood_type}
          />
          <input
            id="editinput"
            type="r_history"
            placeholder={this.state.user.recipient_history}
          />
          <input
            id="editinput"
            type="r_email"
            placeholder={this.state.user.recipient_email}
          />
        </div>
        <div className="submit-button">
          <Button>Submit</Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { ...state };
};
export default connect(
  mapStateToProps,
  { getProfiles }
)(Submit);
