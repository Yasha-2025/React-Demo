import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Login = () => {
    return (
        <div className='login-reg-page'>
            <Navbar></Navbar>
            <div className='login-reg'>
                <h1>Login</h1>
                <form id='login-reg-form'>
                    <label>Email id</label>
                    <input type="email" name="login-email" placeholder='abc@example.com' required />
                    <label>Password</label>
                    <input type="password" name="login-password" placeholder='Enter Your Password' required />
                    <label className='terms-label'> <input type="checkbox" name="login-terms" required /> By continuing, I Agree to the Terms of Use and Privacy Policy</label>
                    <button>Login</button>
                </form>
                <Link to="/forgot-password" className='forgot-link'>
                    Forgot Password?
                </Link>
            </div>
        </div>
    )
}

export default Login