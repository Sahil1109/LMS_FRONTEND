import React from "react";
import getStringDate from '../../handlers/StringData'

function PendingRequestEntry(props) {
  

  return (
    <tr>
      <td>{props.entry.leaveType}</td>
      <td>{props.entry.firstName}</td>
      <td>{getStringDate(props.entry.startDate)}</td>
      <td>{getStringDate(props.entry.endDate)}</td>
      <td>{props.entry.days}</td>
      <td><button type="button" onClick={()=>props.onStatusChange(props.entry,props.entry._id,"approved")}>Accept</button> <button type="button" onClick={()=>props.onStatusChange(props.entry._id,"rejected")}>Reject</button></td>
    </tr>
  );
}

export default PendingRequestEntry;
