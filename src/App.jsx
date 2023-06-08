import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Header from "./Header.jsx"
import Aside from "./components/Aside.jsx"
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
                <Link className="link"to="/" ><li className="list"><img className="list-icon" src="/dashboard.png"/>Dashboard</li></Link>
                <Link className="link"to="/strategy" ><li className="list"><img className="list-icon" src="/strategy.png"/>Strategy</li></Link>
                <Link className="link"to="/support" ><li className="list"><img className="list-icon" src="/support.png"/>Support</li></Link>
                <Link className="link"to="/settings" ><li className="list"><img className="list-icon" src="/settings.png"/>Settings</li></Link>

            </ul>
        </div>
      <div className='aside'>
        <Routes>
          <Route path='/' element={<Aside/>}/>
          <Route path='/strategy' element={<Strategy/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
        
      </div>
     
     
    </div>
  )
}

export default App
