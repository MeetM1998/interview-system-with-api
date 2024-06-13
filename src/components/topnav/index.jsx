import React from "react";

import Dropdown from "../Dropdown";
import user_image from "../../Assets/images/OIP.jfif";

import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../Redux/Auth/action";
import LogoutIcon from "@mui/icons-material/Logout";

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const Topnav = () => {
  const name = useSelector(
    (state) => state.auth.user?.first_name || state.auth.user?.data?.first_name
  );

  const curr_user = {
    display_name: name,
    image: user_image,
  };

  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("auth_token");
    dispatch(authActions.logout());
  };

  return (
    <div className="topnav">
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown customToggle={() => renderUserToggle(curr_user)} />
        </div>
        <Button onClick={logoutHandler} variant="text">
          <LogoutIcon />
        </Button>
      </div>
    </div>
  );
};

export default Topnav;
