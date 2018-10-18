import React, { Component } from "react";
import axios from "axios";

import { Button, Label, Input, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

class DonorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d_name: "",
      d_email: "",
      d_dob: "",
      d_age: "",
      d_weight: "",
      d_height: "",
      d_histody: "",
      d_blood_type: ""
    };
  }

  handleSubmit = () => {
    const { recipient } = this.props.location.state;
    console.log(recipient);
    axios.post("/api/profile", {
      hospital_1: null,
      hospital_2: null,
      hospital_3: null,
      recipient_name: recipient.r_name,
      recipient_dob: recipient.r_dob,
      recipient_age: recipient.r_age,
      recipient_weight: recipient.r_weight,
      recipient_height: recipient.r_height,
      recipient_history: recipient.r_history,
      recipient_dialysis: recipient.r_dialysis,
      recipient_blood_type: recipient.r_blood_type,
      donor_name: this.state.d_name,
      donor_dob: this.state.d_dob,
      donor_age: this.state.d_age,
      donor_weight: this.state.d_weight,
      donor_height: this.state.d_height,
      donor_history: this.state.d_history,
      donor_blood_type: this.state.d_blood_type,
      donor_email: recipient.r_email,
      recipient_email: this.state.d_email
    });
  };

  //donor will fill information
  render() {
    console.log(this.state);
    console.log(this.props.location.state);
    return (
      <div className="donorform">
        <Navbar />
        <div className="formbox">
          <div className="information-box">Donor Form</div>
          <div className="formbox-questions">
            <Form>
              <FormGroup row>
                <Label for="q1" sm={2}>
                  Full Name
                </Label>
                <Col sm={8}>
                  <Input
                    type="name"
                    name="name"
                    id="nameinput"
                    placeholder=""
                    onChange={e => this.setState({ d_name: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="q2" sm={2}>
                  Email
                </Label>
                <Col sm={8}>
                  <Input
                    type="email"
                    name="email"
                    id="emailinput"
                    placeholder=""
                    onChange={e => this.setState({ d_email: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="q3" sm={2}>
                  Date of Birth
                </Label>
                <Col sm={8}>
                  <Input
                    type="dob"
                    name="dob"
                    id="dobinput"
                    placeholder=""
                    onChange={e => this.setState({ d_dob: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="q4" sm={2}>
                  Age
                </Label>
                <Col sm={8}>
                  <Input
                    type="age"
                    name="age"
                    id="ageinput"
                    placeholder=""
                    onChange={e => this.setState({ d_age: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="q5" sm={2}>
                  Weight
                </Label>
                <Col sm={8}>
                  <Input
                    type="weight"
                    name="weight"
                    id="weightinput"
                    placeholder=""
                    onChange={e => this.setState({ d_weight: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="q6" sm={2}>
                  Height
                </Label>
                <Col sm={8}>
                  <Input
                    type="height"
                    name="height"
                    id="heightinput"
                    placeholder="example: 5ft10in"
                    onChange={e => this.setState({ d_height: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="q7" sm={2}>
                  Medical History
                </Label>
                <Col sm={8}>
                  <Input
                    type="history"
                    name="history"
                    id="historyinput"
                    placeholder=""
                    onChange={e => this.setState({ d_history: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="q8" sm={2}>
                  Blood Type
                </Label>
                <Col sm={8}>
                  <Input
                    type="bloodtype"
                    name="bloodtype"
                    id="bloodtypeinput"
                    placeholder=""
                    onChange={e =>
                      this.setState({ d_blood_type: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
            </Form>
          </div>
          <div className="donor-button">
            <Link to="/Form">
              <Button
                onClick={e => {
                  this.handleSubmit();
                }}
              >
                Next
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default DonorForm;
