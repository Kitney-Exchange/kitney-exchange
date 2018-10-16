import React, {Component} from 'react';
import {getMatched, getProfiles} from '../../dux/reducer';
import ReactTable from 'react-table';
import {connect} from 'react-redux';

class MatchedPage extends Component {

    componentDidMount(){
        this.props.getMatched()
        this.props.getProfiles()
    }


render() {
if (this.props.matched)
var data = this.props.matched
return (
      <div> <h1>
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