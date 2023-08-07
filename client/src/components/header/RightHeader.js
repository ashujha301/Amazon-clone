import React, { useContext, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "../context/ContextProvider";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";

export const RightHeader = () => {
  const { account, setAccount } = useContext(LoginContext);
  return (
    <>
      <div className="rightheader">
        <div className="right_nav">
          {account ? (
            <Avatar className="avatar2">
              {account.name[0].toUpperCase()}{" "}
            </Avatar>
          ) : (
            <Avatar className="avatar"> </Avatar>
          )}
          <div className="nav_btn">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Shop By Category</NavLink>
            <Divider />
            <NavLink to="/">Today's Deal</NavLink>
            {account ? (
              <NavLink to="/buynow">Your Orders</NavLink>
            ) : (
              <NavLink to="/login">Your Orders</NavLink>
            )}
            <Divider />
            <div className="flag">
              <NavLink to="/">Settings</NavLink>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightHeader;