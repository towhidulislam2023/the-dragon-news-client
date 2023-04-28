import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='text-center'>
            <h1>Accept Term & Conditions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis quis iusto veritatis perspiciatis eaque? Itaque, omnis eum dolore natus repellendus alias quaerat commodi, quis nemo debitis, eveniet porro voluptas?</p>
            <Link to={"/registar"}><span>Go Back</span></Link> 
        </div>
    );
};

export default Terms;