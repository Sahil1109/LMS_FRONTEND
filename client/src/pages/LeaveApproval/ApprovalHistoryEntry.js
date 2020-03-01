import React from "react";
import getStringDate from '../../handlers/StringData'

function ApprovalHistoryEntry(props) {
  
  return (
    <tr>
      <td>{props.entry.leaveType}</td>
      <td>{props.entry.firstName}</td>
      <td>{getStringDate(props.entry.startDate)}</td>
      <td>{getStringDate(props.entry.endDate)}</td>
      <td>{props.entry.days}</td>
      <td>{props.entry.status}</td>
    </tr>
  );
}

export default ApprovalHistoryEntry;
