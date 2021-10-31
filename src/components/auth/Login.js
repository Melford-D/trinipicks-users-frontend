import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar";
import Celebration from "../../assets/img/celebration-2.png";

// login action
import { login } from "../../Actions/UserAuthActions/UserLoginAction";

// created this components for user experience and user interface notifiation
import Message from '../MessageComp/Message';
import Loader from '../LoaderComp/Loader';

function Login({ location, history }) {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const {loading, error, userInfo} = userLogin;
  console.log('user info:>>', userInfo);

  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // created this piece of state to monitor clientside input errors
  const [errorMessage, setErrorMessage] = useState('');
  const [clientError, setClientError] = useState(false);

  useEffect(() => {
    if(userInfo) {
      // if login success redirect here
      history.push('/userdashboard');
    }
  }, [history, userInfo])

  const handleSubmit = (e) => {
    e.preventDefault();

   // user input validation
   if(usernameOrEmail.length < 5) {
      setErrorMessage('Please username / email should have more than 5 characters');
      setClientError(true);
   } else if (password < 5) {
      setErrorMessage('Please password should have more than 5 characters');
      setClientError(true);
   } else {
    setErrorMessage(' ')
    setClientError(false);
    dispatch(login(usernameOrEmail, password));
   }

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

              {
                clientError ? (
                  <Message variant='danger'>{errorMessage}</Message>
                ) : 
                error ? (
                  <Message variant='danger'>{error}</Message>
                ) :
                loading ? (
                  <Loader />
                ) : ''
              }

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
                    value={usernameOrEmail}
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                  />
                </div>

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
                    <span className="agreement"> Reset here</span>
                  </label>
                </div>

                <div className="mb-3 text-center button signup-btn">
                  <button
                    type="submit"
                    className="btn btn-color text-white btn-lg py-2 px-5 mt-3 mb-5"
                    onClick={handleSubmit}
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
