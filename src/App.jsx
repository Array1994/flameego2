import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Header from "./Header.jsx"
import Menu from "./Menu.jsx"
import Aside from "./Aside.jsx"
import Support from './components/Support.jsx'
import Settings from './components/Settings.jsx'
import Strategy from './components/Strategy.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(1)
console.log(count)
  return (
    <div>
      <Header/>
      <div id='menu-aside'>
      
        <div id="menu">
            <p>Main</p>
            <ul>
                <Link className="link"to="/" ><li className="list"><img className="list-icon" src="./public/dashboard.png"/>Dashboard</li></Link>
                <Link className="link"to="/strategy" ><li className="list"><img className="list-icon" src="./public/strategy.png"/>Strategy</li></Link>
                <Link className="link"to="/support" ><li className="list"><img className="list-icon" src="./public/support.png"/>Support</li></Link>
                <Link className="link"to="/settings" ><li className="list"><img className="list-icon" src="./public/settings.png"/>Settings</li></Link>

            </ul>
        </div>

        <Routes>
          <Route path='/' element={<Aside/>}/>
          <Route path='/strategy' element={<Strategy/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
            
        
      </div>
     
     
    </div>
  )
}

export default App
