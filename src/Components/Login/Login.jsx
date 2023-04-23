import React, { useContext } from 'react';
import Header from '../../pages/Header/Header';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userAuthContex } from '../../provider/Auth/AuthProvider';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const { loginUser }=useContext(userAuthContex)
    const handelLogin=(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        loginUser(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error);
        })
        form.reset()
    }
   
    return (
        <>
        <Container className='my-5'>
                <h1 className='text-center'>Login your account </h1>
                <div className='loginbox'>
                    <form onSubmit={handelLogin} className='w-50 mx-auto bg-light p-5'>
                        <label htmlFor="Email" className=' fw-bold'>Email address</label>
                        <br />
                        <input type="Email" name='email' className='w-100 py-2 px-2 my-2 rounded-1 border border-none ' required placeholder='Enter your email address' />
                        <label htmlFor="Password" className=' fw-bold mt-3'> Password </label>
                        <br />
                        <input type="password" name='password' className='w-100 py-2 px-2 my-2 rounded-1 border border-none ' required placeholder='Enter your password' />
                        <button className='w-100 bg-secondary border border-none mt-5 py-3 fw-bold text-white rounded-2'>Login</button>
                        <p className='text-center my-2'><small>Dont’t Have An Account ? <Link className='text-danger' to={"/registar"}>Register</Link> </small></p>
                    </form>

                </div>
        </Container>
            
        </>
    );
};

export default Login;