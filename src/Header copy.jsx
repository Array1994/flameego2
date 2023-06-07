import React from "react";

 
function Header(){
    return (
        <div id="header">
                <div className="logo">
                <h3>Flameego</h3>
                <img className="icon" src="./public/notification.png"/>
                </div>
                <div id="account">
                    <img id='account-icon' src="/account.png"/>
                    <span>Ayobami</span>
                </div>
                
                
        </div>
        
    )
}

export default Header