import React from 'react'
import Navbar from '../components/Navbar'


const ForgotPassword = () => {
    return (
        <div className='login-reg-page'>
            <Navbar></Navbar>
            <div className='login-reg'>
                <h1>Reset Password</h1>
                <form id='login-reg-form'>
                    <label>Email id</label>
                    <input type="email" name="login-email" placeholder='abc@example.com' required />
                    <label>Password</label>
                    <input type="password" name="login-password" placeholder='Enter Your Password' required />
                    <button>Reset Password</button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword