import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Header/Header';
import NavRight from '../pages/NavRight/NavRight';
import NavLeft from '../pages/NavLeft/NavLeft';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
    return (
        <>
        <Header></Header>
            <Container>
                <Row>
                    <Col xs={2}><NavLeft></NavLeft></Col>
                    <Col xs={7}><Outlet></Outlet></Col>
                    <Col xs={3}><NavRight></NavRight></Col>
                </Row>
            </Container>
        </>

    );
};

export default MainLayout;