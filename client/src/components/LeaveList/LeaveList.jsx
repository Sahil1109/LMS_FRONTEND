import React,{useContext}from "react";
import {styled } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core/";
import LeaveListRow from "./LeaveListRow";
import {EmployeeContext} from '../../contexts/Emp/EmployeeContext'



export default function SimpleTable() {
  let [empInfo,setEmpInfo]=useContext(EmployeeContext)
  return (
    empInfo===undefined ? null :
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <CustomHeader>
          <TableRow>
            <CustomHeaderCell> </CustomHeaderCell>
            <CustomHeaderCell align="right">Total</CustomHeaderCell>
            <CustomHeaderCell align="right">Applied</CustomHeaderCell>
            <CustomHeaderCell align="right">Availed</CustomHeaderCell>
            <CustomHeaderCell align="right">Available</CustomHeaderCell>
          </TableRow>
        </CustomHeader>
        <TableBody>
          {empInfo.leaves.map(row => {
            console.log('leave',row)
            return <LeaveListRow key={row.type} row={row}/>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const CustomHeader = styled(TableHead)(({ theme }) => ({
  background: theme.palette.primary.light
}));

const CustomHeaderCell = styled(TableCell)(({ theme }) => ({
  color:"white",
  fontWeight:"bold"
}));
