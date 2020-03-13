import React from "react";
import { TableCell, TableRow } from "@material-ui/core/";
import {styled } from "@material-ui/core/styles";
import stringCap from "../../handlers/stringCap"

const LeaveListRow=(props)=>{
  return (
    <TableRow>
      <TableCell
        style={{ color: "#700688", fontWeight: "bold" }}
        component="th"
        scope="row"
      >
        {stringCap(props.row.type)}
      </TableCell>
      <TableCell align="right">{props.row.total}</TableCell>
      <TableCell align="right">{props.row.applied}</TableCell>
      <TableCell align="right">{props.row.availed}</TableCell>
      <AvailableCell align="right">{props.row.available}</AvailableCell>
    </TableRow>
  );
}

const AvailableCell = styled(TableCell)(({ theme }) => ({
    color:theme.palette.secondary.main,
    fontWeight:"bold"
  }));

export default LeaveListRow
