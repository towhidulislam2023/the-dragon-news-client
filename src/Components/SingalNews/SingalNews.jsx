import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { BsFillBookmarkFill, BsShareFill, BsEyeFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Col, Row } from 'react-bootstrap';
const SingalNews = () => {
    const data=useLoaderData()
    console.log(data);
    const { author, details, image_url, others_info, rating, thumbnail_url, title, total_view, category_id, _id } = data
    return (
        <div className='my-5'>
            <Card className=''>
                <Card.Body>
                    <Card.Title className='fs-1'>{title}</Card.Title>
                    <img className='mx-auto d-block w-100 my-5' src={image_url} alt="" />
                    <Card.Text className='mb-3'>
                        {details}
                    </Card.Text>
                    <Link className='' to={`/catagory/${category_id}`}>
                        <Button variant="danger"> <BsFillArrowLeftSquareFill></BsFillArrowLeftSquareFill> All news in this category</Button>
                    </Link>
                   
                </Card.Body>
            </Card>
            <Row xs={1} md={2} lg={3} className="g-4">
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
        </div>
    );
};

export default SingalNews;