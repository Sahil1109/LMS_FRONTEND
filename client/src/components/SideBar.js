import React from 'react'
import '../styles/side.css'

function SideBar() {
    return (
        <div id="sidebar">
            <button type="button" id="dashb" key="2">DashBoard</button>
            <button type="button" key="3" id="apply">Apply For Leave <img src={require('../icons/arrowb.png')} id="user_img" alt="User"></img></button>
        </div>
    )
}


export default SideBar
