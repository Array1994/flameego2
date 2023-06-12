import React from "react";
import {NavLink} from 'react-router-dom'
 
function Menu(){
    return (
        <div id="menu">
            <p>Main</p>
            <ul>
                <NavLink 
                    className={({isActive}) => isActive ? "my-active" : "link"} 
                    to="/" ><li className="list"><img className="list-icon" src="/dashboard.png"/>Dashboard</li></NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "my-active" : "link"} 
                    to="/strategy" ><li className="list"><img className="list-icon" src="/strategy.png"/>Strategy</li></NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "my-active" : "link"}
                    to="/support" ><li className="list"><img className="list-icon" src="/support.png"/>Support</li></NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "my-active" : "link"}
                    to="/settings" ><li className="list"><img className="list-icon" src="/settings.png"/>Settings</li></NavLink>
            </ul>
        </div>
        
    )
}

export default Menu