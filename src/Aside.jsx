import React from "react";
import CryptoList from "./components/CryptoList";
import "./crypto.css"

 
function Aside(){
    return (
        <div id="aside">
            <h1>Dashboard</h1>
            <CryptoList/>   
        </div>
        
    )
}

export default Aside