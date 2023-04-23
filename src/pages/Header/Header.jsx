import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import "./Header.css"
import NavigationVar from '../NavigationBar/NavigationVar';
const Header = () => {

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
                {/* <NavigationVar></NavigationVar> */}
            </div>
        </Container>
    );
};

export default Header;