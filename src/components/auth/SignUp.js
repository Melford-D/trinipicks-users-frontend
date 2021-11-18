import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar";
import Celebration from "../../assets/img/celebration-2.png";
import PhoneNumbers from "./PhoneNumbers";

import Message from "../MessageComp/Message";
import Loader from "../LoaderComp/Loader";
import { userSignupAction } from "../../Actions/UserAuthActions/UserSignupAction";

function SignUp({history}) {
  const dispatch = useDispatch();

  const userSignup = useSelector((state) => state.userSignup);
  const {loading, error, response} = userSignup;
  console.log(response)

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreement, setAgreement] = useState(false);

  // created this piece of state to monitor clientside input errors
  const [errorMessage, setErrorMessage] = useState("");
  const [clientError, setClientError] = useState(false);

  useEffect(() => {
    if(response === 'Email sent') {
      history.push('/user-dashboard')
    }
  }, [history, response])

  const handleRegisterUser = (e) => {
    e.preventDefault();

    const userRegDsta = {
      name: fullName,
      email,
      phone_number: phoneNumber,
      password,
      country: 'Nigeria'
    };

      // user input validation
      if (fullName.length < 5) {
        setErrorMessage(
          "Please full name should have more than 5 characters"
        );
        setClientError(true);
      } else if (!email.includes('@')) {
        setErrorMessage("Please enter correct email");
        setClientError(true);
      } else if (password < 5 && password !== confirmPassword) {
        setErrorMessage("Please password should have more than 5 characters and should be the same with confirm password");
        setClientError(true);
      } else {
        setErrorMessage(" ");
        setClientError(false);
        dispatch(userSignupAction(userRegDsta));
      }

    console.log(
      {
        fullName,
        email,
        phoneNumber,
        username,
        password,
        confirmPassword,
        agreement
      }
    )
  }

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

              {clientError ? (
                <Message variant="danger">{errorMessage}</Message>
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : loading ? (
                <Loader />
              ) : (
                ""
              )}

              <form>
                <div className="mb-3">
                  <label for="exampleInputFullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFullName"
                    aria-describedby="emailHelp"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Phone Number
                  </label>
                  <PhoneNumbers 
                    phoneNumber={phoneNumber} 
                    setPhoneNumber={setPhoneNumber} 
                    />
                  {/* <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  /> */}
                </div>
                <div className="mb-3">
                  <label for="exampleInputUsername" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputUsername"
                    aria-describedby="emailHelp"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3 d-flex justify-content-between password-section">
                  <div className="mb-3">
                    <label for="exampleInputPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword"
                      aria-describedby="emailHelp"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputConfirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputConfirmPassword"
                      aria-describedby="emailHelp"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="checkbox"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    onChange={() => setAgreement(!agreement)}
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
                    onClick={handleRegisterUser}
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
