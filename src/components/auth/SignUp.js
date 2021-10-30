import React from "react";
import NavBar from "../NavBar";
import Celebration from "../../assets/img/celebration-2.png";
import PhoneNumbers from "./PhoneNumbers";

function SignUp() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="signup-container d-flex mt-5">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <img src={Celebration} alt="Google store" className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h1 className="mainHeading join">Join the winning community</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                eveniet!
              </p>
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
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
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Phone Number
                  </label>
                  <PhoneNumbers />
                  {/* <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  /> */}
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="mb-3 d-flex justify-content-between password-section">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="checkbox"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                  <label
                    for="exampleInputEmail1"
                    className="form-label checkbox"
                  >
                    I agree to the Trinipicks
                    <span className="agreement"> Terms of Service</span> and
                    <span className="agreement"> Privacy Policy</span>
                  </label>
                </div>
                <div className="mb-3 text-center button signup-btn">
                  <button
                    type="submit"
                    className="btn btn-color text-white btn-lg py-2 px-5 mt-3 mb-5"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
