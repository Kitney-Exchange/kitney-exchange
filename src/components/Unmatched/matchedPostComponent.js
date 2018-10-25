import React, {Component} from 'react';
import axios from 'axios';

class MatchedPostComponent extends Component {
    constructor(props) {
    super(props);
    this.state = {
        batch_id: '',
        profiles: '',
        hospital_id: '',
        potential_matches: '',
        date: ''
        }
    }

    handleChange = e => {
        console.log(e.target.value);
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });
      };

    confirmMatches = () => {
        axios.post('/api/matched', {profiles: this.state.profiles, hospital: this.state.hospital_id, date: this.state.date})
        .then(alert('Pair added!'))
        .then(err=> console.log(err));
    }
    resetForm = () => {
        this.setState({batch_id: '',
        profiles: '',
        hospital_id: '',
        potential_matches: '',
        date: ''})
    }

render() {
    console.log(this.state)
return (
      <div> 
          <h1>Matched Set</h1>
          <div>
          <input id="editinput" placeholder="Hospital ID" name="hospital_id" onChange={(e)=> this.handleChange(e)} /><br/>
          <input id="editinput" placeholder="Date" name="date" onChange={(e)=> this.handleChange(e)} /><br/>
          <input id="editinput" placeholder="Potential Matches" name="potential_matches" onChange={(e)=> this.handleChange(e)} /><br/>
          <button onClick={this.confirmMatches}>Confirm</button> <button onClick={this.resetForm}>Decline</button>
          </div>
    </div>
       )

 }
}
export default MatchedPostComponent;