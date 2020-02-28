import React,{useContext}from "react";
import PendingRequestEntry from './PendingRequestEntry'

//getting context
import {ApprovalHistoryContext} from '../../contexts/AprrovalHistory/ApprovalHistoryContext'
import "./PendingRequestTable.css";

function PendingRequests(props) {

      let [ahistory,setAhistory]=useContext(ApprovalHistoryContext)
  
      const getRows = () => {
        return ahistory.map(entry => {
          
            if(entry.status==='pending'){
              return (<PendingRequestEntry id={entry.id} entry={entry}></PendingRequestEntry>)
            }else{
              return
            }
            
          
        });
      };
      
  return (
    ahistory===undefined?null:
    <div>
      <h3 id="pendingHeading">PENDING REQUESTS</h3>
      <div id="tablePending">
        <table>
          <tbody>
            <tr id="thr">
              <th>Leave Type</th>
              <th>Employee Name</th>
              <th>From</th>
              <th>To</th>
              <th>No. of Days</th>
              <th>Action</th>
            </tr>

          </tbody>
          {getRows()}
        </table>
      </div>
    </div>
  );
}

export default PendingRequests;


