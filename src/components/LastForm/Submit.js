import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { connect } from "react-redux";
import { getProfiles } from "../../dux/reducer";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Submit.css";
import { withSwalInstance } from "sweetalert2-react";
import swal from "sweetalert2";
import axios from "axios";

const SweetAlert = withSwalInstance(swal);

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      d_name: "",
      d_email: "",
      d_dob: "",
      d_age: "",
      d_weight: "",
      d_height: "",
      d_histody: "",
      d_blood_type: "",
      r_name: "",
      r_email: "",
      r_dob: "",
      r_age: "",
      r_weight: "",
      r_height: "",
      r_history: "",
      r_blood_type: "",
      r_dialysis: "",
      show: false
    };
  }
  ç;

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

  handleChange = e => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  //   handleSave = id => {
  //     axios.put("/api/profile", id);
  //   };
  render() {
    console.log(this.state);

    // console.log(this.state.user.pair_id);
    return (
      <div className="submitpage">
        <div className="submit-navbar">
          <Navbar />
        </div>

        <div className="header-box">
          <div className="progressbar">
            <ul id="progressbar">
              <li class="active">Preliminary Questions</li>
              <li>Recipient Information</li>
              <li>Donor Information</li>
              <li>Submit</li>
            </ul>
          </div>
          <p id="info-text">
            Please review and confirm all of information submitted.
            <br />
            Once you click submit, you will have to request a change through
            email.
          </p>
        </div>

        <div className="main-inputbox">
          <h2>Donor Information</h2>
          <div className="inputbox">
            <p>Name</p>
            <input
              name="d_name"
              id="editinput"
              defaultValue={this.state.user.donor_name}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Age</p>
            <input
              id="editinput"
              name="d_age"
              defaultValue={this.state.user.donor_age}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Height</p>
            <input
              id="editinput"
              name="d_height"
              defaultValue={this.state.user.donor_height}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Weight</p>
            <input
              id="editinput"
              name="d_weight"
              defaultValue={this.state.user.donor_weight}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Date of Birth</p>
            <input
              id="editinput"
              name="d_dob"
              defaultValue={this.state.user.donor_dob}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Blood Type</p>
            <input
              id="editinput"
              name="d_blood_type"
              defaultValue={this.state.user.donor_blood_type}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Medical History</p>
            <input
              id="editinput"
              name="d_history"
              defaultValue={this.state.user.donor_history}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Email</p>
            <input
              id="editinput"
              name="d_email"
              defaultValue={this.state.user.donor_email}
              onChange={this.handleChange}
            />
          </div>

          <h2>Recipient Information</h2>
          <div className="inputbox">
            <p>Name</p>
            <input
              id="editinput"
              name="r_name"
              defaultValue={this.state.user.recipient_name}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Age</p>
            <input
              id="editinput"
              name="r_age"
              defaultValue={this.state.user.recipient_age}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Height</p>
            <input
              id="editinput"
              name="r_height"
              defaultValue={this.state.user.recipient_height}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Weight</p>
            <input
              id="editinput"
              name="r_weight"
              defaultValue={this.state.user.recipient_weight}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Date of Birth</p>
            <input
              id="editinput"
              name="r_dob"
              defaultValue={this.state.user.recipient_dob}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Blood Type</p>
            <input
              id="editinput"
              name="r_blood_type"
              defaultValue={this.state.user.recipient_blood_type}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Medical History</p>
            <input
              id="editinput"
              name="r_history"
              defaultValue={this.state.user.recipient_history}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Email</p>
            <input
              id="editinput"
              name="r_email"
              defaultValue={this.state.user.recipient_email}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <p>Years Of Dialysis</p>
            <input
              id="editinput"
              name="r_dialysis"
              defaultValue={this.state.user.recipient_dialysis}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="submit-button">
          <button
            onClick={() => {
              this.setState({ show: true });
            }}
          >
            {/* <button onClick={() => this.handleSave(this.state.user.pair_id)}> */}
            Submit
          </button>
          <SweetAlert
            show={this.state.show}
            confirmButtonColor="#b9decc"
            title="Thank you for applying!"
            text="Please wait shortly for a confirmation email."
            onConfirm={() => {
              this.setState({ show: false });
            }}
          />
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
