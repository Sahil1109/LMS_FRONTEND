import React from 'react'
import '../styles/empdashboard.css'
import LeaveTable from './LeaveTable'
import LeaveList from './LeaveList'

function EmpDashboard() {
    return (
        <div id="empd">
            <LeaveList></LeaveList>
            <LeaveTable></LeaveTable>
            
        </div>
    )
}

export default EmpDashboard
