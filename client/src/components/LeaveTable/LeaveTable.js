import React,{useContext}from "react";
import LeaveEntry from "./LeaveEntry";
import { connect } from "react-redux";

import getLeaveDuration from '../../handlers/noofdays'

import {HistoryContext} from '../../contexts/History/HistoryContext'
import "./LeaveTable.css";


function LeaveTable(props) {

  let [history,setHistory]=useContext(HistoryContext)
  
  const getRows = () => {
    return history.map(entry => {
      entry.nodays=getLeaveDuration(entry.startDate,entry.endDate)
      return <LeaveEntry id={entry.id} entry={entry}></LeaveEntry>;
    });
  };
  
  return (
    history===undefined?null:
    <div id="table">
      <table>
        <tbody>
          <tr id="thr">
            <th>Leave Type</th>
            <th>From</th>
            <th>To</th>
            <th>Days</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </tbody>
        
        {getRows()}
      </table>
    </div>
  );
}



export default LeaveTable;
