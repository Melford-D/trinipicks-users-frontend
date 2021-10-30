import React from "react";
import NavBar from "../NavBar";
import Celebration from "../../assets/img/celebration-2.png";

function Login() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="signup-container d-flex mt-5">
            <div className="col-sm-12 col-md-6">
              <img src={Celebration} alt="Google store" className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-6">
              <h1 className="mainHeading join">Join the winning community</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                eveniet! dummy text
              </p>
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email / Username
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <label
                    for="exampleInputEmail1"
                    className="form-label checkbox"
                  >
                    Forgot password?
                    <span className="agreement"> Reset here</span>
                  </label>
                </div>
                <div className="mb-3 text-center button signup-btn">
                  <button
                    type="submit"
                    className="btn btn-color text-white btn-lg py-2 px-5 mt-3 mb-5"
                  >
                    Log in
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

export default Login;
