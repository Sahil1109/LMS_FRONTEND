import React,{useContext}from "react";
import LeaveEntry from "./LeaveEntry";
import { connect } from "react-redux";

import {HistoryContext} from '../../contexts/History/HistoryContext'
import "./LeaveTable.css";


function LeaveTable(props) {

  let [history,setHistory]=useContext(HistoryContext)
  

  const getRows = () => {
    return props.data.map(entry => {
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

//reducer code
const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(LeaveTable);
