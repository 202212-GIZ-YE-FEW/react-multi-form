function Contentsidebar({number ,Step , info , onClick}){
    return(
     <>
       <div className="sidebarcontent"onClick={onClick}>
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