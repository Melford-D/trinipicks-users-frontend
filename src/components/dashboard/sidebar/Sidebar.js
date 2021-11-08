import "./Sidebar.css";
import { ExitToApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/tp-logo.PNG";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

export default function Sidebar() {
  const history = useHistory();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    swal("You are logged out successfully");
    history.push("/");
    // hot fix for illegal login
    window.location.reload();
  };
  return (
    <div className="sideBar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu topBar">
          <div className="trinipicks-logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem exit" onClick={logOut}>
                <ExitToApp className="sidebarIcon" />
                Log out
              </li>
            </Link>
            <li className="version">v.2.12.5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
