import React, { Component } from "react";

import { Button, Label, Input, Col, Form, FormGroup } from "reactstrap";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Parallax, Background } from "react-parallax";
import ivy from "../../images/ivy.jpeg";
import "./RecipientForm.css";

class RecipientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r_name: "",
      r_email: "",
      r_dob: "",
      r_age: "",
      r_weight: "",
      r_height: "",
      r_history: "",
      r_blood_type: "",
      r_dialysis: ""
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="donorform">
          <Navbar />
          <div className="donor-formbox">
            <div className="info-box">
              <Parallax
                id="info-box"
                bgImage={ivy}
                bgImageAlt="plant"
                strength={350}
              >
                <p id="info-text">
                  Recipient Form
                  {/* It is our priority to provide a safe environment for
                you. */}
                  <div style={{ height: "500px" }} />
                </p>
              </Parallax>
            </div>
            <div className="formbox-questions">
              <Form id="formbox-questions">
                <FormGroup row>
                  <Label id="label" for="q1" sm={2}>
                    Full Name
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="name"
                      name="name"
                      id="nameinput"
                      placeholder=""
                      onChange={e => this.setState({ r_name: e.target.value })}
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
                      onChange={e => this.setState({ r_email: e.target.value })}
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
                      onChange={e => this.setState({ r_dob: e.target.value })}
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
                      onChange={e => this.setState({ r_age: e.target.value })}
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
                      onChange={e =>
                        this.setState({ r_weight: e.target.value })
                      }
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
                      onChange={e =>
                        this.setState({ r_height: e.target.value })
                      }
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
                      onChange={e =>
                        this.setState({ r_history: e.target.value })
                      }
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
                        this.setState({ r_blood_type: e.target.value })
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
                        this.setState({ r_dialysis: e.target.value })
                      }
                    />
                  </Col>
                </FormGroup>
              </Form>
              <div className="recipient-button">
                <Link
                  to={{
                    pathname: "/DonorForm",
                    state: { recipient: this.state }
                  }}
                >
                  <Button>Next</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RecipientForm;
