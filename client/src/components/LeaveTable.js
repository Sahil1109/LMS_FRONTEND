import React,{useState} from 'react'
import data from '../data/data'
import LeaveEntry from './LeaveEntry'
import '../styles/LeaveTable.css'

function LeaveTable() {
    let [entries,setEntry]=useState(data)

    const getRows=()=>{
        return entries.map((entry)=>{
            return <LeaveEntry id={entry.id} entry={entry}></LeaveEntry>
        })
    }

    return (
        <div id="table">
            <table>
                <tr id="thr">
                    <th>Leave Type</th>
                    <th>Date</th>
                    <th>Days</th>
                    <th>Status</th>
                    <th>Edit</th>
                </tr>
                {getRows()}
            </table>
            
        </div>
    )
}


export default LeaveTable