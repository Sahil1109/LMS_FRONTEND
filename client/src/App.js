import React from 'react';
import Nav from './components/Nav'
import Sidebar from './components/SideBar'
import LeaveTable from './components/LeaveTable'
import LeaveList from './components/LeaveList'
import EmpDashboard from './components/EmpDashboard'
import './App.css';

function App() {
  return (
    <div className="App" id="app">
      <div id="top">
      <Nav></Nav>
      </div>

      
      <div id="main">
      <Sidebar></Sidebar>
      {/* your application div should be placed inside a div like this */}
      <EmpDashboard></EmpDashboard>
      </div>
      
      
     
     
    </div>
  );
}

export default App;
