import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Button, FormGroup, Label, Input } from "reactstrap";
import "./Register.css";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eligiblestatus: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e === "no") {
      this.setState({ eligiblestatus: "ineligible" });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="register-page">
        <Navbar />
        <div className="formbox">
          <div className="information-box">
            <p id="info-text">
              Welcome!
              <br />
              You will be registering as a pair.
              <br />
              Before we start, we need to see if the donor is eligible for
              donation. It is our priority to provide a safe environment for
              you.
            </p>
          </div>
          <div className="prelim-questions">
            <div className="prelim1">
              <FormGroup
                id="formgroup"
                tag="fieldset"
                onChange={e => this.handleChange(e)}
              >
                <p>Have you been screened by the hospital?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim1">
              <FormGroup id="formgroup" tag="fieldset">
                <p>
                  Have you ever been diagnosed with any of the following kidney
                  diseases?
                </p>
                <br />• Polycystic Kidney Disease (PKD)
                <br />• IgA nephropathy
                <br />• Lupus Nephritis
                <br />• Glomerulonephritis
                <br />
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim2">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Have you ever had a heart attack?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim3">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Do you have diabetes or high blood sugar?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim4">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Have you ever been diagnosed with cancer?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim5">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Have you ever used tobacco products?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim6">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Have you ever been diagnosed with kidney stones?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim7">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Have you ever been pregnant?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim8">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Do you have a history of HIV?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
          </div>
        </div>
        <Link to="/RecipientForm">
          <Button outline color="success">
            Submit
          </Button>
        </Link>
      </div>
    );
  }
}

export default Register;
