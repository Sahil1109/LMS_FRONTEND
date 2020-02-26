import React from "react";
import "./side.css";
import { useHistory } from "react-router-dom";

function SideBar() {

  //fake data
  const role='admin'

  //Using routing to link logout button and apply leave button
  const history = useHistory();


  const loadAnotherPage=(page)=>{
    switch(page){
      case 'dashboard':
        history.push("/");
        break;
      case 'applyLeave':
        history.push("/addLeave");
        break;
      default:
        history.push("/");
        break;
    }
  }

  return (
    <div id="sidebar">

      <button type="button" onClick={()=>{loadAnotherPage('dashboard')}} id="dashb" key="2">
        Dashboard
      </button>

      <button type="button" onClick={()=>{loadAnotherPage('applyLeave')}} key="3" id="apply">
        Apply For Leave{" "}
        <img
          src={require("../../icons/arrowb.png")}
          id="user_img"
          alt="User"
        ></img>
      </button>

      <button type="button" onClick={()=>{loadAnotherPage('applyLeave')}} key="4" id="approval">
        Leave Approval{" "}
        <img
          src={require("../../icons/arrowb.png")}
          id="user_img"
          alt="User"
        ></img>
      </button>

      {
        role==='admin'?
        <button type="button" onClick={()=>{loadAnotherPage('applyLeave')}} key="5" >
        Add Employee{" "}
        <img
          src={require("../../icons/arrowb.png")}
          id="user_img"
          alt="User"
        ></img>
        </button>:''

      }

    </div>
  );
}

export default SideBar;
