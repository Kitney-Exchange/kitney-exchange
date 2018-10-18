import React, { Component } from "react";

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
      d_blood_type: "",
      d_dialysis: ""
    };
  }

  //donor will fill information
  render() {
    console.log(this.state);
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
                    placeholder=""
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
              <FormGroup row>
                <Label for="q9" sm={2}>
                  Years of Dialysis Treatment
                </Label>
                <Col sm={8}>
                  <Input
                    type="dialysis"
                    name="dialysis"
                    id="dialysisinput"
                    placeholder=""
                    onChange={e =>
                      this.setState({ d_dialysis: e.target.value })
                    }
                  />
                </Col>
              </FormGroup>
            </Form>
          </div>
          <div className="donor-button">
            <Link to="/Form">
              <Button
              // onClick={e => {
              //   this.addPair();
              // }}
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
