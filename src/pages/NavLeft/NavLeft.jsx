import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavLeft = () => {

    const [catagories, setCatagoris] = useState([])
    useEffect(() => {
        fetch('https://the-dragon-news-server-towhidulislam2023.vercel.app/catagories')
            .then(res => res.json())
            .then(data => setCatagoris(data))
            .catch(error => console.log(error))

    }, [])
    return (
        <>

            <div>
                <h4>All Caterogy</h4>
                {
                    catagories && catagories.map(catagory =>
                        <Link className='text-decoration-none' key={catagory.id} to={`/catagory/${catagory.id}`}> <h5 className='my-5 text-secondary' key={catagory.id}>{catagory.name}</h5></Link>
                    )
                }
            </div>
            <Row xs={1} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png" />
                        <Card.Body>
                            <Card.Title>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</Card.Title>
                            <Card.Text>10/12/2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/xh57pkr/unsplash-Eh-Tc-C9s-YXsw-1.png" />
                        <Card.Body>
                            <Card.Title>America Imported Over $6 Billion in Goods From Russia Since Ukraine Invasion</Card.Title>
                            <Card.Text>10/12/2023
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/vz5K0FB/unsplash-Eh-Tc-C9s-YXsw-10.png" />
                        <Card.Body>
                            <Card.Title>Up Late with Ben Harvey: Why Troy Mercanti needs to start an OnlyFans account</Card.Title>
                            <Card.Text>10/12/2022
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default NavLeft;