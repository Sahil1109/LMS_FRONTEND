import React from 'react'

function LeaveEntry(props) {
    let style={
        color:props.entry.status==='rejected'?'#de0917':(props.entry.status==='approved'?'#0fad07':(props.entry.status==='pending'?'#d9d904':'black'))
    }
    return (
        <tr style={style}>
            <td>{props.entry.type}</td>
            <td>{props.entry.date}</td>
            <td>{props.entry.days}</td>
            <td >{props.entry.status}</td>
            <td><img src={require('../icons/pen.png')} id="pen_img" alt="User"></img></td>
        </tr>
    )
}

export default LeaveEntry


