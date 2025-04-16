import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='login-reg-page'>
            <Navbar></Navbar>
            <div className='login-reg'>
                <h1>Register</h1>
                <form id='login-reg-form'>
                    <label>Name</label>
                    <input type="text" name="reg-name" placeholder='Enter Your Name' required />
                    <label>Email id</label>
                    <input type="email" name="login-email" placeholder='abc@example.com' required />
                    <label>Password</label>
                    <input type="password" name="login-password" placeholder='Enter Your Password' required />
                    <label className='terms-label'> <input type="checkbox" name="login-terms" required /> By continuing, I Agree to the Terms of Use and Privacy Policy</label>
                    <button>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register