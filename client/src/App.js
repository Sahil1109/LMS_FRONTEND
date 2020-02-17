import React from 'react';

import Nav from './components/Nav'
import Sidebar from './components/SideBar'
import EmpDashboard from './components/EmpDashboard'

import './App.css';

function App() {
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
      </div>
      
      
     
     
    </div>
  );
}

export default App;
