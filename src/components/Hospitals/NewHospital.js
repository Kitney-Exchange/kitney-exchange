import React, {Component} from 'react';
import axios from 'axios';
import MapContainer from '../googleMapTest/MapContainer';
import './hospitals.css';

class NewHospital extends Component {
    constructor(props) {
    super(props);
    this.state = {
        name: '',
        phone: '',
        address: '',
        lat: '',
        long: ''
        }
    }

    saveHospital = () => {
        const {name, phone, address, lat, long} = this.state
        axios.post('/api/hospitals', {name,
        phone,
        address,
        lat: lat,
        long: long})
        .then(response => alert('Hospital added!'))
        .catch(response=> alert('An error has occurred', response))
    }

    handleChange = e => {
        console.log(e.target.value);
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });
      };
render() {

return (
      <div> <h1>
          New Hospital
          </h1>
      <div className="inputbox">
            <input
              name="name"
              id="editinput"
              placeholder = "Hospital Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <input
              name="phone"
              id="editinput"
              placeholder = "Hospital Phone Number"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <input
              name="address"
              id="editinput"
              placeholder = "Hospital Address"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <input
              name="lat"
              id="editinput"
              placeholder = "Hospital latitude"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputbox">
            <input
              name="long"
              id="editinput"
              placeholder = "Hospital longitude"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.saveHospital}>Submit</button>
      <div>
          <MapContainer/>
      </div>
          </div>
       )

 }
}
export default NewHospital;