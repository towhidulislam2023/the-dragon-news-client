import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsFillBookmarkFill, BsShareFill, BsEyeFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
const SingalNews = () => {
    const data=useLoaderData()
    console.log(data);
    const { author, details, image_url, others_info, rating, thumbnail_url, title, total_view, category_id, _id } = data
    return (
        <div className='my-5'>
            <Card className=''>
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-3'>
                            <img className='imgSize' src={author.img} alt="" />
                            <div>
                                <h6>{author.name ? author.name : 'Unknown'}</h6>
                                <p>{author.published_date ? author.published_date : "Unknown"}</p>
                            </div>
                        </div>
                        <div>
                            <BsFillBookmarkFill className='fs-1 me-1' />
                            <BsShareFill className='fs-1 ' />
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='fs-1'>{title}</Card.Title>
                    <img className='mx-auto d-block w-100 my-5' src={image_url} alt="" />
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>Rating {rating.number}</h6>
                        </div>
                        <div>
                            <BsEyeFill />  {total_view ? total_view : 0}
                        </div>
                    </div>
                    <Link to={"/"}>
                        <Button variant="danger"> <BsFillArrowLeftSquareFill></BsFillArrowLeftSquareFill> All news in this category</Button>
                    </Link>
                   
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default SingalNews;