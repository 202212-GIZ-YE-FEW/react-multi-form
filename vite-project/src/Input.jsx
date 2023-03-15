import './Content.css'
function Input({ label, type, placeholder}) {
    return (
        <>
            <label>
                {label} <br />
                <input type={type} placeholder={placeholder} />
            </label>
        </>
    )
}

export default Input