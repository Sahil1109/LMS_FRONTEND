import React from 'react'
import '../styles/nav.css'
function Nav(props) {
    return (
        <div id="nav">
            <div id="ham">
            <img src={require('../icons/block8.png')} id="logo_img" alt="User"></img>
            </div>
            <div id="notep">
                <img src={require('../icons/notepad.png')} id="note_img" alt="User"></img> <span>LMS | EMPLOYEE</span>
            </div>
            <div onClick={() => props.setAuthentication(false)} id="log">
                <img src={require('../icons/userb.png')} id="user_img" alt="User"></img> <span id="sep">|</span> <a href="#"><img src={require('../icons/logout.png')} id="logout_img" alt="User"></img></a> 
            </div>
        </div>
    )
}

export default Nav
