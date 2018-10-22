import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import {getProfiles} from '../../dux/reducer';
import {connect} from 'react-redux';
import axios from 'axios';
import MagicButton from './magicButton';
import NavBar from '../Navbar/Navbar';

class UnmatchedPage extends Component {
    
    
componentDidMount(){
    this.props.getProfiles();
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

handleSave = (info) => {
    axios.put('/api/profile', {hospital_1: info.hospital_1, 
        hospital_2: info.hospital_2,
        hospital_3: info.hospital_3,
        recipient_name: info.recipient_name,
        recipient_dob: info.recipient_dob,
        recipient_age: info.recipient_age,
        recipient_weight: info.recipient_weight,
        recipient_height: info.recipient_height,
        recipient_history: info.recipient_history,
        recipient_dialysis: info.recipient_dialysis,
        recipient_blood_type: info.recipient_blood_type,
        donor_name: info.donor_name,
        donor_dob: info.donor_dob,
        donor_age: info.donor_age,
        donor_weight: info.donor_weight,
        donor_height: info.donor_height,
        donor_history: info.donor_history,
        donor_blood_type: info.donor_blood_type,
        pair_id: info.pair_id,
        donor_email: info.donor_email,
        recipient_email: info.recipient_email
    })
        .then(response=> alert("Profile Update!"))
        .catch(err=> alert(err));
}

handleDelete = (info) => {
    axios.delete(`/api/profile/${info.pair_id}`)
    .then(response=> alert("Profile Deleted!"))
    .catch(err=> alert(err));
}
render() {
    // console.log(this.state)
    if (this.props.profile)
    var data = this.props.profile;

return (
      <div>
          <NavBar/>
          <MagicButton data={ data }/>
          <ReactTable 
          data = {data}
          columns={[
              {
                  Header: "Pair id",
                  accessor: "pair_id",
                  Cell: this.renderEditable
              },
              {
                Header: "Hospital 1 id",
                accessor: "hospital_1",
                Cell: this.renderEditable
            },
            {
                Header: "Hospital 2 id",
                accessor: "hospital_2",
                Cell: this.renderEditable
            },
            {
                Header: "Hospital 3 id",
                accessor: "hospital_3",
                Cell: this.renderEditable
            },
            {
                Header: "Recipient Name",
                accessor: "recipient_name",
                Cell: this.renderEditable
            },
            {
                Header: "Recipient DOB",
                accessor: "recipient_dob",
                Cell: this.renderEditable
            },
            {
                Header: "Recipient Age",
                accessor: "recipient_age",
                Cell: this.renderEditable
            },
            {
                Header: "Recipient Weight",
                accessor: "recipient_weight",
                Cell: this.renderEditable
            },
            {
                Header: "Recipient Height",
                accessor: "recipient_height",
                Cell: this.renderEditable
            },
            {
                Header: "Recipient History",
                accessor: "recipient_history",
                Cell: this.renderEditable
            },
            {
                Header: "Recipient Dialysis",
                accessor: "recipient_dialysis",
                Cell: this.renderEditable
            },
            {
                Header: "Recipient Blood Type",
                accessor: "recipient_blood_type",
                Cell: this.renderEditable
            },
            {
                Header: "Recipient Email",
                accessor: "recipient_email",
                Cell: this.renderEditable
            },
            {
                Header: "Donor Name",
                accessor: "donor_name",
                Cell: this.renderEditable
            },
            {
                Header: "Donor DOB",
                accessor: "donor_dob",
                Cell: this.renderEditable
            },
            {
                Header: "Donor Age",
                accessor: "donor_age",
                Cell: this.renderEditable
            },
            {
                Header: "Donor Weight",
                accessor: "donor_weight",
                Cell: this.renderEditable
            },
            {
                Header: "Donor Height",
                accessor: "donor_height",
                Cell: this.renderEditable
            },
            {
                Header: "Donor History",
                accessor: "donor_history",
                Cell: this.renderEditable
            },
            {
                Header: "Donor Blood Type",
                accessor: "donor_blood_type",
                Cell: this.renderEditable
            },
            {
                Header: "Donor Email",
                accessor: "donor_email",
                Cell: this.renderEditable
            },
            {
                Header: '',
                Cell: row => (
                    <div>
                        <button onClick={()=> this.handleSave(row.original)}>Save</button>
                        <button onClick={()=> this.handleDelete(row.original)}>Delete</button>
                    </div>
                
                ),
            }
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
          
          />
          <MagicButton data={ data } />
      </div>
       )

 }
}

const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps, {getProfiles})(UnmatchedPage);