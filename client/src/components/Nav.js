import React from 'react'
import '../styles/nav.css'
function Nav() {
    return (
        <div id="nav">
            <div id="ham">

            </div>
            <div id="notep">
                <img src={require('../icons/notepad.png')} id="note_img" alt="User"></img> <span>LMS | EMPLOYEE</span>
            </div>
            <div id="log">
                <img src={require('../icons/userb.png')} id="user_img" alt="User"></img>
            </div>
        </div>
    )
}

export default Nav
