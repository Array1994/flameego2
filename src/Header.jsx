import {useState} from "react";
import { Link } from "react-router-dom";

 
function Header(){
    const [drop, setDrop] = useState(false)
    const [noti, setNoti] = useState(false)
   
    function toggle(){
        setDrop((prevDrop) => {
            return !prevDrop
        } )
    }
    function toggle2(){
        setNoti((prevNoti) =>{
            return !prevNoti
        })
    }
   

    return (
        <>
        <div id="header">
                <div className="logo">
                <Link className="link"to="/"><h3>Flameego</h3></Link>
                <img id="noti" onClick={toggle2} className="icon" src="notification.png"/>
                </div>
                <div id="account">
                    <img id='account-icon' src="/account.png"/>
                    <span>Ayobami  <img id="down-arrow" onClick={toggle} src="./arrow-down.png"/></span>
                </div>
                
                
        </div>
        <div id="drop" className={`drop-down ${drop ? "" : "hideen"} `}>
                    <Link className="link" to="/settings"><p className="drop"><img  className="icon " src="/settings.png"/>  settings</p></Link>
                    <Link className="link" to="/support"><p className="drop"><img className="icon " src="/support.png"/>   support</p></Link>
                    <Link className="link"><p className="drop"><img className="icon " src="/settings.png"/>  logout</p></Link>
        </div>
        <div id="notification" className={`${noti ? "" : "hideen"} `}>
            <p>you have no notification</p>
        </div>
        </>
    )
}

export default Header