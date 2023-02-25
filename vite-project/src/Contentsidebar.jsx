function Contentsidebar({number ,Step , info}){
    return(
     <>
       <div className="sidebarcontent">
        <span className='number'>{number}</span>
        <div>
            <h5>{Step}</h5>
            <span>{info}</span>
        </div>
       </div>
     </>
    )
}

export default Contentsidebar