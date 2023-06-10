import React from "react";
import {Link} from 'react-router-dom'
 
function Menu(){
    return (
        <div id="menu">
            <p>Main</p>
            <ul>
                <Link className="link"to="/" ><li className="list"><img className="list-icon" src="/dashboard.png"/>Dashboard</li></Link>
                <Link className="link"to="/strategy" ><li className="list"><img className="list-icon" src="/strategy.png"/>Strategy</li></Link>
                <Link className="link"to="/support" ><li className="list"><img className="list-icon" src="/support.png"/>Support</li></Link>
                <Link className="link"to="/settings" ><li className="list"><img className="list-icon" src="/settings.png"/>Settings</li></Link>
            </ul>
        </div>
        
    )
}

export default Menu