import { useState } from 'react'
import './App.css'
import './index.css'
import './assets/css/font.css'

import Contentsidebar from './Contentsidebar'
import Content from './Content'
import ContentTwo from './ContentTwo'
import ContentThree from './ContentThree'
import ContentFour from './ContentFour'

function App() {
  const [step, setStep] = useState(1);
  function handleClick(step) {
    setStep(step)
  }
  return (
    <div className="App">
      <div className="container">
        <div className='innercontainer'>
          <div className='row g-0'>
            <div className='col-lg-3 col-md-12 col-sm-12'>
              <div className="leftside">
                <div className="innerleftside">
                  <Contentsidebar onClick={() => { handleClick(1) }} number="1" Step="STEP 1" info="YOUR INFO" />
                  <Contentsidebar onClick={() => { handleClick(2) }} number="2" Step="STEP 2" info="SELECT PLAN" />
                  <Contentsidebar onClick={() => { handleClick(3) }} number="3" Step="STEP 3" info="ADD-ONS" />
                  <Contentsidebar onClick={() => { handleClick(4) }} number="4" Step="STEP 4" info="SUMMARY" />
                </div>
              </div>
            </div>
            {step == 1 && <Content />}
            {step == 2 && <ContentTwo/> }
            {step == 3 && <ContentThree />}
            {step == 4 && <ContentFour />}

          </div>
        </div>

      </div>

    </div>
  )
}

export default App
