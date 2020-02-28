import React, { useContext } from "react";
//Fixed components
import Nav from "./components/NavAndSide/Nav";
import Sidebar from "./components/NavAndSide/SideBar";
//Pages
import EmpDashboard from "./pages/EmpDashboard/EmpDashboard";
import Login from "./pages/Login/Login";
import AddLeave from "./pages/AddLeave/AddLeave";
//css file import
import "./App.css";

//Reducer import
import { connect } from "react-redux";
//Router import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//importing providers
import { EmpIdContext } from "./contexts/EmpId/EmpIdContext";

import LeaveApproval from "./pages/LeaveApproval/LeaveApproval"
function App(props) {
  let [empid, setEmpid] = useContext(EmpIdContext);

  return empid != null ? (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div className="App" id="app">
        <div id="top">
          <Nav></Nav>
        </div>

        <div id="main">
          <Sidebar></Sidebar>

          <div>
            <Switch>
              <Route path="/addLeave">
                <AddLeave></AddLeave>
              </Route>
              <Route path="/leaveApproval">
                <LeaveApproval></LeaveApproval>
              </Route>
              <Route path="/">
                <EmpDashboard />
              </Route>
            </Switch>
          </div>

         
        </div>
      </div>
    </Router>
  ) : (
    <Login />
  );
}

export default App;
