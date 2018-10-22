import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getHospitals} from '../../dux/reducer';
import ReactTable from 'react-table';
import axios from 'axios';
import NewHospital from './NewHospital';

class Hospitals extends Component {

    componentDidMount(){
        this.props.getHospitals();
    }

    handleDelete = (info) => {
        console.log(`Deleted: ${info.hospital_id}`);
        axios.delete(`/api/hospital/${info.hospital_id}`)
        .then(response=> alert("Hospital deleted"))
        .catch(err=> alert(err));
    }

    handleSave = (info) => {
        axios.put('/api/hospitals', {name: info.hospital_name,
            phone: info.hospital_phone, 
            address: info.hospital_address, 
            lat: info.lat,
            long: info.log,
            hospital_id: info.hospital_id})
            .then(response => alert('Hospital Updated!'))
            .catch(err=> alert(err));
    }

    renderEditable = (cellInfo) => {
        return(
            <div
                contentEditable
                suppressContentEditableWarning
                onBlur={e=> {
                    
                    const data = [...this.props.hospitals];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                }
            }
            
                dangerouslySetInnerHTML={{
                    __html: this.props.hospitals[cellInfo.index][cellInfo.column.id]
                }
            }
            />
        )
    }

render() {
console.log(this.props.hospitals)

return (
      <div>
          <NewHospital/>
          <br/>
          <ReactTable
          data= {this.props.hospitals}
          columns={[
              {
                  Header: "Hospital ID",
                  accessor: "hospital_id",
                  Cell: this.renderEditable
              },
              {
                Header: "Hospital Name",
                accessor: "hospital_name",
                Cell: this.renderEditable
            },
            {
                Header: "Hospital Phone",
                accessor: "hospital_phone",
                Cell: this.renderEditable
            },
            {
                Header: "Hospital Address",
                accessor: "hospital_address",
                Cell: this.renderEditable
            },
            {
                Header: "Hospital Latitude",
                accessor: "lat",
                Cell: this.renderEditable
            },
            {
                Header: "Hospital Longitude",
                accessor: "long",
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

      </div>
       )

 }
}

const mapStateToProps = (state) => {
   return {...state}
}
export default connect(mapStateToProps, {getHospitals})(Hospitals);