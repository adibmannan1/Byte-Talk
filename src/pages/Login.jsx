import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Byte Talk</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign In</button>
            </form>
            <p>Do not have an account? <span className='login'>Register</span></p>
        </div>
    </div>
  )
}

export default Login