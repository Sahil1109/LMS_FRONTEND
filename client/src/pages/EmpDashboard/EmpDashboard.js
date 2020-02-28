import React,{useContext,useEffect}from "react";
//importing components
import LeaveTable from "../../components/LeaveTable/LeaveTable";
import LeaveList from "../../components/LeaveList/LeaveList";
//importing contexts
import {EmpIdContext} from '../../contexts/EmpId/EmpIdContext'
import {EmployeeContext} from '../../contexts/Emp/EmployeeContext'
import {HistoryContext} from '../../contexts/History/HistoryContext'
//import axios
import axios from 'axios'
//importing css files
import "./empdashboard.css";
import Axios from "axios";

function EmpDashboard() {

  let [empid,setEmpid]=useContext(EmpIdContext)
  let [empInfo,setEmpInfo]=useContext(EmployeeContext)
  let [history,setHistory]=useContext(HistoryContext)
  
  const getEmpInfo=()=>{
    axios.get(`http://10.9.8.150:5000/api/employee/${empid._id}`)
    .then((res)=>{
      console.log(res.data)
      setEmpInfo(res.data)
    })
    .catch((err)=>{
      console.log('error while fetching emp info')
    })
  }

  const getHistory=()=>{
    axios.get(`http://10.9.8.150:5000/api/leave/approver/${empid._id}/1234/`)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log('error while fetching emp history')
    })
  }

  useEffect(()=>{
    getEmpInfo()
    getHistory()
  },[])
  
  return (
    <div id="empd">
      <LeaveList></LeaveList>
      <LeaveTable></LeaveTable>
    </div>
  );
}

export default EmpDashboard;
