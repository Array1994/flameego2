import {useState} from "react";
import {Link} from "react-router-dom"

function  Settings(){
    const [formData, setFormData] = useState({
        fname : "Akintola",
        lname : "Ayobami ",
        email : "fayoyiwaay@gmail.com ",
        phone: "08038050741",
        referer: "muyitez",
        username: "muyitez"

    })
    function handleChange (event){
        setFormData(prevFormData => {
            return {
                ...prevFormData, [event.target.name] : event.target.value
            }
        })
       
    }
    function handleSubmit(event){
        event.preventDefault()
       
    }
return(
    <div className="settings-container">
        <div className="setting-header">
            <h1>SETTINGS</h1>
            <p><img className="icon" src="/dashboard.png"/>Home / Settings</p>
                  
        </div>
        <div className="general-settings">
        <h3>General Settings</h3>
        <form  className="setting-form">
            <label >First name</label>
            <label >Last name</label>
            <input type="text" id="fname" name="fname" onChange={handleChange} value={formData.fname}/>
            <input type="text" id="lname" name="lname" onChange={handleChange} value={formData.lname}/>
            <label >Email Address</label>
            <label >Phone Number</label>
            <input type="email" id="email" name="email" onChange={handleChange} value={formData.email}/>
            <input type="number" id="fname" name="phone" onChange={handleChange} value={formData.phone}/>
            <label >Referer</label>
            <label >Username</label>
            <input type="text" id="referer" name="referer" onChange={handleChange} value={formData.referer}/>
            <input type="text" id="username" name="username" onChange={handleChange} value={formData.username}/>
            <p>Note that you change your password you will be logged out. <Link className="danger">Click Here</Link> to change passsword</p>
            <p></p>
            <button id="setting-submit" onClick={handleSubmit}><div  className="inside"><h5>Update</h5> <img   src="/arrow-down.png"/></div></button>
        </form>
        </div>

    </div>
  
)
}
export default Settings