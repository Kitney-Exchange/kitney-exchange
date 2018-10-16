import React, { Component } from "react";
import "./Home.css";
import channel from "../../images/channel.png";
import care from "../../images/care.png";
import singleline from "../../images/singleline.png";
import sun from "../../images/sun.png";
import { UncontrolledCarousel } from "reactstrap";
import { Link } from "react-router-dom";

// images for carousel
const items = [
  {
    src:
      "https://images.unsplash.com/photo-1531573241436-069768aa6b81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d85acfd5e5a690e1b9fb9b9cb1ac114f&auto=format&fit=crop&w=1350&q=80"
  },
  {
    src:
      "https://images.unsplash.com/photo-1536551739350-d473d0f5d66a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=008122b00ce6617ca065ffff90c78e11&auto=format&fit=crop&w=1350&q=80"
  },
  {
    src:
      "https://images.unsplash.com/photo-1498568715259-5c1dc96aa8e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ad416811db9057a089db51b5b7f97794&auto=format&fit=crop&w=1350&q=80"
  }
];

class Home extends Component {
  render() {
    return (
      <div>
        <div className="homepage">
          <div className="banner-top">
            {/* This will be parallax scrolling! :D 
            it will also be a scrolling navbar as well, but only on home page */}
            <div className="nav-link">How It Works</div>
            <div className="nav-link">About</div>
            <div className="nav-link">Success Stories</div>
            <div className="nav-link">Sign Up</div>
            {/* <div className="banner-title">Matching kidneys. Saving lives.</div> */}
            {/* <div className="banner-login">Login</div> */}
          </div>
          <div className="banner">
            <div className="banner-img">
              <img
                id="banner-img"
                // src="http://ukhealthcare.net/wp-content/uploads/2018/04/living-kidney-donor.jpg"
                src="https://images.unsplash.com/photo-1432838598623-de06c44610e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=492392ff81bd03d455b058c093bc3eba&auto=format&fit=crop&w=1500&q=80"
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
                <div className="banner-iconbox">
                  <div className="banner-icon">
                    <img src={channel} alt="icon" />
                  </div>
                </div>
                {/* must update name, and maybe banner text */}
                <div className="banner-header">Kitney Exchange</div>
                <div className="banner-texttitle">Connect</div>
                <div className="banner-text">
                  A Local, Safe, and Refined Platform
                </div>
                <div className="mid-icon">
                  <img
                    src={singleline}
                    alt="line-icon"
                    style={{
                      height: "40px",
                      width: "3px"
                    }}
                  />
                </div>
                {/* <div className="signup-button">Create Account</div> */}
                <Link id="link-dec" to="/register">
                  <div className="login-button">Register Now</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="aboutus">
            <div className="aboutus-title">How It Works</div>
            <div className="aboutus-img">
              <img
                src={care}
                alt="hands-icon"
                style={{
                  width: "60px",
                  height: "60px"
                }}
              />
            </div>
            <div className="aboutus-text">
              <p id="aboutus-text">
                Carrots soybeans, owls duck raising or, cheep in plows. Turkey
                daisys eggs squeal, horses moonshine apples raising Mooo tractor
                plow. Feed in a woof, a farmers market. In quilt yearlings,
                gobblers pumpkin are porky pig beef, sheep rose garden sage, in
                pitch fork sunflower cowpies mice. bull bowels cat chicken cow,
                calf donkey duck.
              </p>
            </div>
          </div>
          <div className="stories">
            <div className="box-right">
              <div className="stories-img">
                <img
                  src="https://images.unsplash.com/photo-1531966662811-c6501e46eda6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee1a4ae3348e7f71fd3810cbcdec92a3&auto=format&fit=crop&w=716&q=80"
                  alt="tree"
                  style={{
                    width: "700px",
                    height: "850px"
                  }}
                />
              </div>
            </div>
            <div className="storiesbox-left">
              <div className="stories-title">About Us</div>
              <div className="stories-text">
                <p id="stories-text">
                  Carrots soybeans, owls duck raising or, cheep in plows. Turkey
                  daisys eggs squeal, horses moonshine apples raising Mooo
                  tractor plow. Feed in a woof, a farmers market. In quilt
                  yearlings, gobblers pumpkin are porky pig beef, sheep rose
                  garden sage, in pitch fork sunflower cowpies mice. bull bowels
                  cat chicken cow, calf donkey duck.
                </p>
              </div>
            </div>
          </div>
          <div className="aboutus">
            <div className="aboutus-title">Success</div>
            <div className="sun-img">
              <img
                src={sun}
                alt="hands-icon"
                style={{
                  width: "60px",
                  height: "60px"
                }}
              />{" "}
            </div>
            <div className="success-text">
              <p id="aboutus-text">
                Carrots soybeans, owls duck raising or, cheep in plows. Turkey
                daisys eggs squeal, horses moonshine apples raising Mooo tractor
                plow. Feed in a woof, a farmers market. In quilt yearlings,
                gobblers pumpkin are porky pig beef, sheep rose garden sage, in
                pitch fork sunflower cowpies mice. bull bowels cat chicken cow,
                calf donkey duck.
              </p>
            </div>
            {/* carousel imported from reactstrap, need to edit to manual slide, and fix position */}
            <div className="carousel">
              <UncontrolledCarousel
                keyboard={false}
                pause={false}
                autoplay={false}
                ride="carousel"
                interval="4000"
                slide={true}
                className="carousel-fade"
                items={items}
                controls={false}
                indicators={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
