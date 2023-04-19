import React, { useContext } from 'react';
import Header from '../../pages/Header/Header';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userAuthContex } from '../../provider/Auth/AuthProvider';
const Registar = () => {
    const { createUser, sendEmailforvarification, updateUserInfo }=useContext(userAuthContex)
    const handelRegistar=(event)=>{
        event.preventDefault()
        const form=event.target
        const name = form.name.value
        const photourl = form.photourl.value
        const email = form.email.value
        const password=form.password.value
        if (password.length<8) {
            alert("Must be 8 ")
            return
            
        }
        console.log(name,photourl,email,password);
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            updateUserInfo(name,photourl)
            sendEmailforvarification()
            .then(result=>{
                alert("Check Email")
            })
            .catch(error=>{
                console.log(error);
            })
        })
        .catch(errror=>{
            console.log(errror);
        })
        form.reset()
    }
    return (
        <>
            <Header></Header>
            <Container className='my-5'>
                <h1 className='text-center my-3'>Register your account</h1>
                <div className='loginbox'>
                    <form onSubmit={handelRegistar} className='w-50 mx-auto bg-light p-5'>
                        <label htmlFor="Email" required className=' fw-bold'>Your Name</label>
                        <br />
                        <input type="text" className='w-100 py-2 px-2 my-2 rounded-1 border border-none ' name='name' placeholder='Enter your name' />

                        <label htmlFor="Email" className=' fw-bold mt-3'>Photo URL</label>
                        <br />
                        <input type="text" className='w-100 py-2 px-2 my-2 rounded-1 border border-none ' name='photourl' placeholder='Enter your Photo URL' />

                        <label htmlFor="Email" className=' fw-bold mt-3'>Email address</label>
                        <br />
                        <input type="Email" name='email' className='w-100 py-2 px-2 my-2 rounded-1 border border-none ' placeholder='Enter your email address'  required/>
                        <label htmlFor="Password" className=' fw-bold mt-3'> Password </label>
                        <br />
                        <input type="password" name='password' className='w-100 py-2 px-2 my-2 rounded-1 border border-none ' placeholder='Enter your password' required />
                        <div className='d-flex align-items-center '>
                            <input type="checkbox" /><small className='ms-2'>Accept Term & Conditions</small>
                        </div>
                        <button className='w-100 bg-secondary border border-none mt-5 py-3 fw-bold rounded-1 text-white'>Register</button>
                        <p className='text-center my-2'><small>Do Have An Account ? <Link className='text-danger' to={"/login"}>Login</Link> </small></p>
                    </form>

                </div>
            </Container>

        </>
    );
};

export default Registar;