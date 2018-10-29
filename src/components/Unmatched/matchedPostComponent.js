import React, { Component } from "react";
import axios from "axios";
import { getMatched } from "../../dux/reducer";
import { connect } from "react-redux";
import "./matchedPostComponent.css";

class MatchedPostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batch_id: "",
      profiles: "7,17,20",
      hospital_id: "",
      potential_matches: "",
      date: "",
      emailProfilesData: [],
      subject: 'Kitney Exchange Confirmation Email' 
    };
  }

  componentDidMount() {
    this.props.getMatched();
    
  }
  componentDidUpdate() {
    
      this.sendConfirmMatchesEmail()
 
  }

  handleChange = e => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  confirmMatches = () => {
    axios
      .post("/api/matched", {
        profiles: this.state.profiles,
        hospital: this.state.hospital_id,
        date: this.state.date
      })
      .then(alert("Pair added!"))
      .catch(err => console.log(err));
  };
  
  resetForm = () => {
    this.setState({
      batch_id: "",
      profiles: "",
      hospital_id: "",
      potential_matches: "",
      date: ""
    });
  };

  updateBatchedTrue = () => {
    const { profiles } = this.state;
    for (let i = 0; i < profiles.length; i++) {
      axios
        .put("/api/updateBatched", {
          batch_id: this.props.matched[this.props.matched.length - 1].batch_id,
          match: true,
          pair_id: this.state.profiles.split(",")[i]
        })
        .then(response => alert("Profiles updated!"));
    }
  };

  updateBatchedFalse = () => {
    const { profiles } = this.state;
    for (let i = 0; i < profiles.length; i++) {
      axios
        .put("/api/updateBatched", {
          batch_id: null,
          match: false,
          pair_id: this.state.profiles.split(",")[i]
        })
        .then(response => alert("Profiles updated!"));
    }
  };

  sendConfirmMatchesEmail() {
    let { emailProfilesData, subject } = this.state
    let to = []
    let pair_id = []
    let name = []
    console.log('emailProfilesData: ', emailProfilesData);
    for(let i = 0; i < emailProfilesData.length; i++) {
      console.log('emailProfilesData:', emailProfilesData[i])
      console.log(emailProfilesData[i].pair_id, emailProfilesData[i].donor_name);
      pair_id.push(emailProfilesData[i].pair_id)
      name.push(emailProfilesData[i].donor_name)
      to.push(emailProfilesData[i].donor_email)
    }
    
    axios.post('/api/confirmation', { to, pair_id, name, subject } )
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log('Danger!', error)
    })

  };

  //// extent data from prop and state for confirm email function ////

  matchedProfiles() {
    let { profile } = this.props
    let newArr = [];
    let newStr = this.state.profiles.split(",");
    console.log('newStr::', newStr)

    for (let i = 0; i < profile.length; i++) {
      
      for (let j = 0; j < newStr.length; j++){
        // console.log(`Number(newStr[${j}])`, Number(newStr[j]) , `profile[${i}]`, profile[i].pair_id);
        if (profile[i].pair_id === Number(newStr[j])) {
            // console.log(profile[i], 'HIT')
          newArr.push(profile[i]);
        }
      }
    }
     this.setState({ emailProfilesData: newArr});
  };

  render() {
    console.log(this.state);
    return (
      <div className="matched-page">
        <p id="unmatched-top-title"> Match Confirmation</p>

        <div className="matched-inputboxes">
          <div className="matched-input">
            <input
              id="editinput"
              placeholder="Hospital ID"
              name="hospital_id"
              onChange={e => this.handleChange(e)}
            />
            <br />
            <input
              id="editinput"
              placeholder="Date"
              name="date"
              onChange={e => this.handleChange(e)}
            />
            <br />
            <input
              id="editinput"
              placeholder="Potential Matches"
              name="potential_matches"
              onChange={e => this.handleChange(e)}
            />
            <br />
          </div>
          <div className="matched-button">
            <button
              id="matched-button"
              onClick={() => {
                // this.confirmMatches();
                // this.updateBatchedTrue();
                this.matchedProfiles();
                this.sendConfirmMatchesEmail();
              }}
            >
              Confirm
            </button>{" "}
            <button id="matched-button" onClick={this.resetForm}>
              Decline
            </button>
          </div>
        </div>
      </div>
      //   </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};
export default connect(
  mapStateToProps,
  { getMatched }
)(MatchedPostComponent);
