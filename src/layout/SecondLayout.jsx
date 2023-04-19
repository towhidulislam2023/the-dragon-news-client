import React from 'react';
import Header from '../pages/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavRight from '../pages/NavRight/NavRight';

const SecondLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col xs={9}><Outlet></Outlet></Col>
                    <Col xs={3}><NavRight></NavRight></Col>
                </Row>
            </Container>
        </div>
    );
};

export default SecondLayout;