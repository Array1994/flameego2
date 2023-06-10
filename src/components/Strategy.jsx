import React from "react";
import Footer from "./Footer";

function  Strategy(){
return(
    <div className="settings-container">
        <div className="setting-header">
            <h1>TRADING STRATEGY</h1>
            <p><img className="icon" src="/dashboard.png"/>Home / Strategy</p>    
        </div>
        <div id="section-s">
            <h5 className="fade">Add Strategy</h5>
            <div id="strategy-container">
                        <div id="plus-design"><span>+</span></div>
                <p className="fade">Add New Strategy</p>
           
            </div>
        </div>

    </div>
)
}
export default Strategy