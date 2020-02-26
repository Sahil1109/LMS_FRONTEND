import React from "react";
import "./side.css";
import { useHistory } from "react-router-dom";

function SideBar() {

  //Using routing to link logout button and apply leave button
  const history = useHistory();

  const loadDashboard = () => {
    history.push("/");
  };

  const loadApplyLeave = () => {
    history.push("/addLeave");
  };

  return (
    <div id="sidebar">
      <button type="button" onClick={loadDashboard} id="dashb" key="2">
        Dashboard
      </button>
      <button type="button" onClick={loadApplyLeave} key="3" id="apply">
        Apply For Leave{" "}
        <img
          src={require("../../icons/arrowb.png")}
          id="user_img"
          alt="User"
        ></img>
      </button>
    </div>
  );
}

export default SideBar;
