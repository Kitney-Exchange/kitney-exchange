import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getHospitals} from '../../dux/reducer';
import ReactTable from 'react-table';
import axios from 'axios';

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

    renderEditable = (cellInfo) => {
        return(
            <div
                contentEditable
                suppressContentEditableWarning
                onBlur={e=> {
                    
                    const data = [...this.props.schedule];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                }
            }
            
                dangerouslySetInnerHTML={{
                    __html: this.props.schedule[cellInfo.index][cellInfo.column.id]
                }
            }
            />
        )
    }

render() {
    if (this.props.hospitals){
        const data = this.props.Hospitals
    }

return (
      <div>
          <ReactTable
          data= {this.data}
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
                accessor: "hospital_Phone",
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
          ]}

          />

      </div>
       )

 }
}

const mapStateToProps = (state) => {
   return {...state}
}
export default connect(mapStateToProps, {getHospitals})(Hospitals);