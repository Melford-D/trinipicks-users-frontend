import React from "react";
import Logo from "../assets/img/new-tp-logo.png";
import Facebook from "../assets/img/facebook-icon.png";
import Twitter from "../assets/img/twitter-icon.png";
import Instagram from "../assets/img/instagram-icon.png";
import Applestore from "../assets/img/App-store-sticker.png";
import Googlestore from "../assets/img/Playstore-sticker.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer mt-5 position-relative">
      <div className="container-1">
        <div className="">
          <img src={Logo} alt="Logo" className="mt-5 mb-3 logo" />
          <h4>Accurate sport betting tips</h4>
          <div>
            <p>Get in touch</p>
            <h4>+234-80-000-0000</h4>
            <p>Support@trinipicks.com</p>
          </div>
        </div>
        <div className="col social-icons">
          <img src={Facebook} alt="facebook" className="icon facebook-icon" />
          <img src={Twitter} alt="twitter" className="icon twitter-icon" />
          <img
            src={Instagram}
            alt="instagram"
            style={{ width: "40px", height: "40px" }}
            className="icon instagram-icon"
          />
        </div>
      </div>

      <div className="container-2">
        <div className="d-flex justify-content-around footer-menu">
          <div className="menu-alt">
            <h3 className="features">Menu</h3>
            <ul className="list-unstyled">
              <Link to="/features">
                <li>Features</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/pricing">
                <li>Pricing</li>
              </Link>
              <Link to="/how-it-works">
                <li>How it works</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="features">Quick Links</h3>
            <ul className="list-unstyled">
              <Link to="/faq">
                <li>FAQ</li>
              </Link>
              <Link to="/terms-of-use">
                <li>Terms of Use</li>
              </Link>
              <Link to="/privacy-policy">
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="footer-sub">
            <div className="mb-4">
              <h3 className="subscribe">Subscribe To Our Newsletter</h3>
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  className="newsletter"
                  placeholder="Enter email address here"
                />
                <button
                  type="submit"
                  className="btn btn-secondary btn-newsletter"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="footer-icons">
              <h3>Download Our App</h3>
              <img
                src={Googlestore}
                alt="Google store"
                className="img-fluid m-2"
              />
              <img
                src={Applestore}
                alt="Apple store"
                className="img-fluid m-2 "
              />
            </div>
          </div>
          <div className="copyright position-absolute">
            <p className="text-white text-center px-2">
              © 2021 Trinipicks. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
