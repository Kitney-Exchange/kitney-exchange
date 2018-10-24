import React, {Component} from 'react';
import axios from 'axios';

class MatchedPostComponent extends Component {
    constructor(props) {
    super(props);
    this.state = {
        batch_id: '',
        profiles: '',
        hospital_id: '',
        potential_matches: ''
        }
    }

    handleChange = e => {
        console.log(e.target.value);
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });
      };

render() {
    console.log(this.state)
return (
      <div> 
          <h1>Matched Set</h1>
          <div>
          <input id="editinput" placeholder="Hospital ID" name="hospital_id" onChange={(e)=> this.handleChange(e)} /><br/>
          <input id="editinput" placeholder="Date" name="date" onChange={(e)=> this.handleChange(e)} /><br/>
          <input id="editinput" placeholder="Potential Matches" name="potential_matches" onChange={(e)=> this.handleChange(e)} /><br/>
          <button>Confirm</button> <button>Decline</button>
          </div>
    </div>
       )

 }
}
export default MatchedPostComponent;