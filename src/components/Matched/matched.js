import React, {Component} from 'react';
import {getMatched, getProfiles} from '../../dux/reducer';
import ReactTable from 'react-table';
import {connect} from 'react-redux';
import AdminNavbar from '../Navbar/AdminNavbar';


class MatchedPage extends Component {

    constructor(){
        super();
        this.state={
            profiles: [],
            matched: []
        }
    }

    componentDidMount(){
        this.props.getMatched()
        this.props.getProfiles()
    setTimeout(()=> 
    this.setState({profiles: this.props.profile,
                    matched: this.props.matched}), 2000)
    }

matchedProfiles = (idsArr) => {

    var newArr = [];
    var newStr = this.props.matched[0].profile_ids.split(',')

    for (let i = 0; i < idsArr.length; i++){
        console.log(idsArr[i].pair_id, idsArr.length, Number(newStr[0]))
    if (idsArr[i].pair_id === Number(newStr[0])) {
        newArr.push(idsArr[i].recipient_name, idsArr[i].donor_name)
    }
    else if (idsArr[i].pair_id === Number(newStr[1])) {
        newArr.push(idsArr[i].recipient_name, idsArr[i].donor_name)
    }
    else if (idsArr[i].pair_id === Number(newStr[2])) {
        newArr.push(idsArr[i].recipient_name, idsArr[i].donor_name)
    }
    else if (idsArr[i].pair_id === Number(newStr[3])) {
        newArr.push(idsArr[i].recipient_name, idsArr[i].donor_name)
    }
    else if (idsArr[i].pair_id === Number(newStr[4])) {
        newArr.push(idsArr[i].recipient_name, idsArr[i].donor_name)
    }
    else {
    return newArr};
}

}

render() {
    setTimeout(()=> console.log(this.matchedProfiles(this.state.profiles)), 2000)
if (this.props.matched)
var data = this.props.matched
return (
      <div>
          <AdminNavbar/>
           <h1>
          Matched Page
          </h1>
          <ReactTable
                data= {data}
                columns={[
                    {
                        Header: "Batch id",
                        accessor: "batch_id",
                    },
                    {
                        Header: "Profiles",
                        accessor: "profile_ids",
                    },
                    {
                        Header: "hospital_id",
                        accessor: "hospital_id",
                    },
                    {
                        Header: "Date",
                        accessor: "date",
                    },
                    {
                        Header: "Potential Matches",
                        accessor: "potential_matches"
                    },
                    {
                        Header: "Finished?",
                        accessor: "finished"
                    },
                ]}
                defaultPageSize={20}
                className="-striped -highlight" />
    </div>
       )

 }
}

const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps, {getProfiles, getMatched})(MatchedPage);