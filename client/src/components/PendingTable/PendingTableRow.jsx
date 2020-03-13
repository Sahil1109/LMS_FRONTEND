import React from "react";
import { TableCell, TableRow, Link, Button } from "@material-ui/core/";
import { styled } from "@material-ui/core/styles";
import getStringDate from '../../handlers/StringData'
import stringCap from "../../handlers/stringCap"
const PendingTableRow = props => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {stringCap(props.row.leaveType)}
      </TableCell>
      <TableCell align="right">{getStringDate(props.row.startDate)}</TableCell>
      <TableCell align="right">{getStringDate(props.row.endDate)}</TableCell>
      <TableCell align="right">{props.row.daysCount}</TableCell>
      <TableCell align="center">
        <AcceptButton variant="contained" onClick={()=>{props.onStatusChange(props.row.id,"approved")}}>Accept</AcceptButton>
        <RejectButton variant="contained" onClick={()=>{props.onStatusChange(props.row.id,"rejected")}}>Reject</RejectButton>
      </TableCell>
    </TableRow>
  );
};



const AcceptButton = styled(Button)(({ theme }) => ({
  padding: "0.4rem",
  fontSize: "0.5rem",
  color: "white",
  background: "#32cb00"
}));

const RejectButton = styled(Button)(({ theme }) => ({
  padding: "0.4rem",
  fontSize: "0.5rem",
  color: "white",
  background: "#a30000",
  marginLeft:"2px"
}));

export default PendingTableRow;
