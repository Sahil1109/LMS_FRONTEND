import React from 'react'
import LeaveListEntry from './LeaveListEntry'
import { connect } from 'react-redux'
import '../styles/leaveList.css'

function LeaveList(props) {
    const getData=()=>{
        return (props.leaves.map((leave, index)=>{
            return <LeaveListEntry key={index} leave={leave}></LeaveListEntry>
        }))
    }
    return (
        <div id="leavelist">
            <table>
                <tr>
                    <th> </th>
                    <th>Total</th>
                    <th>Available</th>
                    <th>Avail</th>
                    
                </tr>
                {getData()}
            </table>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        leaves: state.leaves
    }
}

export default connect(mapStateToProps)(LeaveList)
