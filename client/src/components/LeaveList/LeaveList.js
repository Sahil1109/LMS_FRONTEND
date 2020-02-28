import React,{useContext}from "react";
import LeaveListEntry from "./LeaveListEntry";
import { connect } from "react-redux";

import {EmployeeContext} from '../../contexts/Emp/EmployeeContext'
import "./leaveList.css";

function LeaveList(props) {

  let [empInfo,setEmpInfo]=useContext(EmployeeContext)
  console.log('employee:',empInfo)

  const getData = () => {
    return props.leaves.map((leave, index) => {
      return <LeaveListEntry key={index} leave={leave}></LeaveListEntry>;
    });
  };

  return (
    <div id="leavelist">
      <table>
        <tbody>
          <tr>
            <th> </th>
            <th>Total</th>
            <th>
              Availed/
              <br />
              Applied
            </th>
            <th>Available</th>
          </tr>
        </tbody>

        

        {getData()}
        
      </table>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    leaves: state.leaves
  };
};

export default connect(mapStateToProps)(LeaveList);
