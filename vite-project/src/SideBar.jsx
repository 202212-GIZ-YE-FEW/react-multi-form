import Contentsidebar from './Contentsidebar'
import './index.css'

function SideBar() {
  return (
    <>
      <div className='col-3'>
        <div className="leftside">
          <div className="innerleftside">
            <Contentsidebar number="1" Step="STEP 1" info="YOUR INFO" />
            <Contentsidebar number="2" Step="STEP 2" info="SELECT PLAN" />
            <Contentsidebar number="3" Step="STEP 3" info="ADD-ONS" />
            <Contentsidebar number="4" Step="STEP 4" info="SUMMARY" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar