import React, { Component } from "react";
import { getMatched, getHospitals, getProfiles, getUnfinishedMatched } from "../../dux/reducer";
import ReactTable from "react-table";
import { connect } from "react-redux";
import AdminNavbar from "../Navbar/AdminNavbar";
import { Icon } from "react-icons-kit";
import { checkmark } from "react-icons-kit/ionicons/checkmark";
import { trashA } from "react-icons-kit/ionicons/trashA";
import MatchedPostComponent from "../Unmatched/matchedPostComponent";
import axios from "axios";

class MatchedPage extends Component {
  constructor() {
    super();
    this.state = {
      profiles: [],
      matched: [],
      hospitalsList: []
    };
  }

  componentDidMount() {
    this.props.getMatched();
    this.props.getProfiles();
    this.props.getUnfinishedMatched();
    this.props.getHospitals()
    setTimeout(
      () =>
        this.setState({
          profiles: this.props.profile,
          matched: this.props.unfinishedMatched,
          hospitalsList: this.props.hospitals
        }),
      3000
    );
  }

  matchedProfiles = idsArr => {
    var newArr = [];
    var newStr = idsArr.split(",");
    console.log(idsArr.split(','))
    for (let i = 0; i < this.state.profiles.length; i++) {
      for (let j = 0; j < newStr.length; j++){
      console.log(
        this.state.profiles[i].pair_id,
        this.state.profiles.length,
        Number(newStr[i])
      );
        if (this.state.profiles[i].pair_id === Number(newStr[j])) {
          newArr.push(this.state.profiles[i]);
        }
      }
    }
    return newArr;
  };

  handleDelete = info => {
    axios
      .delete(`/api/matched/${info.batch_id}`)
      .then(response => alert("Profile Deleted!"))
      .catch(err => alert(err));
  };

  handleFinished = info => {
    axios.put(`/api/matched/${info.batch_id}`)
    .then(response => alert("Hospital notified!"))
    .catch(err => alert(err));
  }

  //// Get batchID array and match in profiles, hospitals array to send to hopsital in Email ////

  handleSendHospitalBatchInfo(batchID) {
    let { profiles } = this.state
    let { hospitalsList } = this.state
    let batchInfo = []
    let finalHospital = []
    let newStrArray = batchID.profile_ids.split(",");

    for(let k = 0; k < hospitalsList.length; k++) {
      // console.log(`hospitalsList[${ k }]`,hospitalsList[k])
      if(hospitalsList[k].hospital_id === batchID.hospital_id) {
        finalHospital.push(hospitalsList[k])
      }
    }

    for(let i = 0; i < profiles.length; i++) {
      // console.log(`profiles[${ i }]::`, profiles[i])
      for (let j = 0; j < newStrArray.length; j++){
        // console.log(`Number(newStrArray[${j}])`, Number(newStrArray[j]) , `profile[${i}]`, profiles[i].pair_id);
        
        if(profiles[i].pair_id === Number(newStrArray[j])) {
          batchInfo.push(profiles[i])
        }
      };
    };

    axios.post('/api/patientInfo', { batchInfo, batchID, finalHospital })
    .then((response) => {
      console.log('response::', response)
    }).catch((error) => {
      console.log(`${error}`)
    });
  }

  render() {
    // setTimeout(()=> console.log(this.matchedProfiles(this.state.profile)), 2000)
    if (this.props.unfinishedMatched) var data = this.props.unfinishedMatched;
    return (
      <div className="matched-bottom-page">
        <AdminNavbar />
        <p id="matched-bottom-title">Matched Table</p>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Batch id",
              accessor: "batch_id"
            },
            {
              Header: "Profiles",
              accessor: "profile_ids"
            },
            {
              Header: "hospital_id",
              accessor: "hospital_id"
            },
            {
              Header: "Date",
              accessor: "date"
            },
            {
              Header: "Potential Matches",
              accessor: "potential_matches"
            },
            {
              Header: "Finished?",
              accessor: "finished",
              Cell: row => (
                <span style={{ display: "flex", wrap: "no-wrap" }}>
                  <div style={{ color: "green", margin: "0 10px 0 20px" }}>
                    <Icon size={24} icon={checkmark} onClick={ () =>{ this.handleFinished(row.original) ; this.handleSendHospitalBatchInfo(row.original) } }/>
                  </div>
                  <div style={{ color: "black", margin: "0 10px 0 10px" }}>
                    <Icon size={24} icon={trashA} onClick={() => this.handleDelete(row.original)}/>
                  </div>
                </span>
              )
            }
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
          SubComponent={row => {
            const data = this.matchedProfiles(row.original.profile_ids);
            console.log(row);
            return (
              <div>
                <ReactTable
                  data={data}
                  columns={[
                    {
                      Header: "Pair ID",
                      accessor: "pair_id"
                    },
                    {
                      Header: "Donor Name",
                      accessor: "donor_name"
                    },
                    {
                      Header: "Recipient Name",
                      accessor: "recipient_name"
                    },
                    {
                      Header: "Confirmed?",
                      accessor: "confirmed",
                      Cell: row => {
                        console.log(row.value);
                        return (
                          <span>
                            <span
                              style={{
                                color:
                                  row.value === true
                                    ? "#57d500"
                                    : row.value === null
                                      ? "red"
                                      : "#ffcc00",
                                transition: "all .3s ease-out"
                              }}
                            >
                              &#x25cf;
                            </span>{" "}
                            {row.value === true
                              ? "Confirmed!"
                              : row.value === null
                                ? "Declined"
                                : "Waiting"}
                          </span>
                        );
                      }
                    }
                  ]}
                  defaultPageSize={6}
                  showPagination={false}
                />
              </div>
            );
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(
  mapStateToProps,
  { getProfiles, getMatched, getHospitals, getUnfinishedMatched }
)(MatchedPage);
