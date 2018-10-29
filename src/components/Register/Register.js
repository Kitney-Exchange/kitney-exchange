import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { Parallax, Background } from "react-parallax";
import "./Register.css";
import { Link } from "react-router-dom";
import plants from "../../images/plants.jpeg";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screened: "",
      kidney: "",
      heartAttack: "",
      bloodSugar: "",
      cancer: "",
      tobacco: "",
      kidneyStones: "",
      pregnant: "",
      HIV: false,
      accepted: ""
    };
  }

  handleChange = (e, val) => {
    console.log(e);
    this.setState({ [e]: val });
  };

  isAccepted = () => {
    console.log(Object.values(this.state)[0]);
    if (
      this.state.screened === false &&
      this.state.kidney === false &&
      this.state.heartAttack === false &&
      this.state.bloodSugar === false &&
      this.state.cancer === false &&
      this.state.tobacco === false &&
      this.state.kidneyStones === false &&
      this.state.pregnant === false &&
      this.state.HIV === false
    ) {
      console.log("hi buddy");
      return this.setState({ accepted: "true" });
    } else this.setState({ accepted: "not yet" });
  };

  render() {
    console.log(this.state);
    return (
      <div className="register-page" id="main">
        <Navbar />
        <div className="formbox">
          <div className="information-box">
            <Parallax
              id="information-box"
              bgImage={plants}
              bgImageAlt="plant"
              strength={300}
            >
              <p id="info-text">
                You will be registering as a pair.
                <br />
                Before we start, we need to see if the donor is eligible for
                donation.
                <div style={{ height: "400px" }} />
              </p>
            </Parallax>

            {/* <p id="info-text">
              You will be registering as a pair.
              <br />
              Before we start, we need to see if the donor is eligible for
              donation. It is our priority to provide a safe environment for
              you.
            </p> */}
          </div>
          <div className="prelim-questions">
            <div className="prelim">
              <FormGroup id="formgroup1" tag="fieldset">
                <p>Have you been screened by the hospital?</p>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio"
                      value="screened"
                      onClick={e => {
                        this.handleChange(e.target.value, false);
                        this.isAccepted();
                      }}
                    />
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio"
                      value="screened"
                      onClick={e => {
                        this.handleChange(e.target.value, true);
                        this.isAccepted();
                      }}
                    />
                    No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim1">
              <FormGroup id="formgroup1" tag="fieldset">
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
                    <Input
                      type="radio"
                      name="radio1"
                      value="kidney"
                      onClick={e => {
                        this.handleChange(e.target.value, true);
                        this.isAccepted();
                      }}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      value="kidney"
                      onClick={e => {
                        this.handleChange(e.target.value, false);
                        this.isAccepted();
                      }}
                    />{" "}
                    No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim2">
              <FormGroup id="formgroup1" tag="fieldset">
                <p>Have you ever had a heart attack?</p>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio2"
                      value="heartAttack"
                      onClick={e => {
                        this.handleChange(e.target.value, true);
                        this.isAccepted();
                      }}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio2"
                      value="heartAttack"
                      onClick={e => {
                        this.handleChange(e.target.value, false);
                        this.isAccepted();
                      }}
                    />{" "}
                    No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim3">
              <FormGroup id="formgroup1" tag="fieldset">
                <p>Do you have diabetes or high blood sugar?</p>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio3"
                      value="bloodSugar"
                      onClick={e => {
                        this.handleChange(e.target.value, true);
                        this.isAccepted();
                      }}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio3"
                      value="bloodSugar"
                      onClick={e => {
                        {
                          this.handleChange(e.target.value, false);
                          this.isAccepted();
                        }
                        this.isAccepted();
                      }}
                    />{" "}
                    No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim4">
              <FormGroup id="formgroup1" tag="fieldset">
                <p>Have you ever been diagnosed with cancer?</p>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio4"
                      value="cancer"
                      onClick={e => {
                        this.handleChange(e.target.value, true);
                        this.isAccepted();
                      }}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio4"
                      value="cancer"
                      onClick={e => {
                        this.handleChange(e.target.value, false);
                        this.isAccepted();
                      }}
                    />{" "}
                    No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim5">
              <FormGroup id="formgroup1" tag="fieldset">
                <p>Have you ever used tobacco products?</p>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio5"
                      value="tobacco"
                      onClick={e => {
                        this.handleChange(e.target.value, true);
                        this.isAccepted();
                      }}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio5"
                      value="tobacco"
                      onClick={e => {
                        this.handleChange(e.target.value, false);
                        this.isAccepted();
                      }}
                    />{" "}
                    No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim6">
              <FormGroup id="formgroup1" tag="fieldset">
                <p>Have you ever been diagnosed with kidney stones?</p>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio6"
                      value="kidneyStones"
                      onClick={e => {
                        this.handleChange(e.target.value, true);
                        this.isAccepted();
                      }}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio6"
                      value="kidneyStones"
                      onClick={e => {
                        this.handleChange(e.target.value, false);
                        this.isAccepted();
                      }}
                    />{" "}
                    No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim7">
              <FormGroup id="formgroup1" tag="fieldset">
                <p>Are you pregnant?</p>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio7"
                      value="pregnant"
                      onClick={e => {
                        this.handleChange(e.target.value, true);
                        this.isAccepted();
                      }}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio7"
                      value="pregnant"
                      onClick={e => {
                        this.handleChange(e.target.value, false);
                        this.isAccepted();
                      }}
                    />{" "}
                    No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim8">
              <FormGroup id="formgroup1" tag="fieldset">
                <p>Do you have a history of HIV?</p>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio8"
                      value="HIV"
                      onClick={e => {
                        this.handleChange(e.target.value, true);
                        this.isAccepted();
                      }}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio8"
                      value="HIV"
                      onClick={e => {
                        this.handleChange(e.target.value, false);
                        this.isAccepted();
                      }}
                    />{" "}
                    No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <center onClick={() => this.isAccepted()}>
              <Link to={`/RegisterSubmit/:${this.state.accepted}`}>
                <Button id="bootstrap-button" outline color="secondary">
                  Submit
                </Button>
              </Link>
              <br />
            </center>
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

export default Register;
