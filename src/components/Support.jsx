import React from "react";

function  Support(){
return(
    <div className="settings-container">
        <div className="setting-header">
            <h1>SUPPORT CENTER</h1>
            <p><img className="icon" src="/dashboard.png"/>Home / Support</p>
                  
        </div>
        <div className="section">
            <h5 className="fade">FAQ</h5><br/>
            <p>Frequenctly asked questions</p>
        </div>
        <div className="section">
            <div className="section-c">
                <h5>Talk to a support person</h5>
                <p className="fade">Hi, welcome to Flameego and thank you for contacting oour support</p>
                <p className="fade">Our services are provided over 1M+ users, therfore we kindly ask you for first check the FAQs above before contacting our support</p>
                <p className="fade">You Can contact our support using the below platforms</p>
                <button id="btn-telegram">Connect on Telegram</button> <button id="btn-mail">Send us a mail</button>
            </div>
            
        </div>
    </div>
)
}
export default Support