import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar";
import Celebration from "../../assets/img/celebration-2.png";
import { Button } from "react-bootstrap";

// login action
import { login } from "../../Actions/UserAuthActions/UserLoginAction";

// step 1
import { sendRecoveryEmail, sendRecoveryEmailAndOtp } from "../../Actions/ResetPassActions/ResetPassActions";

// created this components for user experience and user interface notifiation
import Message from "../MessageComp/Message";
import Loader from "../LoaderComp/Loader";

function Login({ location, history }) {
  const dispatch = useDispatch();

  // keep track of reset password comp
  const [resetPassComp, setResetPassComp] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const recoveryEmailStatus = useSelector((state) => state.recoveryEmailStatus);
  const {
    loading: emailResLoading,
    error: emailResError,
    emailRes,
  } = recoveryEmailStatus;

  const recoveryEmailAndOtpStatus = useSelector((state) => state.recoveryEmailAndOtpStatus);
  const {
    loading: emailAndOtpResLoading,
    error: emailAndOtpResError,
    emailAndOtpRes,
  } = recoveryEmailAndOtpStatus;

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(0);
 

  // created this piece of state to monitor clientside input errors
  const [errorMessage, setErrorMessage] = useState("");
  const [clientError, setClientError] = useState(false);

  useEffect(() => {

    if(emailRes === 'OTP sent') {       
      setResetPassComp('step 2')
    } else if (emailAndOtpRes === 'otp valid') {
      setResetPassComp('step 3')
    }
    
    if (userInfo) {
      // semd to local storage
      localStorage.setItem('userInfo', userInfo)
      // if login success redirect here
      history.push("/user-dashboard");
    }
  }, [history, userInfo, emailRes, emailAndOtpRes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // user input validation
    if (usernameOrEmail.length < 5) {
      setErrorMessage(
        "Please username / email should have more than 5 characters"
      );
      setClientError(true);
    } else if (password < 5) {
      setErrorMessage("Please password should have more than 5 characters");
      setClientError(true);
    } else {
      setErrorMessage(" ");
      setClientError(false);
      dispatch(login(usernameOrEmail, password));
    }
  };

  const handleResetPassword = () => {
    setResetPassComp("step 1");
  };

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

              {clientError ? (
                <Message variant="danger">{errorMessage}</Message>
              ) : error || emailResError || emailAndOtpResError ? (
                <Message variant="danger">{error || emailResError || emailAndOtpResError}</Message>
              ) : loading || emailResLoading || emailAndOtpResLoading ? (
                <Loader />
              ) : (
                ""
              )}

              <form>
                {resetPassComp === "" ? (
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email / Username
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={usernameOrEmail}
                      onChange={(e) => setUsernameOrEmail(e.target.value)}
                    />
                  </div>
                ) : resetPassComp === "step 1" ? (
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Enter Recovery Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={usernameOrEmail}
                      onChange={(e) => setUsernameOrEmail(e.target.value)}
                    />

                    <Button
                      className="mt-3"
                      variant="dark"
                      onClick={() => {
                        dispatch(sendRecoveryEmail(usernameOrEmail));
                      }}
                    >
                      Next Step
                    </Button>
                  </div>
                ) : resetPassComp === "step 2" ? (
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Enter Recovery Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={usernameOrEmail}
                      onChange={(e) => setUsernameOrEmail(e.target.value)}
                    />
                  </div>
                ) : resetPassComp === "step 3" ? (
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Enter Recovery Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={usernameOrEmail}
                      onChange={(e) => setUsernameOrEmail(e.target.value)}
                    />
                  </div>
                ) : (
                  ""
                )}

                {resetPassComp === "" ? (
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPasswiord"
                      aria-describedby="passwordHelp"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                      for="exampleInputEmail1"
                      className="form-label checkbox"
                    >
                      Forgot password?
                      <span className="agreement" onClick={handleResetPassword}>
                        Reset here
                      </span>
                    </label>
                  </div>
                ) : resetPassComp === "step 1" ? (
                  <div></div>
                ) : resetPassComp === "step 2" ? (
                  <div className="mb-3">
                    <h3 className='text-success'>Please check your email SPAM folder for OTP </h3>
                    <label for="exampleInputEmail1" className="form-label">
                      Enter Your OTP 
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPasswiord"
                      aria-describedby="passwordHelp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />

                    <Button
                      className="mt-3"
                      variant="dark"
                      onClick={() => {
                        dispatch(sendRecoveryEmailAndOtp(usernameOrEmail, otp));
                      }}
                    >
                      Next Step
                    </Button>
                  </div>
                ) : resetPassComp === "step 3" ? (
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Enter New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPasswiord"
                      aria-describedby="passwordHelp"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                ) : (
                  ""
                )}

                {resetPassComp === "" ? (
                  <div className="mb-3 text-center button signup-btn">
                    <button
                      type="submit"
                      className="btn btn-color text-white btn-lg py-2 px-5 mt-3 mb-5"
                      onClick={handleSubmit}
                    >
                      Log in
                    </button>
                  </div>
                ) : resetPassComp === "step 1" ? (
                  <div></div>
                ) : resetPassComp === "step 2" ? (
                  <div></div>
                ) : resetPassComp === "step 3" ? (
                  <div className="mb-3 text-center button signup-btn">
                    <button
                      type="submit"
                      className="btn btn-color text-white btn-lg py-2 px-5 mt-3 mb-5"
                      onClick={handleSubmit}
                    >
                      Log in
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
