import React, {Component} from 'react';
import axios from 'axios';
import {getMatched} from '../../dux/reducer';
import {connect} from 'react-redux';

class MatchedPostComponent extends Component {
    constructor(props) {
    super(props);
    this.state = {
        batch_id: '',
        profiles: '7,17,20',
        hospital_id: '',
        potential_matches: '',
        date: ''
        }
    }

    componentDidMount(){
        this.props.getMatched();
    }

    handleChange = e => {
        console.log(e.target.value);
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });
      };

    confirmMatches = () => {
        axios.post('/api/matched', {profiles: this.state.profiles, hospital: this.state.hospital_id, date: this.state.date})
        .then(alert('Pair added!'))
        .catch(err=> console.log(err));
    }
    resetForm = () => {
        this.setState({batch_id: '',
        profiles: '',
        hospital_id: '',
        potential_matches: '',
        date: ''})
    }

    updateBatchedTrue = () => {
        const {profiles} = this.state;
        for (let i = 0; i < profiles.length; i++) {
            axios.put('/api/updateBatched', {batch_id: (this.props.matched[this.props.matched.length -1].batch_id), match: true, pair_id: this.state.profiles.split(',')[i]}).then(response => alert('Profiles updated!'))
        }
    }
    updateBatchedFalse = () => {
            const {profiles} = this.state;
            for (let i = 0; i < profiles.length; i++) {
                axios.put('/api/updateBatched', {batch_id: null, match: false, pair_id: this.state.profiles.split(',')[i]}).then(response => alert('Profiles updated!'))
            }
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
          <button onClick={()=> {this.confirmMatches(); this.updateBatchedTrue()}}>Confirm</button> <button onClick={this.resetForm}>Decline</button>
          </div>
    </div>
       )

 }
}

const mapStateToProps = (state) => {
    return {...state}
}
export default connect(mapStateToProps, {getMatched})(MatchedPostComponent);