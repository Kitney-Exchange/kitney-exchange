import React, { Component } from "react";
import "./Home.css";
import channel from "../../images/channel.png";
import care from "../../images/care.png";
import singleline from "../../images/singleline.png";
import sun from "../../images/sun.png";
import twohands from "../../images/twohands.jpeg";
import { Parallax, Background } from "react-parallax";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import StickyHeader from "react-sticky-header";
import "react-sticky-header/styles.css";
import ScrollspyNav from "react-scrollspy-nav";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="homepage">
          <StickyHeader
            header={
              <div className="banner-top" id="navbar">
                {/* <ScrollspyNav
                  className="navbar-main"
                  scrollTargetIDs={["howitworks", "aboutus", "success"]}
                  activeNavClass="is-active"
                  scrollDuration="200"
                > */}
                <div className="nav-linkbar">
                  <a href="#howitworks" className="nav-link">
                    How It Works
                  </a>

                  <a href="#aboutus" className="nav-link">
                    About
                  </a>
                  <a href="#success" className="nav-link">
                    Success Stories
                  </a>
                  <a href="/" className="nav-link">
                    Sign Up
                  </a>
                </div>
                {/* </ScrollspyNav> */}
              </div>
            }
          >
            {/* <section>
            </section> */}
          </StickyHeader>
          <div className="banner">
            <div className="banner-img">
              <img
                id="banner-img"
                src="https://images.unsplash.com/photo-1432838598623-de06c44610e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=492392ff81bd03d455b058c093bc3eba&auto=format&fit=crop&w=1500&q=80"
                alt="banner img"
                style={{
                  height: "100vh",
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
                  <br />
                  For Kidney Pairing
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
                <Link id="link-dec" to="/register">
                  <div className="login-button">Register Now</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="aboutus" id="howitworks">
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
                Kidney paired donation is a resourceful option for candidates
                who have a living donor who is medically able, but cannot donate
                a kidney to their intended candidate because they are
                incompatible.
                <br />
                <br />
                Kitney Exchange is a platform for recipient and donor pairs that
                would like to be matched with other incompatible pairs in their
                local area. We developed a system where multiple pairs can be
                matched in a chain.
                <br />
                <br />
                We give the ability to those who are trying to help their loved
                ones with kidney failure and get the help they need.
              </p>
            </div>
          </div>
          <div className="stories" id="aboutus">
            <div className="box-right">
              <div className="stories-img">
                <img
                  src="https://images.unsplash.com/photo-1531966662811-c6501e46eda6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee1a4ae3348e7f71fd3810cbcdec92a3&auto=format&fit=crop&w=716&q=80"
                  alt="tree"
                  style={{
                    width: "600px",
                    height: "850px"
                  }}
                />
              </div>
            </div>
            <div className="storiesbox-left">
              <div className="stories-title">About Us</div>
              <div className="stories-text">
                <p id="stories-text">
                  The Kitney Exchange is making a difference by addressing the
                  challenges both the U.S and the world are facing. There are
                  enough donor/recipient pairs in the country that can be
                  matched and created into a donor chain, ultimately benefiting
                  all participants.
                  <br />
                  <br /> As we continue to partner with your local hospitals, we
                  can bring our vision to life and give the ability to the
                  donors helping their loved ones with kidney failure and get
                  the transplant they need.
                </p>
              </div>
            </div>
          </div>
          <div className="aboutus" id="success">
            <div className="aboutus-title">Success</div>
            <div className="sun-img">
              <img
                src={sun}
                alt="hands-icon"
                style={{
                  width: "60px",
                  height: "60px"
                }}
              />
            </div>
            <div className="success-text">
              <p id="aboutus-text">
                Through Kitney Exchange, we have had the honor to help a unique
                group of heroes - those courageous enough to give the gift of
                life and those courageous enough to accept this gift and carry
                on. Throughout our experience, we have worked with numerous
                donor families and recipients. This is just a sampling of our
                powerful stories of hope.
              </p>
            </div>
            <div className="carousel">
              <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                id="carousel"
              >
                <div>
                  <img src="https://images.unsplash.com/photo-1531573241436-069768aa6b81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d85acfd5e5a690e1b9fb9b9cb1ac114f&auto=format&fit=crop&w=1350&q=80" />
                  <p className="legend">
                    Read About Recipient Sabrina Cantey's Life Changing Story
                  </p>
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1536551739350-d473d0f5d66a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=008122b00ce6617ca065ffff90c78e11&auto=format&fit=crop&w=1350&q=80" />
                  <p className="legend">
                    Read About Recipient Sarah Finley's Life Changing Story
                  </p>
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1498568715259-5c1dc96aa8e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ad416811db9057a089db51b5b7f97794&auto=format&fit=crop&w=1350&q=80" />
                  <p className="legend">
                    Read About Recipient Terry Kavern's Life Changing Story
                  </p>
                </div>
              </Carousel>
            </div>
            <footer className="footer-home" id="footer-home">
              <ul>
                <li>Kitney Exchange</li>
                <li>Home</li>
                <li>Contact Us</li>
                <li>Admin</li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
