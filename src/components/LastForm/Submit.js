import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

class Submit extends Component {
  constructor(props) {
    super(props);
  }

  addPair() {}
  render() {
    console.log(this.props.location.state);
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
export default Submit;
