import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Aside from "./components/Aside.jsx"
import Support from './components/Support.jsx'
import Settings from './components/Settings.jsx'
import Strategy from './components/Strategy.jsx'
import Layout from './components/Layout.jsx'
import './App.css'


function App() {
  return (
    <>
        <Routes>
          <Route element={<Layout/>}>
              <Route index element={<Aside/>}/>
              <Route path='/strategy' element={<Strategy/>}/>
              <Route path='/support' element={<Support/>}/>
              <Route path='/settings' element={<Settings/>}/>
          </Route>
          
        </Routes>
    </>
  )
}

export default App
