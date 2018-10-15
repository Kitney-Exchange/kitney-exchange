import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="banner-top">
          <div className="banner-title">Matching kidneys. Saving lives.</div>
          {/* <div className="banner-login">Login</div> */}
        </div>
        <div className="banner">
          <div className="banner-img">
            <img
              id="banner-img"
              src="http://ukhealthcare.net/wp-content/uploads/2018/04/living-kidney-donor.jpg"
              // src="https://images.unsplash.com/photo-15331"
              alt="banner img"
              style={{
                height: "80vh",
                width: "100vw",
                objectFit: "cover"
              }}
            />
          </div>

          <div className="banner-content">
            <div className="banner-center">
              <div className="banner-header">Kitney Exchange</div>
              <div className="banner-texttitle">Connect</div>
              <div className="banner-text">
                A Local, Safe, and Refined Platform
              </div>
              <div className="signup-button">Create Account</div>
              <div className="login-button">Log In</div>
            </div>
          </div>
        </div>
        <div className="aboutus">
          <div className="aboutus-img" />
          <div className="aboutus-title">How It Works</div>
          <div className="aboutus-text">
            <p id="aboutus-text">
              We know how tedious it can be to research and find animal shelters
              that is convenient for potential adopters. Luckily, Tulu’s Friends
              is designed so that potential adopters are able to browse shelters
              by location with ease. Simply type in the city you are located in
              and view the shelters’ cards for their listing of animals.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// const Home = () => {
//   return (
//     <div className="homepage">
//       <div className="banner">
//         <div className="banner-img" />
//         <div className="banner-text" />
//       </div>
//       <div className="aboutus">
//         <div className="aboutus-img" />
//         <div className="aboutus-text" />
//       </div>
//     </div>
//   );
// };

export default Home;
