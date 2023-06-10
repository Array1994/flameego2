import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../Header"
import Menu from "./Menu"
import Footer from "./Footer"

function Layout(){
    return(
    <div>
      <Header/>
      <div id='menu-aside'>
        <Menu/>
      <div className='aside'>
        <Outlet/>
      </div>
        
      </div>
     
     <Footer/>
    </div>
    )
}
export default Layout