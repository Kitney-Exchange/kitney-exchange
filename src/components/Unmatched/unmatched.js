import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import {getProfiles} from '../../dux/reducer';
import {connect} from 'react-redux';
import axios from 'axios';


class UnmatchedPage extends Component {


componentDidMount(){
    this.props.getProfiles();
    this.props.getMatched();
}

renderEditable = (cellInfo) => {
    return(
        <div
        contentEditable
        suppressContentEditableWarning
        onBlur={e=> {
            const data = [...this.props.profile];
            data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
            this.setState({data})
        }
    }

        dangerouslySetInnerHTML={{__html: this.props.profile[cellInfo.index][cellInfo.column.id]}}
            />
    )
}

render() {
    console.log(this.props)
    if (this.props.profile)
    var data = this.props.profile;

return (
      <div>
          <ReactTable 
          data = {data}
          columns={[
              {
                  Header: "Pair id",
                  accessor: "pair_id",
              },
              {
                Header: "Hospital 1 id",
                accessor: "hospital_1",
            },
            {
                Header: "Hospital 2 id",
                accessor: "hospital_2",
            },
            {
                Header: "Hospital 3 id",
                accessor: "hospital_3",
            },
            {
                Header: "Recipient Name",
                accessor: "recipient_name",
            },
            {
                Header: "Recipient DOB",
                accessor: "recipient_dob",
            },
            {
                Header: "Recipient Age",
                accessor: "recipient_age",
            },
            {
                Header: "Recipient Weight",
                accessor: "recipient_weight",
            },
            {
                Header: "Recipient Height",
                accessor: "recipient_height",
            },
            {
                Header: "Recipient History",
                accessor: "recipient_history",
            },
            {
                Header: "Recipient Dialysis",
                accessor: "recipient_dialysis",
            },
            {
                Header: "Recipient Blood Type",
                accessor: "recipient_blood_type",
            },
            {
                Header: "Recipient Email",
                accessor: "recipient_email",
            },
            {
                Header: "Donor Name",
                accessor: "donor_name",
            },
            {
                Header: "Donor DOB",
                accessor: "donor_dob",
            },
            {
                Header: "Donor Age",
                accessor: "donor_age",
            },
            {
                Header: "Donor Weight",
                accessor: "donor_weight",
            },
            {
                Header: "Donor Height",
                accessor: "donor_height",
            },
            {
                Header: "Donor History",
                accessor: "donor_history",
            },
            {
                Header: "Donor Blood Type",
                accessor: "donor_blood_type",
            },
            {
                Header: "Donor Email",
                accessor: "donor_email",
            },
          ]}
          defaultPageSize={20}
          className="-striped -highlight"

          />
      </div>
       )

 }
}

const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps, {getProfiles})(UnmatchedPage);