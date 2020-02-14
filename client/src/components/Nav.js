import React from 'react'
import '../styles/nav.css'
function Nav() {
    return (
        <div id="nav">
            <div id="ham">

            </div>
            <div id="log">
                <img src={require('../icons/user.png')} id="user_img" alt="User"></img>
            </div>
        </div>
    )
}

export default Nav
