import React, {Component} from 'react';
import {getMatched, getProfiles} from '../../dux/reducer';
import ReactTable from 'react-table';
import {connect} from 'react-redux';
import AdminNavbar from '../Navbar/AdminNavbar';
import { Icon } from 'react-icons-kit'
import {checkmark} from 'react-icons-kit/ionicons/checkmark'
import {trashA} from 'react-icons-kit/ionicons/trashA'
import MatchedPostComponent from '../Unmatched/matchedPostComponent';


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
    var newStr = idsArr.split(',')

    for (let i = 0; i < this.state.profiles.length; i++){
        console.log(this.state.profiles[i].pair_id, this.state.profiles.length, Number(newStr[0]))
    if (this.state.profiles[i].pair_id === Number(newStr[0])) {
        newArr.push(this.state.profiles[i])
    }
    else if (this.state.profiles[i].pair_id === Number(newStr[1])) {
        newArr.push(this.state.profiles[i])
    }
    else if (this.state.profiles[i].pair_id === Number(newStr[2])) {
        newArr.push(this.state.profiles[i])
    }
    else if (this.state.profiles[i].pair_id === Number(newStr[3])) {
        newArr.push(this.state.profiles[i])
    }
    else if (this.state.profiles[i].pair_id === Number(newStr[4])) {
        newArr.push(this.state.profiles[i])
    }
    else {
    return newArr};
}

}

render() {
    // setTimeout(()=> console.log(this.matchedProfiles(this.state.profile)), 2000)
if (this.props.matched)
var data = this.props.matched
return (
      <div>
          <AdminNavbar/>
          <MatchedPostComponent/>
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
                        accessor: "finished",
                        Cell: row => (
                            <span style={{display: 'flex', wrap: 'no-wrap'}}>
                            <div style={{color: 'green', margin: '0 10px 0 20px'}}>
                            <Icon size={24} icon={checkmark}/></div>
                            <div style={{color: 'black', margin: '0 10px 0 10px'}}>
                            <Icon size={24} icon={trashA}/></div>
                            </span>
                        )
                    },
                ]}
                defaultPageSize={20}
                className="-striped -highlight" 
                
                SubComponent={row => {
                    const data = this.matchedProfiles(row.original.profile_ids)
                    console.log(row)
                    return (<div>
                        <ReactTable
                        data={data}
                        columns={[
                            {Header: "Pair ID",
                            accessor: 'pair_id'},
                            {Header: "Donor Name",
                            accessor: 'donor_name'},
                            {Header: "Recipient Name",
                            accessor: 'recipient_name'},
                            {Header: "Confirmed?",
                            accessor: 'confirmed',
                            Cell: row => {
                                console.log(row.value)
                                return (<span>
                                    <span style={{
                                    color: row.value === true ? '#57d500' :
                                    row.value === null ? 'red'
                                        : '#ffcc00',
                                    transition: 'all .3s ease-out'
                                    }}>
                                    &#x25cf;
                                    </span> {
                                    row.value === true ? 'Confirmed!' :
                                    row.value === null ? 'Declined'
                                    : 'Waiting'
                                    }
                                </span>)
                            } }
                        ]}
                        defaultPageSize={6}
                        showPagination= {false}
                        />

                        </div>)
                    
                    }
                }/>
    </div>
       )

 }
}

const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps, {getProfiles, getMatched})(MatchedPage);