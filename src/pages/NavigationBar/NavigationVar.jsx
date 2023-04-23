import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { userAuthContex } from '../../provider/Auth/AuthProvider';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
const NavigationVar = () => {
    const { user, signout } = useContext(userAuthContex)
    const handelLogOut = () => {
        signout()
    }
    return (
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
    );
};

export default NavigationVar;