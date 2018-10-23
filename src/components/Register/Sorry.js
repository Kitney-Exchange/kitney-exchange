import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./Sorry.css";

class Sorry extends Component {
  render() {
    return (
      <div className="sorry-page">
        <Navbar />
        <div className="sorry-information-box" id="sorry-box">
          We're sorry. Unfortunately, you are not eligible to be a donor. You
          did not meet all of the requirements to continue.
        </div>
        <footer>
          <ul>
            <li>Kitney Exchange</li>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Admin</li>
          </ul>
        </footer>
      </div>
    );
  }
}
export default Sorry;
