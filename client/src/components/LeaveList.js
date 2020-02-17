import React,{useState} from 'react'
import LeaveListEntry from './LeaveListEntry'
import leaves from '../data/leaves'
import '../styles/leaveList.css'

function LeaveList() {
    let [leaveslist,setLeaveslist]=useState(leaves)


    const getData=()=>{
        return (leaveslist.map((leave)=>{
            return <LeaveListEntry leave={leave}></LeaveListEntry>
        }))
    }
    return (
        <div id="leavelist">
            <table>
                <tr>
                    <th> </th>
                    <th>Total</th>
                    <th>Available</th>
                    <th>Taken</th>
                    
                </tr>
                {getData()}
            </table>
            
        </div>
    )
}

export default LeaveList
