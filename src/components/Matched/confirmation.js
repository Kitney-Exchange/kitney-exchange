import React, {Component} from 'react';
import {getProfiles, getHospitals, getMatched} from '../../dux/reducer'
import {connect} from 'react-redux';

class Confirmation extends Component {
    constructor(props) {
    super(props);
    this.state = {
        pair_id: '',

        }
    }

    componentDidMount(){
        this.props.getProfiles();
        this.props.getHospitals();
        this.props.getMatched();
        setTimeout(this.stateSetter, 2000);
        setTimeout(()=> this.findPairIdOf('profile', this.props.profile, this.state.pair_id), 3000)
        setTimeout(()=> this.findMatchedIdOf('matched', this.props.matched, this.state.profile.batch_id), 3000)
        setTimeout(()=> this.findHospitalIdOf('hospital', this.props.hospitals, this.state.matched.hospital_id), 4000)

    }

    findPairIdOf = (name, alt, id) => {
        console.log(alt)
        for (let i = 0; i <  alt.length; i++) {
            if (alt[i].pair_id === Number(id)){
                return this.setState({[name]: alt[i]})
            }
            console.log(this.state)
        }
    }

    findHospitalIdOf = (name, alt, id) => {
        console.log(alt)
        for (let i = 0; i <  alt.length; i++) {
            if (alt[i].hospital_id === id){
                return this.setState({[name]: alt[i]})
            }
            console.log(this.state)
        }
    }

    findMatchedIdOf = (name, alt, id) => {
        console.log(alt)
        for (let i = 0; i <  alt.length; i++) {
            if (alt[i].batch_id === Number(id)){
                return this.setState({[name]: alt[i]})
            }
            console.log(this.state)
        }
    }

    stateSetter = () => {
        this.setState({pair_id: this.props.props.match.params.id})
    }

render() {
    console.log(this.props)
    console.log(this.state)
    // setTimeout(()=> this.findIdOf('profile', this.props.profile), 2000)
    console.log(this.state)
//id = this.props.props.match.params.id
return (
    <div> <h1>Confirmation </h1>
    <p>Congratulations! You have been selected to take part in a matched set. Please review the information below and confirm or decline this match. Please review <b>all</b> of the information below and confirm that it is correct before submitting.</p>
    <span>
        {/* Donor: {this.state.profile.donor_name}<br/>
        Recipient: {this.state.profile.recipient_name}<br/>

        Hospital: {},
        Date: {this.props.match} */}
    </span>
    </div>
       )

 }
}

 const mapStateToProps = (state) => {
     return {...state}
 }


export default connect(mapStateToProps, {getProfiles, getHospitals, getMatched})(Confirmation)