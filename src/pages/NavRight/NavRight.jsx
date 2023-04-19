import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { BsGoogle, BsGithub, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';
import "./NavRight.css"
import { userAuthContex } from '../../provider/Auth/AuthProvider';

const NavRight = () => {
    const { loginWithGoogle, loginWithgithub } = useContext(userAuthContex)
    const handelGoogleLogin=()=>{
        loginWithGoogle()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handelGithubLogin =()=>{
        loginWithgithub()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='bg-light px-2'>
            <div>
                <h4 >Login with</h4>
                <Button onClick={handelGoogleLogin} variant="outline-primary w-75 mt-1 "> <BsGoogle /> <span className='ms-1 fw-bold'>Google</span> </Button>
                <br />
                <Button onClick={handelGithubLogin} variant="outline-secondary w-75 my-3"> <BsGithub /> <span className='ms-1'>Github</span> </Button>
            </div>
            <div className='mb-3'>
                <h4 className=''>Find Us On</h4>

                <ListGroup>
                    <ListGroup.Item className='py-4'> <BsFacebook className='fs-1 text-primary' /> <span className='ms-2 '>Facebook</span>
                    </ListGroup.Item>
                    <ListGroup.Item className='py-4 '> <BsTwitter className='fs-1 text-primary' /> <span>Twitter</span> </ListGroup.Item>
                    <ListGroup.Item className='py-4'> <BsInstagram className='fs-1 text-danger' /> <span>Instragram</span></ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <h4 className='fw-bold'>Q-Zone</h4>
                <div className='text-center'>
                    <img className='my-2' src={qZone1} alt="" />
                    <img className='my-2' src={qZone2} alt="" />
                    <img className='my-2' src={qZone3} alt="" />
                </div>
               
            </div>
            <div className='bg-set my-3 text-center pt-5 px-5 text-light'>
                <h1 className=''>Create an Amazing Newspaper</h1>
                <h5 className='my-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h5>
                <Button variant="danger py-3">Learn More</Button>
            </div>
        </div>
    );
};

export default NavRight;