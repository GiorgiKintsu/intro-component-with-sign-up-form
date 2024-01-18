import './FormDiv.css'

function FormDiv(){
    return(
        <div className='formWrapper'>
            <form>
                <div>
                    <input name='FirstName' type="text" placeholder='First Name' />
                </div>
                <div>
                    <input name='LustName' type="text" placeholder='Lust Name' />
                </div>
                <div>
                    <input name='Email' type="email" placeholder='Email Address' />
                </div>
                <div>
                    <input name='Password' type="password" placeholder='Password'/>
                </div>
                <button type='submit'>CLAIM YOUR FREE TRIAL</button>
            </form>
            <h6 className='agreengText'>By clicking the button, you are agreeing to our <span className='agreengTextSp'> Terms and Services </span></h6>
        </div>
    )
}
export default FormDiv