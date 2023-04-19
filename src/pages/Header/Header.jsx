import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { userAuthContex } from '../../provider/Auth/AuthProvider';
const Header = () => {
    const { user, signout } = useContext(userAuthContex)
    const handelLogOut=()=>{
        signout()
    }
    return (
        <Container>
            <div className='text-center my-3'>
                <img className='width' src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p className='fw-bold'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='bg-light py-2 rounded-3 px-4 d-flex g-2'>
                <Button variant="danger  fw-bold">Latest</Button>
                <Marquee className='bg-none text-black fs'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <div className='container my-5 '>
                <Navbar className='mx-auto' collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Link className='text-decoration-none text-secondary' to={"/"}>Home </Link>
                                <Link className='ms-5 text-decoration-none text-secondary'> About</Link>
                                <Link className='ms-5 text-decoration-none text-secondary'> Career</Link>
                                <h4 className='ms-5'>{user && user.displayName
                                }</h4>
                            </Nav>
                            <Nav>
                                {
                                    user ? <img className='imgSize' src={user && user.photoURL
                                    } alt="" /> : <AiOutlineUser className='fs-1' />
                                }
                                {
                                    user ? <Link className='ms-2'> <Button variant="secondary" onClick={handelLogOut}>Logout</Button></Link> : <Link className='ms-2' to={'/login'}> <Button variant="secondary">Login</Button></Link>

                                }
                                
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;