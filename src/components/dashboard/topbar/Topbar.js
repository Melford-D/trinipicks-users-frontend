import "./Topbar.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Topbar() {
  const [avatar, setAvatar] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    setAvatar(userInfo.payload.user.avatar);
  }, [userInfo.payload.user.avatar]);
  return (
    <>
      <div className="topBar">
        <div className="topRight">
          <div className="profile-name">
            <img src={avatar} alt="" className="topAvatar" />
          </div>
        </div>
      </div>
    </>
  );
}
