import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import SideBar from './Components/SideBar/SideBar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="PagesContainer flex ">
        <SideBar />
        <div className="otherPages">
          OtherPages
        </div>
      </div>
    </div>
  )
}

export default App
