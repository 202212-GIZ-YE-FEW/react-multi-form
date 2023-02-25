import Heading from "./Heading"
import './Content.css'
import Input from "./Input"

function Content() {
    return (
        <>
            <div className='col-9' style={{ background: "#FFF" , height:'100%'}}>
                <div className="content">
                    <Heading title="Personl info" desc="Please provide your name, email address, and phone number." />
                    <form className='formcompenent'>
                        <Input label="Name" type="text" placeholder="Name" />
                        <Input label="Email Address" type="text" placeholder="Email Address" />
                        <Input label="Phone number" type="text" placeholder="+1 235 325 855" />
                        <button type="submit" className="btn-content">Next Step</button>
                    </form>

                </div>
            </div>
        </>


    )
}

export default Content
