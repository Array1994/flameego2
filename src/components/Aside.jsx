import React from "react";
import CryptoList from "./CryptoList";
import "./crypto.css"
import Footer from "./Footer";

 
function Aside(){
    return (
        <div id="aside">
            <h1>Dashboard</h1>
            <CryptoList/>   
            <Footer/>
        </div>
        
    )
}

export default Aside