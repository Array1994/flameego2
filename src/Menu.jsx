import React from "react";

 
function Menu(){
    return (
        <div id="menu">
            <p>Main</p>
            <ul>
                <li className="list"><img className="list-icon" src="./public/dashboard.png"/>Dashboard</li>
                <li className="list"><img className="list-icon" src="./public/strategy.png"/>Strategy</li>
                <li className="list"><img className="list-icon" src="./public/support.png"/>Support</li>
                <li className="list"><img className="list-icon" src="./public/settings.png"/>Settings</li>
            </ul>
        </div>
        
    )
}

export default Menu