import React from "react";
import NavBar from "./NavBar";
import Applestore from "../assets/img/App-store-sticker.png";
import Googlestore from "../assets/img/Playstore-sticker.png";
import Celebration from "../assets/img/celebration-mobile.png";
import Profile from "../assets/img/profile.png";
import Premium from "../assets/img/premium-pricing-membership.jpg";
import Winning from "../assets/img/start-winning.jpg";
import Cloud from "../assets/img/cloud-plus-note.png";
import Cloud2 from "../assets/img/cloud-plus-note-2.png";
import Mail from "../assets/img/envelope-mail-send-outline.png";
import TrinipicksApp from "../assets/img/iphone.png";
import Bitcoin from "../assets/img/bitcoin.png";
import Trinipicks from "../assets/img/Trinipicks-Logo-2.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4 mt-5 text-left heading">
            <h1 className="mainHeading mb-4">
              Imagination has a great deal to do with winnings
            </h1>
            <div className="quote">
              <div className="d-flex justify-content-center align-items-center">
                <p>
                  <span className="line"></span> Mark Krzyzewski
                </p>
              </div>
              <div className="quote-item">
                <p className="quote">
                  Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Cum
                  dicta eius enim inventoreus option Lorem ipsum dolor sit amet,
                  consectetur adipisi cing elit. Cum dicta eius enim inventoreus
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="text-center">
                <img
                  src={Googlestore}
                  alt="Google store"
                  className="img-fluid m-2"
                />
                <img
                  src={Applestore}
                  alt="Apple store"
                  className="img-fluid m-2"
                />
              </div>
            </div>
          </div>
          <div className="text-center col-lg-8 heading-2">
            <img
              src={Celebration}
              alt="Apple store"
              className="img-fluid mt-5"
            />
          </div>
          <div className="text-center">
            <Link to="/trinipot">
              <button
                type="submit"
                className="btn btn-lg mb-3 trinipot-promo text-white"
              >
                Trinipicks Promo
              </button>
            </Link>
          </div>
          <div className="howItWorks" id="how-it-works">
            <Link to="/how-it-works">
              <h2 className="subheading">How it works</h2>
            </Link>
            <p className="secondQuote text-center">
              Trinipicks is a community that shares accurate sport betting tips
              and an indepth sport trading analysis with a good risk management
              system in place
            </p>
            <div className="innerContainer">
              <div className="col-md-12 col-lg-4 text-center mt-4 mb-4">
                <img src={Profile} alt="Profile" className="img-fluid mb-3" />
                <h3 className="pricing">Create Account</h3>
                <p className="pricingDescription">
                  It takes less than 3 mins to create & verify your Trinipicks
                  account
                </p>
              </div>
              <div className="col-md-12 col-lg-4 text-center mb-4">
                <img src={Premium} alt="Pricing" className="premium" />
                <h3 className="pricing">Choose your plan</h3>
                <p className="pricingDescription">
                  Choose a plan a pocket-friendly subscription plan that suits
                  you
                </p>
              </div>
              <div className="col-md-12 col-lg-4 text-center">
                <img src={Winning} alt="Start winning" className="winning" />
                <h3 className="pricing">Start Winning</h3>
                <p className="pricingDescription">
                  Get accurate sport betting tips and start cashing out
                </p>
              </div>
            </div>
          </div>
          {/* Pricing */}
          <div
            className="col-sm-12 col-md-12 col-lg-12 bg text-center pricingSection"
            id="pricing"
          >
            <div className="col-md-12 col-lg-4 pricingSection-item">
              <Link to="/pricing">
                <h2 className="subheading text-white mt-5">Pricing</h2>
              </Link>
              <p className="text-white">
                Choose from any of our affordable subscription plans and gain
                access to unlimted accurate sport betting tips and an indepth
                sport trading analysis
              </p>
              <img src={Bitcoin} alt="bitcoin" className="bitcoin img-fluid" />
            </div>
            <div className="cardSection col-lg-8">
              <div className="pricing-subsection">
                <img
                  src={Cloud}
                  alt="vector cloud with notebook"
                  className="cloud"
                />
                <h3 className="monthly">Monthly Membership</h3>
                <h2 className="text-white fs-1 fw-bold">$200</h2>
                <p className="text-white text-uppercase">per month</p>
                <button type="submit" className="btn btn-lg text-white choose">
                  Choose
                </button>
              </div>

              {/* Card */}
              <div className="col-md-12 col-lg-6 mt-6 bg-card">
                <img src={Cloud2} alt="cloud" className="mb-3 mt-3" />
                <h3 className="monthly text-bold color-alt">
                  Annual Membership
                </h3>
                <h2 className="text-white fs-1 fw-bold">$170</h2>
                <p className="text-white text-uppercase">per month</p>
                <p className="save">Save $360</p>
                <button
                  type="submit"
                  className="btn btn-lg text-white choose-alt"
                >
                  Choose
                </button>
              </div>
            </div>
          </div>

          {/* About us */}
          <div className="col-md-12 d-flex justify-content-center align-items-center bg-about">
            <div className="col-md-6">
              <img
                src={Trinipicks}
                alt="logo"
                className="img-fluid trinipicksLogo"
              />
            </div>
            <div className="col-md-6 text-left">
              <Link to="/about">
                <h2 className="subheading">About us</h2>
              </Link>
              <p>
                Trinipicks is a community that shares insights about sports
                betting by providing accurate sport tips and also providing an
                indepth sport trading analysis with a good risk management
                system in place.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Cum
                dicta eius enim inventoreus option Lorem ipsum dolor sit
                amet,consectetur adipisi cing elit. Lorem ipsum dolor sit amet,
                consectetur adipisi cing elit.{" "}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="col-md-12 d-flex justify-content-around align-items-center bg-contact">
            <div className="col-sm-12 col-md-6 text-center mt-5 flex-column-reverse d-flex align-items-center mailSection">
              <img src={Mail} alt="Mail" className="mail" />
              <Link to="/contact">
                <h2 className="subheading subheading-alt">
                  Get in touch with us
                </h2>
              </Link>
              <p className="quote">
                Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Cum
                dicta eius enim inventoreus option.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 form">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Your name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <label for="exampleInputEmail1" className="form-label">
                  Tell us how can we help you?
                </label>
                <div className="mb-3 form-floating">
                  <textarea
                    className="form-control"
                    rows="10"
                    style={{ height: "100%" }}
                    id="floatingTextarea"
                    placeholder="Leave a comment here"
                  ></textarea>
                  <label for="floatingTextarea" className="text-muted">
                    Comments
                  </label>
                </div>
                <div className="mb-3 text-left button">
                  <button
                    type="submit"
                    className="btn btn-color text-white btn-lg py-2 px-5 mt-3 mb-5"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* App Mockup */}
          <div className="d-flex justify-content-around align-items-center flex-md-wrap bg-mockup">
            <div className="col-md-6 text-center mb-5">
              <img
                src={TrinipicksApp}
                alt="App mockup"
                className="app-mockup"
              />
            </div>
            <div className="col-sm-12 col-md-6 mb-4 mb-3 text-left bg-mockup-cta">
              <h2 className="subheading lh-sm">
                Get accurate sports betting tips
              </h2>
              <p className="quote">
                Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Cum
                dicta eius enim inventoreus option Lorem ipsum dolor sit amet,
                consectetur adipisi cing elit. Cum dicta eius enim inventoreus
                option
              </p>
              <button
                type="submit"
                className="btn btn-color btn-lg py-2 px-5 text-white mt-5 mb-3"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
