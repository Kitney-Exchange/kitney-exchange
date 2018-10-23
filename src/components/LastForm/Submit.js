import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { connect } from "react-redux";
import { getProfiles } from "../../dux/reducer";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import "./Submit.css";
import { withSwalInstance } from "sweetalert2-react";
import swal from "sweetalert2";
import axios from "axios";
import { Parallax, Background } from "react-parallax";
import ivy from "../../images/ivy.jpeg";

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
      d_history: "",
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
      this.setState({
        d_name: profile[profile.length - 1].donor_name,
        d_email: profile[profile.length - 1].donor_email,
        d_dob: profile[profile.length - 1].donor_dob,
        d_age: profile[profile.length - 1].donor_age,
        d_weight: profile[profile.length - 1].donor_weight,
        d_height: profile[profile.length - 1].donor_height,
        d_history: profile[profile.length - 1].donor_history,
        d_blood_type: profile[profile.length - 1].donor_blood_type,
        r_name: profile[profile.length - 1].recipient_name,
        r_email: profile[profile.length - 1].recipient_email,
        r_dob: profile[profile.length - 1].recipient_dob,
        r_age: profile[profile.length - 1].recipient_age,
        r_weight: profile[profile.length - 1].recipient_weight,
        r_height: profile[profile.length - 1].recipient_height,
        r_history: profile[profile.length - 1].recipient_history,
        r_blood_type: profile[profile.length - 1].recipient_blood_type,
        r_dialysis: profile[profile.length - 1].recipient_dialysis
      });
    }
  };

  handleChange = e => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSave = id => {
    axios
      .put("/api/profile", {
        hospital_1: null,
        hospital_2: null,
        hospital_3: null,
        recipient_name: this.state.r_name,
        recipient_dob: this.state.r_dob,
        recipient_age: this.state.r_age,
        recipient_weight: this.state.r_weight,
        recipient_height: this.state.r_height,
        recipient_history: this.state.r_history,
        recipient_dialysis: this.state.r_dialysis,
        recipient_blood_type: this.state.r_blood_type,
        donor_name: this.state.d_name,
        donor_dob: this.state.d_dob,
        donor_age: this.state.d_age,
        donor_weight: this.state.d_weight,
        donor_height: this.state.d_height,
        donor_history: this.state.d_history,
        donor_blood_type: this.state.d_blood_type,
        pair_id: 18,
        donor_email: this.state.d_email,
        recipient_email: this.state.r_email
      })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);

    // console.log(this.state.user.pair_id);
    return (
      <div className="register-page">
        <div className="submit-navbar">
          <Navbar />
        </div>
        <div className="formbox">
          <div className="information-box">
            {/* <div className="progressbar">
            <ul id="progressbar">
              <li className="active">Preliminary Questions</li>
              <li>Recipient Information</li>
              <li>Donor Information</li>
              <li>Submit</li>
            </ul>
          </div> */}
            <Parallax
              id="info-box"
              bgImage={ivy}
              bgImageAlt="plant"
              strength={350}
            >
              <p id="info-text">
                Please review and confirm all of information submitted.
                <br />
                Once you click submit, you will have to request a change through
                email.
                <div style={{ height: "500px" }} />
              </p>
            </Parallax>
            {/* <p id="submit-info">
              Please review and confirm all of information submitted.
              <br />
              Once you click submit, you will have to request a change through
              email.
            </p> */}
          </div>
          <div className="submit-formbox-questions">
            <Form id="submit-form">
              <h2 id="submit-title">Donor Information</h2>
              <FormGroup id="formgroup" row>
                <Label for="q1" sm={2}>
                  Full Name
                </Label>
                <Col sm={8}>
                  <Input
                    name="d_name"
                    id="editinputsubmit"
                    defaultValue={this.state.d_name}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup id="formgroup" row>
                <Label for="q2" sm={2}>
                  Age
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="d_age"
                    defaultValue={this.state.d_age}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup id="formgroup" row>
                <Label for="q3" sm={2}>
                  Height
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="d_height"
                    defaultValue={this.state.d_height}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup id="formgroup" row>
                <Label for="q4" sm={2}>
                  Weight
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="d_weight"
                    defaultValue={this.state.d_weight}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup id="formgroup" row>
                <Label for="q5" sm={2}>
                  Date of Birth
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="d_dob"
                    defaultValue={this.state.d_dob}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup id="formgroup" row>
                <Label for="q6" sm={2}>
                  Blood Type
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="d_blood_type"
                    defaultValue={this.state.d_blood_type}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup id="formgroup" row>
                <Label for="q7" sm={2}>
                  Medical History
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="d_history"
                    defaultValue={this.state.d_history}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup id="formgroup" row>
                <Label for="q8" sm={2}>
                  Email
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="d_email"
                    defaultValue={this.state.d_email}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>

              <h2 id="submit-title">Recipient Information</h2>
              <FormGroup id="formgroup" row>
                <Label for="q9" sm={2}>
                  Name
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="r_name"
                    defaultValue={this.state.r_name}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup id="formgroup" row>
                <Label for="q10" sm={2}>
                  Age
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="r_age"
                    defaultValue={this.state.r_age}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup id="formgroup" row>
                <Label for="q11" sm={2}>
                  Height
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="r_height"
                    defaultValue={this.state.r_height}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup id="formgroup" row>
                <Label for="q12" sm={2}>
                  Weight
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="r_weight"
                    defaultValue={this.state.r_weight}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup id="formgroup" row>
                <Label for="q13" sm={2}>
                  Date of Birth
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="r_dob"
                    defaultValue={this.state.r_dob}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup id="formgroup" row>
                <Label for="q14" sm={2}>
                  Blood Type
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="r_blood_type"
                    defaultValue={this.state.r_blood_type}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup id="formgroup" row>
                <Label for="q15" sm={2}>
                  Medical History
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="r_history"
                    defaultValue={this.state.r_history}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup id="formgroup" row>
                <Label for="q16" sm={2}>
                  Email
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="r_email"
                    defaultValue={this.state.r_email}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup id="formgroup" row>
                <Label for="q17" sm={2}>
                  Years of Dialysis
                </Label>
                <Col sm={8}>
                  <Input
                    id="editinputsubmit"
                    name="r_dialysis"
                    defaultValue={this.state.r_dialysis}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
            </Form>
            <div className="submit-button">
              <Button
                id="bootstrap-button"
                outline
                color="secondary"
                onClick={() => {
                  this.handleSave();
                  this.setState({ show: true });
                }}
              >
                Submit
              </Button>
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
      // </div>
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
