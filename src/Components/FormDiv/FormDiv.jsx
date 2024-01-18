import { useState } from 'react'
import './FormDiv.css'

function FormDiv(){
    const [formInputs, setFormInputs] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
    })
    const [errorFormInputs, setErrorFormInputs] = useState({
    })

    const inputHandler = (e) =>{
        const {name, value} = e.target
        setFormInputs({
            ...formInputs,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (Object.keys(errorFormInputs).length === 0) {
            console.log("kargia");
        }
        errorHandler();
    }
    const errorHandler = () => {
        let errors = {};
        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;;

        if (formInputs.FirstName.trim() == "") {
            errors.FirstName = "First Name cannot be empty"
        }
        if (formInputs.LastName.trim() == "") {
            errors.LastName = "Last Name cannot be empty"
        }
        if (!emailRegex.test(formInputs.Email)) {
            errors.Email = "Looks like this is not an email"
        }
        if (formInputs.Password.trim() === "") {
            errors.Password = "Password cannot be empty"
        }
        setErrorFormInputs(errors)
    }
    

    return(
        <div className='formWrapper'>
            <form onSubmit={submitHandler}>
                <div style={errorFormInputs.FirstName && {borderColor: "red"}}>
                    <input name='FirstName'  type="text" placeholder='First Name' onChange={inputHandler} />
                    {errorFormInputs.FirstName && <img className='errorIcon' src='./error.svg'/>}
                </div>
                    {errorFormInputs.FirstName && <span className='error'>{errorFormInputs.FirstName}</span>}
                <div style={errorFormInputs.LastName && {borderColor: "red"}}>
                    <input name='LastName' type="text" placeholder='Lust Name' onChange={inputHandler} />
                    {errorFormInputs.LastName && <img className='errorIcon' src='./error.svg'/>}
                </div>
                    {errorFormInputs.LastName && <span className='error'>{errorFormInputs.LastName}</span>}
                <div style={errorFormInputs.Email && {borderColor: "red"}}>
                    <input name='Email' type="email" placeholder='Email Address' onChange={inputHandler} />
                    {errorFormInputs.Email && <img className='errorIcon' src='./error.svg'/>}
                </div>
                    {errorFormInputs.Email && <span className='error'>{errorFormInputs.Email}</span>}
                <div style={errorFormInputs.Password && {borderColor: "red"}}>
                    <input name='Password' type="password" placeholder='Password' onChange={inputHandler}/>
                    {errorFormInputs.Password && <img className='errorIcon' src='./error.svg'/>}
                </div>
                    {errorFormInputs.Password && <span className='error'>{errorFormInputs.Password}</span>}
                <button type='submit'>CLAIM YOUR FREE TRIAL</button>
            </form>
            <h6 className='agreengText'>By clicking the button, you are agreeing to our <span className='agreengTextSp'> Terms and Services </span></h6>
        </div>
    )
}
export default FormDiv