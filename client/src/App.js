import React from 'react';

import Nav from './components/Nav'
import Sidebar from './components/SideBar'

import LeaveTable from './components/LeaveTable'
import LeaveList from './components/LeaveList'
import { connect } from 'react-redux'
import EmpDashboard from './components/EmpDashboard'

import './App.css';

function App(props) {
  return (
    <div className="App" id="app">
      {/* this will contain only our navbar */}
      <div id="top">
      <Nav></Nav>
      </div>

      
      <div id="main">
      {/* this will also stay same in every dashboard except the botton component will change */}
      <Sidebar></Sidebar>
      {/* your application div should be placed inside a div like this */}
      <EmpDashboard></EmpDashboard>
      <button onClick={props.addLeave}>Add Leave</button>

      </div>
      
     
     
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    addLeave: () => dispatch({
      type: 'ADD_LEAVE_REQUEST',
      data: {
        id: 5,
        type: 'Casual',
        date: '14 Feb 2020',
        days: 3,
        status: 'pending'
      },
    }),
  }
}

export default connect(null, mapDispatchToProps)(App);
