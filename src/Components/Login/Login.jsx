import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
    return (
        <div className='pt-5 pb-5' style={{backgroundColor:'#EEE'}}>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="row w-75 login-header">
                    <div className="col-md-6 text-center">
                    <img height={200} width={200} src={logo} alt='logo'/>
                        <h3 className='pt-2'>Brahmanbaria Welfare Association</h3>
                        <p>Jagannath University</p>
                    </div>
                    <div className="col-md-6 shadow-sm p-3 mb-3 bg-body rounded">
                        <h3 className='text-center fw-bold'>LOGIN</h3>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
                            <input type="email" className="form-control shadow-sm p-3 mb-3 bg-body rounded"  placeholder="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password </label>
                            <input type="password" className="form-control shadow-sm p-3 mb-3 bg-body rounded"  placeholder="password"/>
                        </div>
                        <input className='loginBtn' type='button' value='Login'/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login