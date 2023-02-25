import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './assets/css/font.css'
import SideBar from './SideBar'
import Content from './Content'

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className='innercontainer'>
          <div className='row g-0'>
            <SideBar />
            <Content />
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
