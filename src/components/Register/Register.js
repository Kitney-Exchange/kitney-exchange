import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Button, FormGroup, Label, Input } from "reactstrap";
import "./Register.css";
import { Link, Redirect } from "react-router-dom";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screened: false,
      kidney: false,
      heartAttack: false,
      bloodSugar: false,
      cancer: false,
      tobacco: false,
      kidneyStones: false,
      pregnant: false,
      HIV: false,
      accepted: ''
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.accepted === 'true'){
      return null
    }
    if (this.state !== prevState){
    return this.isAccepted();}
  }

  handleChange = (e, val) => {
    console.log(e)
      this.setState({[e]: val});
  }

  isAccepted = () => {
    console.log(Object.values(this.state)[0])
    for (let i = 0; i < 9; i++)
      if (Object.values(this.state)[i] === true){
        console.log('hi buddy')
        return this.setState({accepted: 'true'})
      }
    else { this.setState({accepted: ''})}
    
  }

  render() {
    console.log(this.state)
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
            {/* <div className="prelim">
              <form>
                <input type="radio" name="yes" value="yes" />
                Yes
                <input type="radio" name="yes" value="no" />
                No
              </form>
            </div> */}
            <div className="prelim">
              <FormGroup
                id="formgroup"
                tag="fieldset"
                // onChange={e => this.handleChange(e)}
              >
                <p>Have you been screened by the hospital?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio" value="screened" onClick={(e) => this.handleChange(e.target.value, false)}/> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio" value="screened" onClick={(e) => this.handleChange(e.target.value, true)}/> No
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
                    <Input type="radio" name="radio1" value="kidney" onClick={(e) => this.handleChange(e.target.value, true)} /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" value="kidney" onClick={(e) => this.handleChange(e.target.value, false)} /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim2">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Have you ever had a heart attack?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" value="heartAttack" onClick={(e) => this.handleChange(e.target.value, true)} /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" value="heartAttack" onClick={(e) => this.handleChange(e.target.value, false)}  /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim3">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Do you have diabetes or high blood sugar?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio3" value="bloodSugar" onClick={(e) => this.handleChange(e.target.value, true)} /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio3" value="bloodSugar" onClick={(e) => this.handleChange(e.target.value, false)} /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim4">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Have you ever been diagnosed with cancer?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio4" value="cancer" onClick={(e) => this.handleChange(e.target.value, true)}  /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio4" value="cancer" onClick={(e) => this.handleChange(e.target.value, false)}  /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim5">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Have you ever used tobacco products?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio5" value="tobacco" onClick={(e) => this.handleChange(e.target.value, true)}  /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio5" value="tobacco" onClick={(e) => this.handleChange(e.target.value, false)}  /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim6">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Have you ever been diagnosed with kidney stones?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio6" value="kidneyStones" onClick={(e) => this.handleChange(e.target.value, true)}  /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio6" value="kidneyStones" onClick={(e) => this.handleChange(e.target.value, false)}  /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim7">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Are you pregnant?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio7" value="pregnant" onClick={(e) => this.handleChange(e.target.value, true)}  /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio7" value="pregnant" onClick={(e) => this.handleChange(e.target.value, false)}  /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="prelim8">
              <FormGroup id="formgroup" tag="fieldset">
                <p>Do you have a history of HIV?</p>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio8" value="HIV" onClick={(e) => this.handleChange(e.target.value, true)} /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio8" value="HIV" onClick={(e) => this.handleChange(e.target.value, false)} /> No
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
          </div>
        </div>
        <center onClick={()=> this.isAccepted()}>
        <Link to={`/RegisterSubmit/:${this.state.accepted}`}>
            <Button outline color="success">
            Submit
          </Button>
        </Link><br/>
        </center>
      </div>
    );
  }
}

export default Register;
