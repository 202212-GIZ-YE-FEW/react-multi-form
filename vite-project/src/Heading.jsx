import './Heading.css'
function Heading({title , desc}){
 return(
    <>
       <div className="Heading">
        <h2>{title}</h2>
        <p>{desc}</p>
       </div>
    </>
 )
}

export default Heading